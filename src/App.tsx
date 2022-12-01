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
  const { reward: rewardRight, isAnimating: isAnimatingRight } = useReward(
    "rewardRight",
    "confetti",
    { angle: 45 }
  );
  const { reward: rewardLeft, isAnimating: isAnimatingLeft } = useReward(
    "rewardLeft",
    "confetti",
    { angle: 135 }
  );

  useInterval(() => {
    if (!isAnimatingRight || !isAnimatingLeft) {
      rewardRight();
      rewardLeft();
    }
  });

  return (
    <>
      <header className="header">
        <span id="rewardRight" />
        <span id="rewardLeft" />
      </header>
      <footer className="footer" />
    </>
  );
};
