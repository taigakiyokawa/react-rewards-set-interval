import "./App.css";
import { FC, useEffect } from "react";
import { useReward } from "react-rewards";

export const App: FC = () => {
  const { reward, isAnimating } = useReward("rewardId", "confetti");

  useEffect(() => {
    const timerId = setInterval(() => {
      reward();
    }, 1000);
    return () => clearInterval(timerId);
  }, [reward]);

  return (
    <div className="App">
      <span id="rewardId" />
    </div>
  );
};
