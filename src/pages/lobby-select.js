import { useRouter } from "next/router";
import { useState } from "react";


export default function LobbySelect() {
    const router = useRouter();
    const [selectedLobby, setSelectedLobby] = useState(0);
    const lobbies = [
        {
            id: 0,
            activePlayers: 12,
        },
        {
            id: 1,
            activePlayers: 12,
        },
        {
            id: 2,
            activePlayers: 12,
        },
        {
            id: 3,
            activePlayers: 12,
        },
        {
            id: 4,
            activePlayers: 12,
        },
        {
            id: 5,
            activePlayers: 12,
        },
        {
            id: 6,
            activePlayers: 12,
        },
        {
            id: 7,
            activePlayers: 12,
        },
        {
            id: 8,
            activePlayers: 12,
        },
        {
            id: 9,
            activePlayers: 12,
        },
        {
            id: 10,
            activePlayers: 12,
        },
        {
            id: 11,
            activePlayers: 12,
        },
    ];
    
    return (
        <>
        <div className="h-screen w-full bg-[#071330] flex flex-col justify-around items-center">
        <h2 className="text-white text-[30px] bold">Multiplayer</h2>
            <div className="grid grid-rows-3 grid-cols-2 gap-4">
                {lobbies.map(lobby => (
                    <a
                        onClick={() => setSelectedLobby(lobby.id)}
                        className={`${selectedLobby === lobby.id ? 'bg-white/80' : ''} text-white text-center bold text-xl p-3 w-48 bg-white/30 rounded border border-white cursor-pointer`}
                    >
                        Lobby {lobby.id}
                        <br/>
                        <span className="text-xs">Active Players: {lobby.activePlayers}/10</span>
                    </a>
                ))}
            </div>

            <div className="text-white text-center bold text-xl">
                <span className="p-4">Selected: Lobby {selectedLobby}</span>
                <a
                    onClick={() => router.push('/wrld')}
                    className="text-white text-center bold text-xl p-3 w-24 bg-white/30 rounded border border-white hover:bg-white/80 cursor-pointer"
                >
                    Go
                </a>
            </div>

        </div>
        </>
    );
}