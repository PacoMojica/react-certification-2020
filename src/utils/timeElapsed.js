import { LAPSE_SECONDS } from './constants';

export default function timeSince(rawDate) {
  const date = new Date(rawDate);
  const today = new Date();
  const totalSeconds = Math.floor((today - date) / 1000);

  for (const [lapseType, lapseSeconds] of Object.entries(LAPSE_SECONDS)) {
    const lapse = Math.floor(totalSeconds / lapseSeconds);

    if (lapse >= 1) {
      return (
        `${lapse} ${lapse === 1 ? lapseType : lapseType + 's'} ago`
      );
    }
  }
}