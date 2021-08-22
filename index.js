
const os = require('os');

const platform = `${os.platform()}-${os.arch()}`;
const packageName = `@jsrsc/hellorust-${platform}`

if (!require('./package.json').optionalDependencies[packageName]) {
    throw 'Unsupported platform/architecture: ' + platform;
}
module.exports = require(packageName);