const path = require('path');
const { app, BrowserWindow } = require('electron')


const isDev = process.env.NODE_ENV !== 'development';



const createMainWindow = () => {
    const mainWindow = new BrowserWindow({
        title: "اسودیان مالی",
        width: 500 ? 1000 : 500,
        height: 600
    })


    if (isDev) {
        mainWindow.webContents.openDevTools()
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));

}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
    })

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})