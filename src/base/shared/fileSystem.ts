import fs from 'fs';

function fileExists(filename) {
  try {
    fs.accessSync(filename);
    return true;
  } catch (e) {
    return false;
  }
}

function readDir(path) {
  return fs.readdirSync(path);
}

function readFile(path, options) {
  return fs.readFileSync(path, options);
}

function readLines(path, options) {
  return fs
    .readFileSync(path, options)
    .toString()
    .split('\n');
}

function writeFile(file, content) {
  try {
    fs.writeFileSync(file, content, 'utf8');
    return true;
  } catch (e) {
    throw new Error(e);
  }
}

export { fileExists, readDir, readFile, readLines, writeFile };
