'use client';

import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  ContactShadows, 
  PerspectiveCamera,
  Float,
  Sparkles
} from '@react-three/drei';
import { EffectComposer, Bloom, ToneMapping, Vignette } from '@react-three/postprocessing';
import { Play, Pause, RotateCcw, Maximize, Info } from 'lucide-react';
import { ToneMappingMode } from 'postprocessing';
import * as THREE from 'three';

interface Scene3DProps {
  children?: React.ReactNode;
  cameraPosition?: [number, number, number];
  height?: string;
  environment?: string;
  lighting?: string;
  className?: string;
}

// 使用动态导入避免SSR问题
const Scene3DContent: React.FC<Scene3DProps> = ({
  children,
  cameraPosition = [4, 2, 6],
  height = '600px',
  environment = 'city',
  lighting = 'studio',
  className = ''
}) => {
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const controlsRef = useRef<any>();
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && canvasRef.current) {
      canvasRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  if (!isClient) {
    return (
      <div 
        className={`relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-200 ${className}`}
        style={{ height }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">正在加载3D场景...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={canvasRef}
      className={`relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg overflow-hidden ${className}`}
      style={{ height: isFullscreen ? '100vh' : height }}
    >
      <Canvas 
        shadows 
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          precision: "highp"
        }}
        camera={{
          position: cameraPosition,
          fov: 50,
          near: 0.1,
          far: 1000
        }}
      >
        <Suspense fallback={null}>
          {/* 相机控制 */}
          <PerspectiveCamera makeDefault position={cameraPosition} />
          
          {/* 轨道控制 */}
          <OrbitControls
            ref={controlsRef}
            autoRotate={isPlaying}
            autoRotateSpeed={0.5}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            dampingFactor={0.05}
            minDistance={2}
            maxDistance={20}
            maxPolarAngle={Math.PI / 1.8}
          />

          {/* 环境和照明 */}
          <Environment 
            preset={environment as any}
            background={false}
            blur={0.5}
          />
          
          {/* 多重照明设置 */}
          <ambientLight intensity={0.4} color="#ffffff" />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1.2}
            color="#ffffff"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <directionalLight 
            position={[-5, 5, -5]} 
            intensity={0.3}
            color="#e8f4ff"
          />
          <pointLight 
            position={[0, 5, 0]} 
            intensity={0.4}
            color="#fff5e6"
            distance={20}
            decay={2}
          />

          {/* 地面接触阴影 */}
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.6}
            scale={20}
            blur={2}
            far={4}
            resolution={256}
            color="#000000"
          />

          {/* 粒子效果 */}
          <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sparkles 
              count={100}
              scale={[20, 20, 20]}
              size={2}
              speed={0.3}
              opacity={0.6}
              color="#60a5fa"
            />
          </Float>

          {/* 渲染子组件 */}
          {children}

          {/* 后处理效果 */}
          <EffectComposer>
            <Bloom 
              intensity={0.8}
              luminanceThreshold={0.9}
              luminanceSmoothing={0.5}
              height={300}
            />
            <ToneMapping 
              mode={ToneMappingMode.ACES_FILMIC}
            />
            <Vignette 
              eskil={false}
              offset={0.1}
              darkness={0.5}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>

      {/* 控制面板 */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <div className="flex gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md hover:bg-white transition-all"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            <span className="text-sm">{isPlaying ? '暂停' : '播放'}</span>
          </button>

          <button
            onClick={resetCamera}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md hover:bg-white transition-all"
          >
            <RotateCcw size={16} />
            <span className="text-sm">重置</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md hover:bg-white transition-all"
          >
            <Maximize size={16} />
            <span className="text-sm">全屏</span>
          </button>

          <button
            onClick={() => setShowInfo(!showInfo)}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md hover:bg-white transition-all"
          >
            <Info size={16} />
            <span className="text-sm">信息</span>
          </button>
        </div>

        {/* 操作说明 */}
        {showInfo && (
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
            <h3 className="font-semibold mb-2 text-sm">🎮 操作指南</h3>
            <div className="text-xs text-gray-600 space-y-1">
              <p>• 拖拽旋转：鼠标左键拖拽</p>
              <p>• 缩放视图：鼠标滚轮</p>
              <p>• 移动视角：Shift + 鼠标拖拽</p>
              <p>• 自动旋转：点击播放/暂停</p>
            </div>
            <div className="mt-3 pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500">🚀 GPU加速渲染 | ⚡ 60fps流畅体验</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Scene3D: React.FC<Scene3DProps> = (props) => {
  return <Scene3DContent {...props} />;
}; 