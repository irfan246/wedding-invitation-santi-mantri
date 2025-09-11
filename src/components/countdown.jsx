import React, { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-09-21T08:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-[0.5rem]">
      {[
        { label: "Hari", value: timeLeft.days },
        { label: "Jam", value: timeLeft.hours },
        { label: "Menit", value: timeLeft.minutes },
        { label: "Detik", value: timeLeft.seconds },
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center bg-gradient-to-b from-[#6a3d28] to-[#9a6b4f] text-white w-[5rem] h-[5rem] rounded-[1rem]"
        >
          <span
            className="text-[1.4rem] text-[#ffffff]"
            style={{ fontWeight: "bold" }}
          >
            {item.value}
          </span>
          <span className="text-[0.8rem] text-[#ffffff]">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
