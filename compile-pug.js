const pug = require('pug');
const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'templates');
const outputDir = path.join(__dirname, 'output');
const assetsDir = path.join(__dirname, '../assets');

function loadJsonData() {
  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    return {};
  }

  const data = {};
  const files = fs.readdirSync(dataDir);
  const jsonFiles = files.filter(file => file.endsWith('.json'));

  jsonFiles.forEach(file => {
    const filePath = path.join(dataDir, file);
    const key = path.basename(file, '.json');
    try {
      data[key] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      console.log(`Loaded data: ${key}`);
    } catch (error) {
      console.error(`Error loading ${file}:`, error.message);
    }
  });

  return data;
}

function compilePugFiles() {
  if (!fs.existsSync(templatesDir)) {
    fs.mkdirSync(templatesDir, { recursive: true });
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const data = loadJsonData();
  const files = fs.readdirSync(templatesDir);
  const pugFiles = files.filter(file => file.endsWith('.pug'));

  pugFiles.forEach(file => {
    const inputFile = path.join(templatesDir, file);
    const outputFile = path.join(outputDir, file.replace('.pug', '.html'));

    try {
      const html = pug.renderFile(inputFile, {
        ...data,
        basedir: templatesDir,
        assetsPath: '/assets'
      });
      fs.writeFileSync(outputFile, html);
      console.log(`Compiled: ${file} -> ${path.basename(outputFile)}`);
    } catch (error) {
      console.error(`Error compiling ${file}:`, error.message);
    }
  });
}

compilePugFiles();