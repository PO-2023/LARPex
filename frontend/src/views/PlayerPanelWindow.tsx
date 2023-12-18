import React, {useEffect, useState} from "react";
import {PlayerApiClient} from "@/gateway/PlayerApiClient";
import {PlayerDto} from "@/class/dto/PlayerDto";
import {Button} from "@/components/ui/button";
import {DialogType, useDialog} from "@/dispatcher/dialogDispatcher";
import {Link} from "react-router-dom";
import {EquipmentDispatcher} from "@/dispatcher/EquipmentDispatcher.tsx";
import {EquipmentManager} from "@/components/equipment/EquipmentManager.tsx";
import {PlayerWithActiveEventDto} from "@/class/dto/PlayerWithActiveEventDto.ts";
import {EventApiClient} from "@/gateway/EventApiClient.ts";

const PlayerPanelWindow: React.FC = () => {
    const [activePlayData, setActivePlayData] = useState<PlayerWithActiveEventDto | null>(null);
    const [playerData, setPlayerData] = useState<PlayerDto | null>(null);
    const playerApiClient = new PlayerApiClient();
    const eventClient = new EventApiClient();
    const {dialogDispatcher} = useDialog();

    const equipmentManager = new EquipmentManager(new EquipmentDispatcher());

    useEffect(() => {
        eventClient.getActiveEvent(2)
            .then(data => {
                setActivePlayData(data)
            })
            .catch(error => {
                console.error('Error fetching player data:', error);
            });
    }, []);

    if (!activePlayData) {
        return <p>Loading...</p>;
    }

    return (
        <div id="player-panel" className="sm:px-14 px-3 mt-10">
            {activePlayData.character && (
                <h1 style={{textAlign: "center", marginBottom: "10px"}}
                    className="font-bold text-2xl">Postać: {activePlayData.character.name}</h1>

            )}

            {activePlayData.character && (
                <h1 style={{textAlign: "center", marginBottom: "10px"}}
                    className="font-bold text-2xl">Gra: {activePlayData?.activeEvent?.name}</h1>

            )}
            <div style={{
                display: "flex",
                padding: "0 60px",
                flexDirection: "column",
                justifyContent: "center",
                flexWrap: "wrap",
                rowGap: "10px"
            }}>
                <Button onClick={() => dialogDispatcher(DialogType.SCAN_QR_DIALOG)}>
                    Scan
                </Button>
                <Button onClick={() => equipmentManager.displayEquipment(activePlayData?.id)}
                >
                    Wyświetl ekwipunek
                </Button>
                <Button
                >
                    Wyświetl mapę lokacji
                </Button>
                <Button
                >
                    Sprawdź aktualny stan gry
                </Button>
            </div>
            <>
                {/*<h1 className="font-bold text-2xl">{playerData.name}</h1>*/}
                {/*<h1 className="font-bold text-2xl">{playerData.surname}</h1>*/}
                {/*<h1 className="font-bold text-2xl">{playerData.rank}</h1>*/}

            </>
            <main className="flex flex-col mt-5"></main>
        </div>
    );
};

export default PlayerPanelWindow;
