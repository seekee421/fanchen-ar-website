'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SparklesProps {
  count?: number;
  speed?: number;
  opacity?: number;
  size?: number;
  color?: string;
}

export function Sparkles({ 
  count = 100, 
  speed = 0.3, 
  opacity = 0.6, 
  size = 2,
  color = '#ffffff' 
}: SparklesProps) {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, [count]);

  const particlesOpacity = useMemo(() => {
    const opacities = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      opacities[i] = Math.random() * opacity;
    }
    
    return opacities;
  }, [count, opacity]);

  useFrame(({ clock }) => {
    if (points.current) {
      const time = clock.getElapsedTime();
      
      // 旋转粒子系统
      points.current.rotation.y = time * speed * 0.1;
      
      // 让粒子闪烁
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      const opacities = (points.current.material as THREE.PointsMaterial).opacity;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time * speed + i) * 0.01;
      }
      
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
          args={[particlesPosition, 3]}
        />
        <bufferAttribute
          attach="attributes-opacity"
          count={count}
          array={particlesOpacity}
          itemSize={1}
          args={[particlesOpacity, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation={true}
        alphaTest={0.1}
        vertexColors={false}
      />
    </points>
  );
} 