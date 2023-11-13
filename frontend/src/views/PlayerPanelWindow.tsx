import { PlayerClient } from "@/class/IPlayer";

const PlayerPanelWindow: React.FC = () => {
  const playerClient = new PlayerClient();
  const data = playerClient.getPlayerData(1);
  return (
    <div className="sm:px-14 px-3 mt-10">
      <h1 className="font-bold text-2xl">{data?.name}</h1>
      <h1 className="font-bold text-2xl">{data?.surname}</h1>
      <h1 className="font-bold text-2xl">{data?.rank}</h1>
      <h1 className="font-bold text-2xl">{data?.character}</h1>
      <main className="flex flex-col mt-5"></main>
    </div>
  );
};

export default PlayerPanelWindow;
