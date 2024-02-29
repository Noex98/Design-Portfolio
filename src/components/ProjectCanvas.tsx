"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Mesh } from "three";

type Props = {
    assetUrl: string;
};

export const ProjectCanvas = ({ assetUrl }: Props) => {
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, "/models/coat.glb");

    return (
        <Canvas>
            <directionalLight
                position={[3.3, 1.0, 4.4]}
                castShadow
                intensity={Math.PI * 2}
            />
            <ambientLight intensity={0.2} />
            <OrbitControls />
            <Suspense fallback={null}>
                <mesh ref={mesh} castShadow receiveShadow>
                    <primitive object={gltf.scene} />
                </mesh>
            </Suspense>
        </Canvas>
    );
};
