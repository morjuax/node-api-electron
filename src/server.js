
const app = require('./app');

const port = '7777';
async function main() {
    await app.listen(port);
    console.log(`Server is running on ${port}`);
}

module.exports = { main };
