import '@/styles/globals.css'
import { PlayerProvider } from '@/context/playerContext'
import { ControlsProvider } from '@/context/controlsContext'
import { GameProvider } from '@/context/gameContext'

export default function App({ Component, pageProps }) {
  return (
    <GameProvider>
      <PlayerProvider>
        <ControlsProvider>
          <Component {...pageProps} />
        </ControlsProvider >
      </PlayerProvider >
    </GameProvider>
  );
}
