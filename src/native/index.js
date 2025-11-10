import { ipcMain } from "electron";

export function registerIpcMainHandler() {
  ipcMain.handle("ping", () => "pong");
}
