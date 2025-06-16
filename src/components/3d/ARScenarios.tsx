'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere, Cylinder, Cone, Torus, Float, Html } from '@react-three/drei';
import { Materials, createMaterial } from './materials';
import * as THREE from 'three';

interface ARScenarioProps {
  scenario: 'industrial' | 'education' | 'retail' | 'medical' | 'tourism' | 'virtual-venue';
  isActive?: boolean;
  onClick?: () => void;
}

// 创建材质的快捷方式
const materials = {
  metal: {
    steel: createMaterial(Materials.metals.steel),
    aluminum: createMaterial(Materials.metals.aluminum),
    copper: createMaterial(Materials.metals.copper),
    gold: createMaterial(Materials.metals.gold),
    chrome: createMaterial(Materials.metals.chrome),
  },
  plastic: {
    glossy: createMaterial(Materials.plastics.glossy),
    matte: createMaterial(Materials.plastics.matte),
    rubber: createMaterial(Materials.plastics.rubber),
  },
  glass: {
    clear: createMaterial(Materials.glass.clear),
    frosted: createMaterial(Materials.glass.frosted),
    tinted: createMaterial(Materials.glass.tinted),
  },
  emissive: {
    neon: createMaterial(Materials.emissive.neon),
    led: createMaterial(Materials.emissive.led),
    hologram: createMaterial(Materials.emissive.hologram),
  },
  fabric: {
    silk: createMaterial(Materials.fabrics.silk),
    cotton: createMaterial(Materials.fabrics.cotton),
    leather: createMaterial(Materials.fabrics.leather),
  },
  stone: {
    marble: createMaterial(Materials.stones.marble),
    granite: createMaterial(Materials.stones.granite),
    concrete: createMaterial(Materials.stones.concrete),
  },
  wood: {
    oak: createMaterial(Materials.woods.oak),
    pine: createMaterial(Materials.woods.pine),
    bamboo: createMaterial(Materials.woods.pine), // 使用pine作为bamboo的替代
  }
};

