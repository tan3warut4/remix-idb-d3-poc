
import { useState, useEffect } from "react";

export default function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);

  useEffect(() => {
    const updateNetworkStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);
  }, []);

  return { isOnline };
}