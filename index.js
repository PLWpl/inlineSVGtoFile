const fs = require("fs");
const chalk = require("chalk");
const lineByLine = require("n-readlines");

getSvgFile = (inputFileName, outputFileName = 'icon') => {
  const liner = new lineByLine(inputFileName);
  let line;
  let lineNumber = 1;

  console.log(
    chalk.blue(
      `Started -------------------------------------------------`
    )
  );

  while ((line = liner.next())) {
    let currentLineNumber = lineNumber++;
    let currentLineContent = line.toString('utf8');
    const fileName = outputFileName + currentLineNumber + '.svg';

    fs.appendFile(fileName, currentLineContent, (err) => {
      if (err) throw err;
      console.log(`${fileName} created!`);
    })
  }

  console.log(
    chalk.blue(
      `-------------------------------------------------Finished`
    )
  );
};

// each line in the file passed bellow needs to be a separate svg, starting with <svg> and ending with </svg>

getSvgFile('icon.txt');

