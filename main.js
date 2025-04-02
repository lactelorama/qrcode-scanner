import { app, BrowserWindow }  from 'electron/main';
import { systemPreferences } from "electron";


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    }
  })

  win.loadFile('index.html')
  const hasMicrophonePermission =
  systemPreferences.getMediaAccessStatus("microphone") === "granted";
  const hasCameraPermission =
  systemPreferences.getMediaAccessStatus("camera") === "granted";
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})