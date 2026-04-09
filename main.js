const { app, BrowserWindow, Menu } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800
  });

  win.loadURL('https://board.mile.app');

  const template = [
    {
      label: 'Distribusi',
      submenu: [
        {
          label: 'Jakarta Timur',
          click: () => win.loadURL('https://board.mile.app/app/kibana?jat')
        },
        {
          label: 'Jakarta Utara',
          click: () => win.loadURL('https://board.mile.app/app/kibana?jku')
        }
      ]
    },
    {
      label: 'Pool Antar',
      submenu: [
        { label: 'Batu Ampar', click: () => win.loadURL('https://board.mile.app/app/kibana?batuampar') },
        { label: 'Cakung', click: () => win.loadURL('https://board.mile.app/app/kibana?cakung') },
        { label: 'Duren Sawit', click: () => win.loadURL('https://board.mile.app/app/kibana?durensawit') },
        { label: 'Jatinegara', click: () => win.loadURL('https://board.mile.app/app/kibana?jatinegara') },
        { label: 'Koja Cilincing', click: () => win.loadURL('https://board.mile.app/app/kibana?kocil') },
        { label: 'Pekayon', click: () => win.loadURL('https://board.mile.app/app/kibana?pekayon') },
        { label: 'Pluit', click: () => win.loadURL('https://board.mile.app/app/kibana?pluit') },
        { label: 'Pulo Gadung', click: () => win.loadURL('https://board.mile.app/app/kibana?pulogadung') },
        { label: 'Sunter', click: () => win.loadURL('https://board.mile.app/app/kibana?stasiun') }
      ]
    },
    {
      label: 'Keluar',
      click: () => app.quit()
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);
