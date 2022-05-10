import GameSavingLoader from './gameSavingLoader.js';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    return saving;
  } catch (error) {
    throw new Error(error);
  }
})();
