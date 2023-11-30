import React, { useState, useEffect } from "react";
import { PlayerApiClient } from "@/gateway/PlayerApiClient";
import { PlayerDto } from "@/class/dto/PlayerDto";
import { Button } from "@/components/ui/button";
import { DialogType, useDialog } from "@/dispatcher/dialogDispatcher";

const PlayerPanelWindow: React.FC = () => {
  const [playerData, setPlayerData] = useState<PlayerDto | null>(null);
  const playerApiClient = new PlayerApiClient();
  const { dialogDispatcher } = useDialog();

  useEffect(() => {
    playerApiClient
      .getPlayer(1)
      .then((data) => {
        setPlayerData(data);
      })
      .catch((error) => {
        console.error("Error fetching player data:", error);
      });
  }, []);

  if (!playerData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="sm:px-14 px-3 mt-10">
      <Button onClick={() => dialogDispatcher(DialogType.SCAN_QR_DIALOG)}>
        Scan
      </Button>

      <>
        <h1 className="font-bold text-2xl">{playerData.name}</h1>
        <h1 className="font-bold text-2xl">{playerData.surname}</h1>
        <h1 className="font-bold text-2xl">{playerData.rank}</h1>
        {playerData.character && (
          <h1 className="font-bold text-2xl">{playerData.character.name}</h1>
        )}
      </>
      <main className="flex flex-col mt-5"></main>
    </div>
  );
};

export default PlayerPanelWindow;
