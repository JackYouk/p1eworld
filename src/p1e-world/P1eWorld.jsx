// React
import { Suspense } from 'react'

// R3F/Three
import { Canvas } from '@react-three/fiber'
import { Physics, Debug } from '@react-three/rapier'
import { Loader } from '@react-three/drei'

// Open World
import World from './World.jsx'

// Game Components
import Interface from '../game-components/Interface'
import Player from '../game-components/Player.jsx'
import Lights from '../game-components/Lights.jsx'
import Home from '@/pages/index.js'


export default function P1EWorld() {

    return (
        <div className='bg-[#071330] h-screen'>
            <Canvas
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [2.5, 10, 6]
                }}
            >
                <Suspense fallback={<></>}>
                    <color args={['#252731']} attach="background" />
                    <Physics gravity={[0, -20, 0]}>
                        <Lights />
                        <World />
                        <Player />
                    </Physics>
                </Suspense>
            </Canvas>
            {/* <Loader /> */}
            <Interface />
        </div>
    )
}