"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Coat } from '@/components/models/Coat'
import React from 'react'

type Props = {
    model: React.ReactNode
}

export const ModelCard = ({ model }: Props) => {
    return (
        <Canvas className="border border-white">
            <ambientLight intensity={1} />
            <OrbitControls />
            {model}
        </Canvas>
    )
}