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
  const { reward, isAnimating } = useReward("rewardId", "confetti");

  useInterval(() => {
    reward();
  });

  return (
    <div className="App">
      <span id="rewardId" />
    </div>
  );
};
