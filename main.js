const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('window-all-closed', function () {
    app.quit();
});

app.on('ready', function () {
    // This creates a completely frameless window with no buttons.
    // mainWindow = new BrowserWindow({ width: 1024, height: 768, frame: false });
    // This hides the title bar.
    // mainWindow = new BrowserWindow({ width: 1024, height: 768, titleBarStyle: 'hiddenInset' });
    mainWindow = new BrowserWindow({ width: 1024, height: 768, transparent: false });
    mainWindow.loadURL('file://' + __dirname + '/browser.html');
    mainWindow.openDevTools();
});
