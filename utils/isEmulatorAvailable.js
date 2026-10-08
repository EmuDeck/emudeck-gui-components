const notOnArm = ['pcsx2', 'shadps4', 'model2', 'supermodel'];
const onlyOnArm = ['armsx2'];

// Prevent ARM / X86 emulators appearing where they are not supposed to be
export const isEmulatorAvailable = (id, system, arch) => {
  if (arch === 'arm64') {
    return system === 'win32' || !notOnArm.includes(id);
  }
  return !onlyOnArm.includes(id);
};

export default isEmulatorAvailable;
