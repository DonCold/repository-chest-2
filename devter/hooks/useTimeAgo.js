import { useEffect, useState } from "react";

const DATE_INITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiffs = (timestamp) => {
  const now = Date.now();
  const diff = (now - timestamp) / 1000;

  for (const [unit, seconds] of DATE_INITS) {
    if (diff > seconds || unit === "second") {
      const value = Math.floor(diff / seconds);
      return {
        value,
        unit,
      };
    }
  }
};

const useTimeAgo = (timestamp) => {
  const [timeAgo, setTimeAgo] = useState(() => getDateDiffs(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp);
      setTimeAgo(newTimeAgo);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const rtf = new Intl.RelativeTimeFormat("es", {
    style: "short",
  });

  const { value, unit } = timeAgo;
  return rtf.format(value * -1, unit);
};

export default useTimeAgo;
