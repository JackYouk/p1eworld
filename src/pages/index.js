import { GameContext } from "@/context/gameContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LoadingBar = ({ percent }) => {
  return (
    <div className="w-5/6 max-w-96 bg-gray-300/40 h-4 rounded-lg overflow-hidden">
      <div
        className="h-full bg-gray-100 transition-all duration-500"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default function Home() {
  const { loadingState } = GameContext();
  const router = useRouter();
  return (
    <div className="h-screen w-full bg-[#071330] flex flex-col justify-center items-center">
      <img src='./logo.png' className={`${loadingState === 100.0 ? 'w-1/2 max-w-64' : 'w-5/6 max-w-96'} py-8 transition-all duration-1000`} />
      {loadingState < 100.0 ? <LoadingBar percent={loadingState} /> : <></>}
      {loadingState === 100.0 ? (
        <>
          <a 
            onClick={() => router.push('/lobby-select')}
            className="mb-4 text-white text-center bold text-xl p-3 w-72 bg-white/30 rounded border border-white hover:bg-white/80 cursor-pointer"
          >
            Multiplayer
          </a>
          <a 
            onClick={() => router.push('/wrld')}
            className="text-white text-center bold text-xl p-3 w-72 bg-white/30 border rounded border-white hover:bg-white/80 cursor-pointer"
          >
            Developer Mode
          </a>
        </>
      ) : <></>}
    </div>
  );
}
