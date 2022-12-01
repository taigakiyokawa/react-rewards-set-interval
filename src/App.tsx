import "./App.css";
import { FC, useEffect, useRef } from "react";
import { useReward } from "react-rewards";

const useInterval = (callback: () => void) => {
  const callbackRef = useRef(() => {});

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const timerId = setInterval(() => callbackRef.current(), 1000);
    return () => clearInterval(timerId);
  }, []);
};

export const App: FC = () => {
  const { reward: rewardLeft, isAnimating: isAnimatingLeft } = useReward(
    "rewardLeft",
    "confetti",
    {
      angle: 45,
      position: "absolute",
    }
  );
  const { reward: rewardRight, isAnimating: isAnimatingRight } = useReward(
    "rewardRight",
    "confetti",
    {
      angle: 135,
      position: "absolute",
    }
  );

  useInterval(() => {
    if (!isAnimatingRight || !isAnimatingLeft) {
      rewardLeft();
      rewardRight();
    }
  });

  return (
    <>
      <header className="header">
        <span id="rewardLeft" />
        <span id="rewardRight" />
      </header>
      <footer className="footer" />
    </>
  );
};
