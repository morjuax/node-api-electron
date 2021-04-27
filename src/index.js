const {app, BrowserWindow, Menu, ipcMain} = require('electron');
//const stub = require('./stub')
const url = require('url');
const path = require('path');
const {main} = require('./server')

let mainWindow = null;
const isMac = process.platform === 'darwin';
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        title: 'Products App',
        width:720,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }));
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);

    mainWindow.on('closed', () => {
        // app.quit();
        mainWindow = null;
    })
});

ipcMain.on('run-server', async () => {
    console.log('Run server with files path ', path.join(`${__dirname}./../stubs/config.yaml`));
    await main();
    mainWindow.webContents.send('run-server-web', { path: path.join(`${__dirname}./../stubs/config.yaml`) });
})

const templateMenu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New Product',
                accelerator: 'Ctrl+N',
                click() {
                    // createNewProductWindow();
                }
            },
            {
                label: 'Remove All Products',
                click() {
                    mainWindow.webContents.send('products:remove-all');
                }
            },
            {
                label: 'Exit',
                accelerator: isMac ? 'command+q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    },
];

if (process.env.NODE_ENV !== 'production') {
    templateMenu.push({
        label: 'DevTools',
        submenu: [
            {
                label: 'Show/Hide Dev Tools',
                accelerator: 'Ctrl+D',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}




