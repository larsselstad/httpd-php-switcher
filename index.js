const fs = require('fs');
const {execSync} = require('child_process');

function isPhpLine(line) {
    return /php\d_module/.test(line);
}

// first to argv is node and script path
// don't need them
const [, , httpConfPath, version] = process.argv;

console.log('Changing httpd.conf at: ' + httpConfPath);

console.log('---');

const httpConfContent = fs.readFileSync(httpConfPath, 'utf8');
const lines = httpConfContent.split('\n');
const phpLines = lines.filter(isPhpLine);
const phpLineIndexs = phpLines.map(pLine => lines.indexOf(pLine));

console.log('php modules in httpd.conf:');
phpLines.forEach(l => console.log(l));

console.log('Changing to php' + version);

phpLines.forEach((pLine, i) => {
    const versionRegex = new RegExp(`php${version}_module`);

    // checking which php version that phpLine is
    if (versionRegex.test(pLine)) {
        // remove # from line if that is the version that should be used
        if (pLine.startsWith('#')) {
            lines[phpLineIndexs[i]] = pLine.slice(1);
        }
    } else {
        // adding # to the line if that is the version that should not be used
        if (!pLine.startsWith('#')) {
            lines[phpLineIndexs[i]] = '#' + pLine;
        }
    }
});

console.log('---');

console.log('new php modules in httpd.conf:');
lines.filter(isPhpLine).forEach(l => console.log(l));

console.log('---');

console.log('Saving new httpd.conf at: ' + httpConfPath);

fs.writeFileSync(httpConfPath, lines.join('\n'), 'utf8');

console.log('Restarting apache');

console.log(execSync('apachectl -k restart').toString());

console.log('Now using php' + version);
