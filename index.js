const fs = require("fs");
const chalk = require("chalk");
const lineByLine = require("n-readlines");

getSvgFile = (fileName) => {
  const liner = new lineByLine(fileName);
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
    const fileName = "icon" + currentLineNumber + '.svg';

    fs.appendFile(fileName, currentLineContent, (err) => {
      if (err) throw err;
      console.log(`${fileName} created!`);
    })
  }
};

// each line in the file passed bellow needs to be a separate svg, starting with <svg> and ending with </svg>

getSvgFile('icon.txt');

