const notOnArm = ['pcsx2', 'shadps4', 'model2', 'supermodel'];
const onlyOnArm = ['armsx2'];
const notOnWindows = ['rmg', 'ares'];

export const isEmulatorAvailable = (id, system, arch) => {
  if (system === 'win32' && notOnWindows.includes(id)) {
    return false;
  }
  if (arch === 'arm64') {
    return system === 'win32' || !notOnArm.includes(id);
  }
  return !onlyOnArm.includes(id);
};

export default isEmulatorAvailable;
