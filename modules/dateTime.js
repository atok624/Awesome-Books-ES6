// eslint-disable-next-line import/no-unresolved, no-useless-escape
import { DateTime } from './luxon.js';

const today = document.getElementById('date');
const setTime = () => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  today.textContent = date;
};

setInterval(setTime, 1000);

export default setTime;