import { Canvas } from 'react-three-fiber';
import { Sky } from 'drei';
import { Vector3 } from 'three';
import { Physics } from 'use-cannon';
import { Camera } from './Camera';

function App() {
  return (
    <Canvas>
      <Camera fov={50} />
      <Sky sunPosition={new Vector3(100,10,100)} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100,100,100]} />
      <Physics>
        <Ground />
        <Player />
      </Physics>
    </Canvas>
  );
}

export default App;
