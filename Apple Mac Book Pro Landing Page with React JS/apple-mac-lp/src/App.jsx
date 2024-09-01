import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'
import { div } from 'three/webgpu'

function App()
{
  return (
    <div className='w-full h-screen bg-black-800'>
      <div className="absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
        <h1 className='text-7xl tracking-tighter font-[600]'>Macbook Pro.</h1>
        <h5 className='text-1xl'>Oh so pro!</h5>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
      <OrbitControls/>
      <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]} />
      <ScrollControls pages={3}>
        <MacContainer/>
      </ScrollControls>
    </Canvas>
    </div>
    
  )
}

export default App