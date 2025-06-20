import React, { useEffect, useState } from "react";

interface TypingProps {
  text: string;
  speed?: number;
  eraseSpeed?: number;
  delay?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  speed = 120,
  eraseSpeed = 60,
  delay = 4000,
  className = "",
}: TypingProps) {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    let cursorInterval: NodeJS.Timeout;
    let i = 0;

    // Cursor blink
    cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    function type() {
      interval = setInterval(() => {
        setDisplayed((prev) => {
          if (i < text.length) {
            i++;
            return text.slice(0, i);
          } else {
            clearInterval(interval);
            timeout = setTimeout(() => {
              setTyping(false);
            }, delay);
            return prev;
          }
        });
      }, speed);
    }

    function erase() {
      interval = setInterval(() => {
        setDisplayed((prev) => {
          if (i > 0) {
            i--;
            return text.slice(0, i);
          } else {
            clearInterval(interval);
            timeout = setTimeout(() => {
              setTyping(true);
            }, 200);
            return "";
          }
        });
      }, eraseSpeed);
    }

    i = typing ? 0 : text.length;
    if (typing) {
      type();
    } else {
      erase();
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [text, typing, speed, eraseSpeed, delay]);

  return (
    <span className={className}>
      {displayed}
      <span style={{ color: "#059669" , opacity: showCursor ? 1 : 0 }}>|</span>
    </span>
  );
}
