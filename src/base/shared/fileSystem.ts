import fs from 'fs';

function fileExists(filename: string): boolean {
  try {
    fs.accessSync(filename);
    return true;
  } catch (e) {
    return false;
  }
}

function readDir(path: string) {
  return fs.readdirSync(path);
}

function readFile(path: string, options) {
  return fs.readFileSync(path, options);
}

function readLines(path: string, options) {
  return fs
    .readFileSync(path, options)
    .toString()
    .split('\n');
}

function writeFile(file: string, content) {
  try {
    fs.writeFileSync(file, content, 'utf8');
    return true;
  } catch (e) {
    throw new Error(e);
  }
}

export { fileExists, readDir, readFile, readLines, writeFile };
