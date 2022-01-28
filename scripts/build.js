const fs = require('fs');
const path = require('path');

const root = path.dirname(__dirname);
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');

/**
 * Copy the source path to the destination
 * 
 * @param {string} source
 * @param {string} destination
 */
function copySync(source, destination) {
  if (!fs.existsSync(source)) throw new Error(`'${source}' does not exist.`);

  const isDirectory = fs.lstatSync(source).isDirectory();

  if (!isDirectory) {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(source, destination);
    return;
  }

  fs.readdirSync(source).forEach(entry => {
    copySync(path.join(source, entry), path.join(destination, entry));
  });
}

function writePackageJson(source, destination) {
  const {
    name,
    version,
    description,
    main,
    repository,
    author,
    license,
    bugs,
    homepage,
    peerDependencies,
  } = require(path.join(source, 'package.json'));

  const contents =  JSON.stringify({
    name,
    version,
    description,
    main,
    repository,
    author,
    license,
    bugs,
    homepage,
    peerDependencies,
  }, null, 2);

  fs.writeFileSync(path.join(destination, 'package.json'), contents);
}

copySync(src, dist);

// Not a great solution but doesn't matter enough to be worth fixing.
copySync(path.join(root, 'README.md'), path.join(dist, 'README.md'));
copySync(path.join(root, 'LICENSE'), path.join(dist, 'LICENSE'));

writePackageJson(root, dist);