// 虚拟展馆场景
const VirtualVenueScene: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const mainScreenRef = useRef<THREE.Group>(null);
  const logoRef = useRef<THREE.Group>(null);
  const lightsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!isActive) return;
    
    // 主屏幕内容轮播
    if (mainScreenRef.current) {
      const time = state.clock.elapsedTime;
      mainScreenRef.current.rotation.y = Math.sin(time * 0.3) * 0.05;
    }
    
    // Logo旋转
    if (logoRef.current) {
      logoRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
    
    // 天花板灯光效果
    if (lightsRef.current) {
      const time = state.clock.elapsedTime;
      lightsRef.current.children.forEach((light, index) => {
        if (light instanceof THREE.PointLight) {
          light.intensity = 0.5 + Math.sin(time * 2 + index) * 0.2;
        }
      });
    }
  });

  return (
    <group>
      {/* 展馆地面 */}
      <Box position={[0, -1, 0]} args={[20, 0.2, 20]}>
        <meshStandardMaterial 
          color="#f8f9fa" 
          roughness={0.1} 
          metalness={0.1}
        />
      </Box>
      
      {/* 地面引导线条 */}
      <group>
        {/* 中央蓝色引导线 */}
        <Box position={[0, -0.89, 0]} args={[1, 0.02, 12]}>
          <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.2} />
        </Box>
        <Box position={[0, -0.89, -4]} args={[8, 0.02, 0.1]}>
          <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.2} />
        </Box>
        <Box position={[0, -0.89, 4]} args={[8, 0.02, 0.1]}>
          <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.2} />
        </Box>
      </group>

      {/* 弧形展台结构 */}
      <group>
        {/* 左侧弧形展台 */}
        <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.1}>
          <Cylinder position={[-6, 0.5, 0]} args={[3, 3, 1, 8]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
          </Cylinder>
          {/* 展台顶部蓝色装饰 */}
          <Box position={[-6, 1.2, 0]} args={[5, 0.1, 4]}>
            <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.3} />
          </Box>
        </Float>

        {/* 右侧弧形展台 */}
        <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.1}>
          <Cylinder position={[6, 0.5, 0]} args={[3, 3, 1, 8]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
          </Cylinder>
          <Box position={[6, 1.2, 0]} args={[5, 0.1, 4]}>
            <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.3} />
          </Box>
        </Float>
      </group>

      {/* 显示屏系统 */}
      <group>
        {/* 中央主显示屏 */}
        <group ref={mainScreenRef} position={[0, 2, -8]}>
          <Box args={[6, 3.5, 0.2]}>
            <meshStandardMaterial color="#000000" />
          </Box>
          <Box position={[0, 0, 0.11]} args={[5.8, 3.3, 0.02]}>
            <meshStandardMaterial 
              color="#1a1a1a" 
              emissive="#0066cc" 
              emissiveIntensity={0.5}
            />
          </Box>
          {/* 屏幕内容模拟 */}
          <Html
            position={[0, 0, 0.12]}
            transform
            occlude
            style={{
              width: '400px',
              height: '240px',
              background: 'linear-gradient(45deg, #007bff, #00d4ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              borderRadius: '8px',
            }}
          >
            武汉凡尘合创科技
          </Html>
        </group>

        {/* 左侧信息屏 */}
        <group position={[-8, 1.5, -3]} rotation={[0, 0.3, 0]}>
          <Box args={[3, 2, 0.15]}>
            <meshStandardMaterial color="#ffffff" />
          </Box>
          <Box position={[0, 0, 0.08]} args={[2.8, 1.8, 0.02]}>
            <meshStandardMaterial 
              color="#003d82" 
              emissive="#007bff" 
              emissiveIntensity={0.3}
            />
          </Box>
        </group>

        {/* 右侧信息屏 */}
        <group position={[8, 1.5, -3]} rotation={[0, -0.3, 0]}>
          <Box args={[3, 2, 0.15]}>
            <meshStandardMaterial color="#ffffff" />
          </Box>
          <Box position={[0, 0, 0.08]} args={[2.8, 1.8, 0.02]}>
            <meshStandardMaterial 
              color="#003d82" 
              emissive="#007bff" 
              emissiveIntensity={0.3}
            />
          </Box>
        </group>
      </group>

      {/* 中央人物模型 */}
      <group position={[0, 0, 2]}>
        {/* 人物身体 */}
        <Cylinder position={[0, 1, 0]} args={[0.3, 0.4, 1.6]}>
          <meshStandardMaterial color="#f0f0f0" />
        </Cylinder>
        {/* 人物头部 */}
        <Sphere position={[0, 2.2, 0]} args={[0.25]}>
          <meshStandardMaterial color="#fdbcb4" />
        </Sphere>
        {/* 手臂 */}
        <Cylinder position={[-0.5, 1.3, 0]} args={[0.08, 0.08, 0.8]} rotation={[0, 0, 0.3]}>
          <meshStandardMaterial color="#f0f0f0" />
        </Cylinder>
        <Cylinder position={[0.5, 1.3, 0]} args={[0.08, 0.08, 0.8]} rotation={[0, 0, -0.3]}>
          <meshStandardMaterial color="#f0f0f0" />
        </Cylinder>
      </group>

      {/* 圆形Logo标识 */}
      <group ref={logoRef} position={[7, 1.5, 2]}>
        {/* Logo底座 */}
        <Cylinder args={[1.2, 1.2, 0.2]}>
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.3} />
        </Cylinder>
        {/* Logo面板 */}
        <Cylinder position={[0, 0.11, 0]} args={[1.1, 1.1, 0.02]}>
          <meshStandardMaterial 
            color="#007bff" 
            emissive="#007bff" 
            emissiveIntensity={0.4}
          />
        </Cylinder>
        {/* Logo中心 */}
        <Sphere position={[0, 0.15, 0]} args={[0.3]}>
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff" 
            emissiveIntensity={0.2}
          />
        </Sphere>
      </group>

      {/* 天花板结构 */}
      <group position={[0, 8, 0]}>
        {/* 主要天花板 */}
        <Box args={[25, 0.5, 25]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#2a2a2a" roughness={0.3} />
        </Box>
        
        {/* 天花板装饰条 */}
        <group>
          <Box position={[0, -0.3, -8]} args={[15, 0.2, 1]}>
            <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.3} />
          </Box>
          <Box position={[0, -0.3, 8]} args={[15, 0.2, 1]}>
            <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.3} />
          </Box>
          <Box position={[-8, -0.3, 0]} args={[1, 0.2, 15]} rotation={[0, Math.PI/2, 0]}>
            <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.3} />
          </Box>
          <Box position={[8, -0.3, 0]} args={[1, 0.2, 15]} rotation={[0, Math.PI/2, 0]}>
            <meshStandardMaterial color="#007bff" emissive="#007bff" emissiveIntensity={0.3} />
          </Box>
        </group>

        {/* 天花板照明系统 */}
        <group ref={lightsRef}>
          {/* 中央照明 */}
          <pointLight position={[0, -2, 0]} intensity={1} color="#ffffff" distance={15} />
          <Sphere position={[0, -1, 0]} args={[0.3]}>
            <meshStandardMaterial 
              color="#ffffff" 
              emissive="#ffffff" 
              emissiveIntensity={0.8}
            />
          </Sphere>
          
          {/* 周围照明点 */}
          {[-4, 4].map((x) => 
            [-4, 4].map((z) => (
              <group key={`${x}-${z}`} position={[x, -1.5, z]}>
                <pointLight intensity={0.5} color="#e6f3ff" distance={8} />
                <Sphere args={[0.15]}>
                  <meshStandardMaterial 
                    color="#e6f3ff" 
                    emissive="#e6f3ff" 
                    emissiveIntensity={0.6}
                  />
                </Sphere>
              </group>
            ))
          )}
        </group>
      </group>

      {/* 环境照明 */}
      <ambientLight intensity={0.3} color="#f0f8ff" />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.8} 
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* 信息面板 */}
      {isActive && (
        <Html
          position={[0, 3, 6]}
          style={{
            background: 'rgba(0, 123, 255, 0.9)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 25px rgba(0, 123, 255, 0.3)',
          }}
        >
          🏛️ 现代化虚拟展馆<br />
          沉浸式展示体验空间
        </Html>
      )}
    </group>
  );
};

