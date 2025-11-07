const { version, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("versions", process.versions);
