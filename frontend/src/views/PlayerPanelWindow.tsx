import React, { useState, useEffect } from 'react';
import { PlayerApiClient } from '@/gateway/PlayerApiClient';
import { PlayerDto } from '@/class/dto/PlayerDTO';

const PlayerPanelWindow: React.FC = () => {
    const [playerData, setPlayerData] = useState<PlayerDto | null>(null);
    const playerApiClient = new PlayerApiClient();

    useEffect(() => {
        playerApiClient.getPlayer(2)
            .then(data => {
                setPlayerData(data);
            })
            .catch(error => {
                console.error('Error fetching player data:', error);
                // Handle error (e.g., set error state, show error message)
            });
    }, []); // Empty dependency array to run only on mount

    if (!playerData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="sm:px-14 px-3 mt-10">
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
