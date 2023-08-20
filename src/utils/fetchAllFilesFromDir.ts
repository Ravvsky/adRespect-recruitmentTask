const fs = require('fs');
const path = require('path');

const outputFileName = 'files.json';

function fetchAllFilesFromDir(fetchFrom, saveTo) {
  fs.readdir(fetchFrom, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    const fileNames = files.filter((file) =>
      fs.statSync(path.join(fetchFrom, file)).isFile()
    );

    const filePath = path.join(saveTo, outputFileName);
    fs.writeFile(
      filePath,
      JSON.stringify(fileNames, null, 2),
      'utf8',
      (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
          return;
        }
        console.log(`File names saved to ${outputFileName} in ${saveTo}`);
      }
    );
  });
}
const args = process.argv.slice(2);

fetchAllFilesFromDir(args[0], args[1]);
