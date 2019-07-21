w = nodeRequire('electron').remote
.getCurrentWindow();

w.setVibrancy('ultra-dark');
w.setBackgroundColor('#00000000');
w.setFullScreen(true);