import "./App.css";
import { FC } from "react";
import { useReward } from "react-rewards";

export const App: FC = () => {
  const { reward, isAnimating } = useReward("rewardId", "confetti");
  return (
    <div className="App">
      <button disabled={isAnimating} onClick={reward} className="button">
        <span id="rewardId" />
        🎉
      </button>
    </div>
  );
};
