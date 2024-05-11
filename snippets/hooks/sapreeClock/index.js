"use client";
import { useEffect, useState } from "react";
import { getBetId } from "@/snippets/utils/sapree";
const { betId, timeInBet, isLocked } = getBetId();

function getMin(t) {
  const ct = t || 180;
  return Math.floor(ct / 60);
}

function getSecond(t, index) {
  const ct = t || 180;
  const i = index || 0;
  const min = Math.floor(ct / 60);
  const sec = ct - min * 60;
  const str = String(sec);
  if (str.length > 1) {
    return str[i];
  } else {
    return i === 0 ? "0" : str[0];
  }
}

export default function SapreeClockHook() {
  const [seconds, setSeconds] = useState(timeInBet);
  const [currentBetId, setBetId] = useState(betId);
  const [lock, setLock] = useState(isLocked);

  const clockSecondsTenth = getSecond(seconds);
  const clockSecondsUnit = getSecond(seconds, 1);
  const clockMinutes = getMin(seconds);

  useEffect(() => {
    const runPerSec = () => {
      const { timeInBet: sec, betId: id, isLocked: isLock } = getBetId();
      setBetId(id);
      setSeconds(sec);
      setLock(isLock);
    };
    const interval = setInterval(runPerSec, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    clockSecondsTenth,
    clockSecondsUnit,
    clockMinutes,
    lock,
    betId: currentBetId,
  };
}
