import '@/styles/globals.css'
import { PlayerProvider } from '@/context/playerContext'
import { ControlsProvider } from '@/context/controlsContext'

export default function App({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <ControlsProvider>
        <Component {...pageProps} />
      </ControlsProvider >
    </PlayerProvider >
  )
}
