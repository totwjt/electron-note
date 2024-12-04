const { app, BrowserWindow } = require('electron')
const { join } = require('path')

let mainWindow = null;

const createWindow = () => {
    // 如果窗口已存在，直接显示并聚焦
    if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore();
        mainWindow.focus();
        return;
    }

    // 创建新窗口
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        title: '',
        icon: join(__dirname, '../public/logo.ico'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    if (process.env.VITE_DEV_SERVER_URL) {
        mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(join(__dirname, '../dist/index.html'));
    }

    // 监听窗口关闭事件
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});