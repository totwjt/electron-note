"use strict";
const { app, BrowserWindow } = require("electron");
const { join } = require("path");
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
const createWindow = () => {
  console.log("ww", process.env.VITE_DEV_SERVER_URL);
  const win = new BrowserWindow({
    // width: 800,
    width: 1e3,
    height: 600,
    title: "",
    titleBarStyle: "hidden",
    // 隐藏原生标题栏
    frame: false,
    // 移除窗口框架
    icon: join(__dirname, "../public/logo.ico")
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    win.loadFile(join(__dirname, "../dist/index.html"));
  }
};
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
