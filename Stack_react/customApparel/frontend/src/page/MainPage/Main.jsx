import React from "react";
import { MainWrap } from "../MainPage/Main.styled";
import Nav from "../NavPage/Nav";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { easing } from "maath";

import {
  useGLTF,
  Environment,
  Center,
  AccumulativeShadows,
  RandomizedLight,
  useTexture,
  Decal,
} from "@react-three/drei";

const Main = ({ position = [0, 0, 1000], fov = 25 }) => {
  function Shirt(props) {
    const texture = useTexture("ikedesign2.png");

    const { nodes, materials } = useGLTF("/ttshirt.glb");

    materials.lambert1.color.set("black");

    return (
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        {...props}
        dispose={null}
      >
        {/* <Decal
          position={[0, -0.12, 0.15]}
          rotation={[0, 0, 0]}
          scale={0.15}
          opacity={0.7}
          // map-anisotropy={16}
        /> */}
        <Decal
          position={[0, 0.04, 0.11]}
          rotation={[0, 0, 0]}
          scale={0.25}
          opacity={0.7}
          map={texture}
          // map-anisotropy={16}
        />
      </mesh>
    );
  }

  function CameraRig({ children }) {
    const group = useRef();

    useFrame((state, delta) => {
      easing.damp3(state.camera.position, [0, 0, 2], 0.5, delta);
      easing.dampE(
        group.current.rotation,
        [-state.pointer.y / 5, state.pointer.x / 2, 0],
        0.5,
        delta
      );
    });
    return <group ref={group}>{children}</group>;
  }

  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const text = "옷에 담는 당신의 이야기 커스텀 디자인, 이 모든 것은 NIKE에서";
    setLetters(Array.from(text));
  }, []);

  const handleMouseOver = (letter, index) => {
    const spanElement = document.querySelectorAll(".text span")[index];
    if (["I", "K", "E"].includes(letter)) {
      // 'i', 'k', 'e'에만 "skip" 클래스 추가
      spanElement.classList.add("skip");
    } else {
      // 나머지에는 "active" 클래스 추가
      spanElement.classList.add("active");
    }
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <Nav />
      <MainWrap>
        <div className="mainText">
          <p className="text">
            {letters.map((letter, index) =>
              [13, 22, 30].includes(index) ? (
                <>
                  <span
                    key={index}
                    onMouseOver={() => handleMouseOver(letter, index)}
                  >
                    {letter}
                  </span>
                  <br />
                </>
              ) : (
                <span
                  key={index}
                  onMouseOver={() => handleMouseOver(letter, index)}
                >
                  {letter}
                </span>
              )
            )}
          </p>
        </div>
        <div className="mainContainer">
          <Canvas shadows camera={{ position, fov }}>
            <ambientLight intensity={0.5} />
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
            <CameraRig>
              <Center>
                <Shirt />
              </Center>
            </CameraRig>
          </Canvas>
        </div>
      </MainWrap>
    </div>
  );
};

export default Main;
