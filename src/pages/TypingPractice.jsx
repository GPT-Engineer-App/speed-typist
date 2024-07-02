import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sampleText = "The quick brown fox jumps over the lazy dog.";

const TypingPractice = () => {
  const [userInput, setUserInput] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isStarted) {
      inputRef.current.focus();
    }
  }, [isStarted]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleStart = () => {
    setUserInput("");
    setIsStarted(true);
  };

  const getHighlightedText = () => {
    return sampleText.split("").map((char, index) => {
      let color;
      if (index < userInput.length) {
        color = char === userInput[index] ? "text-green-500" : "text-red-500";
      }
      return (
        <span key={index} className={color}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl mb-4">Typing Practice</h1>
      <div className="mb-4 text-xl">{getHighlightedText()}</div>
      <Input
        ref={inputRef}
        value={userInput}
        onChange={handleChange}
        disabled={!isStarted}
        className="mb-4"
      />
      <Button onClick={handleStart}>
        {isStarted ? "Restart" : "Start"} Typing Practice
      </Button>
    </div>
  );
};

export default TypingPractice;