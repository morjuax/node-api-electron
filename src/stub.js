//const stubby = new (require('D:\\projects\\banco-pe-fingerprint-auth-electron\\node_modules\\stubby').Stubby);
//const yaml = require('D:\\projects\\banco-pe-fingerprint-auth-electron\\node_modules\\js-yaml');

const stubby = new (require('stubby').Stubby)
const yaml = require('js-yaml');
const { readFileSync } = require('fs-extra');
const path = require('path');

const options = {
    data: getDataFromYamlFile(),
    tls: 7777,
    stubs: 8083,
    admin: 8892,
    quiet: false,
    datadir: 'stubs'
}

function getDataFromYamlFile() {
    const filename = path.join(`${__dirname}./../stubs/config.yaml`);
    let filedata;

    try {
        filedata = (readFileSync(filename, 'utf8')).trim();
    } catch (e) {
        console.warn(`File "${filename}" could not be found. Ignoring...`);
        return [];
    }

    try {
        return yaml.load(filedata);
    } catch (e) {
        console.warn(`Couldn't parse "${filename}" due to syntax errors:`);
        console.log(e.message);
        process.exit(0);
    }
}

const run = () => {
    stubby.start(options);
}

module.exports = { run };
