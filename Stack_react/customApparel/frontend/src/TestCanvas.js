import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  useGLTF,
  Environment,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
  useTexture,
} from "@react-three/drei";

const TestCanvas = () => {
  function Shirt(props) {
    const texture = useTexture("instagram.png");
    // console.log(texture);
    // const color = useSelector(state => state.cloth.clothColor);
    // const clothType = useSelector(state=> state.cloth.clothType);

    // const { nodes, materials } = useGLTF(`/${clothType}.glb`);
    const { nodes, materials } = useGLTF("./tshirt.glb");
    //   materials.FABRIC_1_FRONT_4193.color = new THREE.Color(color)
    return (
      <group {...props} dispose={null}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.FABRIC_1_FRONT_4193}
                  scale={0.3}
                /> */}
          {/* <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.FABRIC_1_FRONT_4193}
                  scale={0.3}
      
                /> */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.FABRIC_1_FRONT_4193}
            scale={0.005}
            dispose={null}
          >
            <Decal
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              opacity={0.7}
              map={texture}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.FABRIC_1_FRONT_4193}
            scale={0.005}
          />
        </group>
      </group>
    );
  }
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <Center>
        <Shirt />
      </Center>
    </Canvas>
  );
};

export default TestCanvas;
