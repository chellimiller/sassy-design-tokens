const path = require('path');
const sassdoc = require('sassdoc');

function createContents(data) {
  if (!data) return `export default [];`;
  return `export default ${JSON.stringify(data)};`;
}

function loader() {
  const options = this.getOptions();
  const callback = this.async();
  const resourcePath = path.dirname(this.resourcePath);

  sassdoc
    .parse(resourcePath, options)
    .then((data) => callback(null, createContents(data)))
    .catch((error) => callback(error, createContents()));
}

module.exports = loader;
