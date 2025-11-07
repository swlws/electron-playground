const { version, contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("__context_bridge__", {
  version: process.versions,
  ping: () => ipcRenderer.invoke("ping"),
});
