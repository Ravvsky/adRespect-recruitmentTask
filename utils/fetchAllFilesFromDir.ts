const path = require('path');

const outputFileName = 'files.json';

function fetchAllFilesFromDir(fetchFrom: string, saveTo: string) {
  try {
    const fs = require('fs');

    fs.readdir(fetchFrom, (err: any, files: any[]) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }

      const fileNames = files.filter((file: any) =>
        fs.statSync(path.join(fetchFrom, file)).isFile()
      );

      const filePath = path.join(saveTo, outputFileName);
      fs.writeFile(
        filePath,
        JSON.stringify(fileNames, null, 2),
        'utf8',
        (err: any) => {
          if (err) {
            console.error('Error writing JSON file:', err);
            return;
          }
          console.log(`File names saved to ${outputFileName} in ${saveTo}`);
        }
      );
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

const args = process.argv.slice(2);

fetchAllFilesFromDir(args[0], args[1]);
