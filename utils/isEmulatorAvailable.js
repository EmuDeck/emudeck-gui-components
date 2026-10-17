const notOnArm = ['pcsx2', 'shadps4'];
const onlyOnArm = ['armsx2'];
const notOnWindows = ['rmg', 'ares'];
const notOnDarwin = [
  'rmg',
  'ares',
  'bigpemu',
  'citron',
  'flycast',
  'mame',
  'melonds',
  'mgba',
  'model2',
  'primehack',
  'scummvm',
  'supermodel',
  'xenia',
  'yuzu',
  'eden',
  'pegasus',
];

export const isEmulatorAvailable = (id, system, arch) => {
  if (system === 'win32' && notOnWindows.includes(id)) {
    return false;
  }
  if (system === 'darwin' && notOnDarwin.includes(id)) {
    return false;
  }
  if (arch === 'arm64') {
    return system === 'win32' || !notOnArm.includes(id);
  }
  return !onlyOnArm.includes(id);
};

export default isEmulatorAvailable;
