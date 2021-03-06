Components.utils.import("resource://gre/modules/Services.jsm");
Services.scriptloader.loadSubScript("chrome://noscript/content/loader.js", this);

Cu.import("resource://gre/modules/XPCOMUtils.jsm");

INCLUDE("Main");

IPC.child = {
  QueryInterface: XPCOMUtils.generateQI([Ci.nsIMessageListener, Ci.nsISupportsWeakReference]),
  init: function() {
    Services.cpmm.addWeakMessageListener(IPC_P_MSG.CALL, this);
    Main.init();
  },
  dispose: function() {
    Services.cpmm.removeWeakMessageListener(IPC_P_MSG.CALL, this);
  },

  receiveMessage: function(m) {
    if (IPC.receiveMessage(m)) {
      return;
    }
  },

  remote(objName, method, args) {
    Services.cpmm.sendAsyncMessage(IPC_P_MSG.CALL, {objName, method, args});
  }

};

try {
  Main.bootstrap(true);
  IPC.child.init();
} catch (e) {
  Cu.reportError(e);
}