// 工业制造场景
const IndustrialScene: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const robotArmRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (robotArmRef.current && isActive) {
      robotArmRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <group>
      {/* 工厂地面 */}
      <Box position={[0, -1.5, 0]} args={[10, 0.3, 10]}>
        <meshStandardMaterial {...materials.metal.steel} />
      </Box>

      {/* 机械臂 */}
      <group ref={robotArmRef} position={[2, 0, 0]}>
        <Cylinder position={[0, 0, 0]} args={[0.5, 0.5, 2]}>
          <meshStandardMaterial {...materials.metal.aluminum} />
        </Cylinder>
        <Box position={[0, 1.5, 0]} args={[0.3, 1, 0.3]}>
          <meshStandardMaterial {...materials.metal.steel} />
        </Box>
      </group>

      {/* AR显示器 */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <Box position={[-2, 1, 0]} args={[1.5, 1, 0.1]}>
          <meshStandardMaterial {...materials.emissive.hologram} />
        </Box>
      </Float>

      {/* 信息面板 */}
      {isActive && (
        <Html
          position={[0, 2, 3]}
          style={{
            background: 'rgba(229, 62, 62, 0.9)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          🏭 智能制造<br />
          AR装配指导系统
        </Html>
      )}
    </group>
  );
};

// 教育场景
const EducationScene: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const heartRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (heartRef.current && isActive) {
      const beat = Math.sin(state.clock.elapsedTime * 4) * 0.1 + 1;
      heartRef.current.scale.setScalar(beat);
    }
  });

  return (
    <group>
      {/* 实验室台面 */}
      <Box position={[0, -0.5, 0]} args={[8, 0.2, 6]}>
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
      </Box>

      {/* 3D心脏模型 */}
      <group ref={heartRef} position={[0, 1, 0]}>
        <Sphere args={[0.8]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ff4444" emissive="#ff2222" emissiveIntensity={0.3} />
        </Sphere>
        <Sphere args={[0.6]} position={[0.3, 0.3, 0]}>
          <meshStandardMaterial color="#ff6666" emissive="#ff4444" emissiveIntensity={0.2} />
        </Sphere>
      </group>

      {/* AR信息面板 */}
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
        <Box position={[2.5, 1.5, 0]} args={[1.2, 0.8, 0.05]}>
          <meshStandardMaterial {...materials.emissive.led} />
        </Box>
      </Float>

      {/* 信息面板 */}
      {isActive && (
        <Html
          position={[0, 2.5, 3]}
          style={{
            background: 'rgba(52, 168, 83, 0.9)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          🎓 教育培训<br />
          3D解剖学习系统
        </Html>
      )}
    </group>
  );
};

// 零售场景
const RetailScene: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const mannequinRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (mannequinRef.current && isActive) {
      mannequinRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group>
      {/* 镜面地板 */}
      <Box position={[0, -1, 0]} args={[8, 0.1, 8]}>
        <meshStandardMaterial color="#f8f9fa" roughness={0.05} metalness={0.8} />
      </Box>

      {/* 3D虚拟模特 */}
      <group ref={mannequinRef} position={[0, 0.5, 0]}>
        <Cylinder args={[0.3, 0.4, 1.8]}>
          <meshStandardMaterial color="#e6e6e6" />
        </Cylinder>
        <Sphere position={[0, 1.2, 0]} args={[0.25]}>
          <meshStandardMaterial color="#f0f0f0" />
        </Sphere>
      </group>

      {/* 产品展示台 */}
      <Float speed={0.6} rotationIntensity={0.3} floatIntensity={0.2}>
        <Cylinder position={[2, 0, 0]} args={[0.8, 0.8, 0.3]}>
          <meshStandardMaterial {...materials.glass.clear} />
        </Cylinder>
      </Float>

      {/* 信息面板 */}
      {isActive && (
        <Html
          position={[0, 2.5, 3]}
          style={{
            background: 'rgba(156, 39, 176, 0.9)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          🛍️ 零售体验<br />
          虚拟试穿系统
        </Html>
      )}
    </group>
  );
};

// 医疗场景
const MedicalScene: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const heartRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (heartRef.current && isActive) {
      const beat = Math.sin(state.clock.elapsedTime * 3) * 0.15 + 1;
      heartRef.current.scale.setScalar(beat);
    }
  });

  return (
    <group>
      {/* 手术台 */}
      <Box position={[0, -0.3, 0]} args={[3, 0.2, 6]}>
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.3} />
      </Box>

      {/* 跳动心脏 */}
      <group ref={heartRef} position={[0, 1, 0]}>
        <Sphere args={[0.6]}>
          <meshStandardMaterial color="#ff3366" emissive="#ff1144" emissiveIntensity={0.4} />
        </Sphere>
      </group>

      {/* 医疗设备 */}
      <Box position={[2, 1, 0]} args={[0.8, 1.5, 0.4]}>
        <meshStandardMaterial color="#f0f0f0" />
      </Box>

      {/* 信息面板 */}
      {isActive && (
        <Html
          position={[0, 2.5, 3]}
          style={{
            background: 'rgba(244, 67, 54, 0.9)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          ⚕️ 医疗健康<br />
          AR手术导航
        </Html>
      )}
    </group>
  );
};

// 文旅场景
const TourismScene: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const pagodaRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (pagodaRef.current && isActive) {
      pagodaRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      {/* 古典地面 */}
      <Box position={[0, -1, 0]} args={[10, 0.2, 10]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>

      {/* 古典塔楼 */}
      <group ref={pagodaRef} position={[0, 1, 0]}>
        <Cylinder args={[1.5, 1.5, 3]}>
          <meshStandardMaterial color="#D2691E" />
        </Cylinder>
        <Cone position={[0, 2, 0]} args={[1.8, 1]}>
          <meshStandardMaterial color="#8B0000" />
        </Cone>
      </group>

      {/* 传统灯笼 */}
      <Float speed={0.4} rotationIntensity={0.1} floatIntensity={0.3}>
        <Sphere position={[3, 2, 0]} args={[0.5]}>
          <meshStandardMaterial color="#ff6b6b" emissive="#ff4444" emissiveIntensity={0.3} />
        </Sphere>
      </Float>

      {/* 信息面板 */}
      {isActive && (
        <Html
          position={[0, 3, 3]}
          style={{
            background: 'rgba(255, 152, 0, 0.9)',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          🏛️ 文旅景区<br />
          AR智能导览
        </Html>
      )}
    </group>
  );
};

export function ARScenario({ scenario, isActive = false, onClick }: ARScenarioProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const renderScene = () => {
    switch (scenario) {
      case 'virtual-venue':
        return <VirtualVenueScene isActive={isActive} />;
      case 'industrial':
        return <IndustrialScene isActive={isActive} />;
      case 'education':
        return <EducationScene isActive={isActive} />;
      case 'retail':
        return <RetailScene isActive={isActive} />;
      case 'medical':
        return <MedicalScene isActive={isActive} />;
      case 'tourism':
        return <TourismScene isActive={isActive} />;
      default:
        return null;
    }
  };

  return (
    <group onClick={onClick}>
      {renderScene()}
    </group>
  );
} 