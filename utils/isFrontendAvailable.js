const notOnArm = [];
const notOnWindows = [];
const notOnDarwin = ['pegasus'];

export const isFrontendAvailable = (id, system, arch) => {
  if (system === 'win32' && notOnWindows.includes(id)) {
    return false;
  }
  if (system === 'darwin' && notOnDarwin.includes(id)) {
    return false;
  }
  if (arch === 'arm64') {
    return system === 'win32' || !notOnArm.includes(id);
  }
  return true;
};

export default isFrontendAvailable;
