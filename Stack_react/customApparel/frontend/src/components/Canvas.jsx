import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  useGLTF,
  Environment,
  Decal,
  useTexture,
} from "@react-three/drei";
import { useRef } from "react";
import { easing } from "maath";
import * as THREE from "three";
import { useSelector } from "react-redux";

const CanvasApp = ({ position = [0, 10, 400], fov = 40, cloth2, product }) => {
  // console.log(cloth2)
  const cloth = useSelector((state) => state.cloth.clothType);
  // console.log(cloth);

  function DynamicComponent({ cloth }) {
    if (cloth === "tshirt") {
      return (
        <Center>
          <Shirt />;
        </Center>
      );
    } else if (cloth === "onepiece") {
      return (
        <Center>
          <OnePiece />;
        </Center>
      );
    } else if (cloth === "longsleeveshirt") {
      return (
        <Center>
          <LongSleeveShirt />;
        </Center>
      );
    } else {
      return (
        <Center>
          <TankTop />;
        </Center>
      );
    }
  }

  return (
    <Canvas
      shadows
      camera={{ position, fov }}
      eventSource={document.getElementById("root")}
      eventPrefix="client"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        {product ? (
          <DynamicComponent cloth={cloth2} />
        ) : (
          <DynamicComponent cloth={cloth} />
        )}
        {/* <Backdrop /> */}
      </CameraRig>
    </Canvas>
  );
};

function Shirt(props) {
  const texture = useTexture("instagram.png");
  // console.log(texture);
  const color = useSelector((state) => state.cloth.clothColor);
  // const clothType = useSelector(state=> state.cloth.clothType);

  // const { nodes, materials } = useGLTF(`/${clothType}.glb`);
  const { nodes, materials } = useGLTF("./tshirt.glb");
  materials.FABRIC_1_FRONT_4193.color = new THREE.Color(color);
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.FABRIC_1_FRONT_4193}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.FABRIC_1_FRONT_4193}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.FABRIC_1_FRONT_4193}
          scale={0.3}
        >
          <Decal map={texture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.FABRIC_1_FRONT_4193}
          scale={0.3}
        />
      </group>
    </group>
  );
}

function OnePiece(props) {
  const { nodes, materials } = useGLTF("/onepiece.glb");
  const colors = useSelector((state) => state.cloth.clothColor);

  const newMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(colors),
  });

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={newMaterial}
          scale={0.75}
        />
      </group>
    </group>
  );
}

function LongSleeveShirt(props) {
  const { nodes } = useGLTF("longsleeveshirt.glb");
  const colors = useSelector((state) => state.cloth.clothColor);

  const newMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(colors),
  });

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["men-shirt_Cotton_50s_Poplin_FRONT_39668_0"].geometry}
          material={newMaterial}
          scale={2.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["men-shirt_Cotton_50s_Poplin_FRONT_39668_0_1"].geometry
          }
          material={newMaterial}
          scale={2.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["men-shirt_Cotton_50s_Poplin_FRONT_39668_0_2"].geometry
          }
          material={newMaterial}
          scale={2.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes["men-shirt_Cotton_50s_Poplin_FRONT_39668_0_3"].geometry
          }
          material={newMaterial}
          scale={2.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["men-shirt_Material665021_0"].geometry}
          material={newMaterial}
          scale={2.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["men-shirt_Material647667_0"].geometry}
          material={newMaterial}
          scale={2.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["men-shirt_Material643570_0"].geometry}
          material={newMaterial}
          scale={2.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["men-shirt_Material655120_0"].geometry}
          material={newMaterial}
          scale={2.3}
        />
      </group>
    </group>
  );
}

function TankTop(props) {
  const { nodes } = useGLTF("/hoodie2.glb");
  const colors = useSelector((state) => state.cloth.clothColor);

  const newMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(colors),
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={newMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.8}
      />
    </group>
  );
}

function CameraRig({ children }) {
  const group = useRef();
  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [-state.pointer.y / 11, state.pointer.x / 11, 0, 0],
      0.4,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}

export const Shirt2 = (props) => {
  const color = useSelector((state) => state.cloth.clothColor);
  // const clothType = useSelector(state=> state.cloth.clothType);

  // const { nodes, materials } = useGLTF(`/${clothType}.glb`);
  const { nodes, materials } = useGLTF("./tshirt.glb");
  materials.FABRIC_1_FRONT_4193.color = new THREE.Color(color);
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.FABRIC_1_FRONT_4193}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.FABRIC_1_FRONT_4193}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.FABRIC_1_FRONT_4193}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.FABRIC_1_FRONT_4193}
          scale={0.3}
        />
      </group>
    </group>
  );
};

export default CanvasApp;
