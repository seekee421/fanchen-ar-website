'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Html } from '@react-three/drei';
import { EffectComposer, Bloom, SSAO, ToneMapping } from '@react-three/postprocessing';
import { Sparkles } from './effects/Sparkles';
import { ARScenario } from './ARScenarios';
import { ToneMappingMode } from 'postprocessing';
import * as THREE from 'three';

// 定义场景类型
type ScenarioType = 'virtual-venue' | 'industrial' | 'education' | 'retail' | 'medical' | 'tourism';

// 场景配置
const scenarios: Array<{
  id: ScenarioType;
  name: string;
  icon: string;
  color: string;
  description: string;
}> = [
  {
    id: 'virtual-venue',
    name: '虚拟展馆',
    icon: '🏛️',
    color: '#007bff',
    description: '现代化虚拟展示空间'
  },
  {
    id: 'industrial',
    name: '智能制造',
    icon: '🏭',
    color: '#e53e3e',
    description: 'AR装配指导系统'
  },
  {
    id: 'education',
    name: '教育培训',
    icon: '🎓',
    color: '#38a169',
    description: '3D解剖学习平台'
  },
  {
    id: 'retail',
    name: '零售体验',
    icon: '🛍️',
    color: '#9c27b0',
    description: '虚拟试穿系统'
  },
  {
    id: 'medical',
    name: '医疗健康',
    icon: '⚕️',
    color: '#f44336',
    description: 'AR手术导航'
  },
  {
    id: 'tourism',
    name: '文旅景区',
    icon: '🗾',
    color: '#ff9800',
    description: 'AR智能导览'
  }
];

interface PerformanceStats {
  fps: number;
  memory: number;
  triangles: number;
}

export function ARShowroom() {
  const [currentScenario, setCurrentScenario] = useState<ScenarioType>('virtual-venue');
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const [performanceStats, setPerformanceStats] = useState<PerformanceStats>({
    fps: 60,
    memory: 0,
    triangles: 0
  });
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  // 性能监控
  useEffect(() => {
    let frames = 0;
    let lastTime = performance.now();
    
    const updateStats = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setPerformanceStats(prev => ({
          ...prev,
          fps: Math.round((frames * 1000) / (currentTime - lastTime)),
          memory: (performance as any).memory?.usedJSHeapSize 
            ? Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024) 
            : 0
        }));
        
        frames = 0;
        lastTime = currentTime;
      }
      
      animationRef.current = requestAnimationFrame(updateStats);
    };
    
    if (isPlaying) {
      updateStats();
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  // 自动轮播
  useEffect(() => {
    if (autoRotate && isPlaying) {
      autoRotateRef.current = setInterval(() => {
        setCurrentScenario(prev => {
          const currentIndex = scenarios.findIndex(s => s.id === prev);
          const nextIndex = (currentIndex + 1) % scenarios.length;
          return scenarios[nextIndex].id;
        });
      }, 8000);
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [autoRotate, isPlaying]);

  // 全屏处理
  const toggleFullscreen = useCallback(() => {
    try {
      if (!document.fullscreenElement) {
        canvasRef.current?.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.warn('Fullscreen API not supported', error);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const currentScenarioConfig = scenarios.find(s => s.id === currentScenario);

  return (
    <div className="relative w-full h-[800px] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl">
      {/* 3D Canvas */}
      <Canvas
        ref={canvasRef}
        className="w-full h-full"
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        camera={{
          position: [0, 5, 12],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.2;
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        {/* 相机控制 */}
        <PerspectiveCamera makeDefault position={[0, 5, 12]} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={8}
          maxDistance={30}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          autoRotate={autoRotate}
          autoRotateSpeed={0.5}
        />

        {/* 环境光照 */}
        <Environment preset="sunset" />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

        {/* 当前场景 */}
        <ARScenario 
          scenario={currentScenario} 
          isActive={isPlaying}
        />

        {/* 粒子特效 */}
        <Sparkles
          count={100}
          speed={0.3}
          opacity={0.6}
          size={2}
          color={currentScenarioConfig?.color || '#ffffff'}
        />

        {/* 后处理效果 */}
        <EffectComposer>
          <Bloom 
            intensity={0.5} 
            luminanceThreshold={0.2} 
            luminanceSmoothing={0.9}
          />
          <SSAO 
            samples={16} 
            radius={0.1} 
            intensity={1}
          />
          <ToneMapping 
            mode={ToneMappingMode.ACES_FILMIC}
            resolution={256}
            whitePoint={4}
            middleGrey={0.6}
            minLuminance={0.01}
            averageLuminance={1}
            adaptationRate={1}
          />
        </EffectComposer>
      </Canvas>

      {/* 控制面板 */}
      {showControls && (
        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
          <div className="flex flex-col gap-3">
            {/* 播放控制 */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                title={isPlaying ? "暂停" : "播放"}
              >
                <span className="text-white text-lg">
                  {isPlaying ? '⏸️' : '▶️'}
                </span>
              </button>
              
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 rounded-lg transition-colors ${
                  autoRotate ? 'bg-blue-500/50' : 'bg-white/20 hover:bg-white/30'
                }`}
                title="自动轮播"
              >
                <span className="text-white text-lg">🔄</span>
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                title="全屏"
              >
                <span className="text-white text-lg">
                  {isFullscreen ? '📱' : '🖥️'}
                </span>
              </button>

              <button
                onClick={() => setShowInfo(!showInfo)}
                className={`p-2 rounded-lg transition-colors ${
                  showInfo ? 'bg-blue-500/50' : 'bg-white/20 hover:bg-white/30'
                }`}
                title="显示信息"
              >
                <span className="text-white text-lg">ℹ️</span>
              </button>
            </div>

            {/* 场景选择 */}
            <div className="grid grid-cols-3 gap-2">
              {scenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  onClick={() => setCurrentScenario(scenario.id)}
                  className={`p-2 rounded-lg text-xs font-medium transition-all ${
                    currentScenario === scenario.id
                      ? 'bg-white/30 text-white shadow-md'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                  style={{
                    borderLeft: currentScenario === scenario.id ? `3px solid ${scenario.color}` : 'none'
                  }}
                >
                  <div className="text-sm mb-1">{scenario.icon}</div>
                  <div className="text-[10px] leading-tight">{scenario.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 信息面板 */}
      {showInfo && currentScenarioConfig && (
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 max-w-xs">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{currentScenarioConfig.icon}</span>
              <h3 className="font-bold text-lg">{currentScenarioConfig.name}</h3>
            </div>
            <p className="text-sm text-white/80 mb-4">
              {currentScenarioConfig.description}
            </p>
            
            {/* 性能统计 */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>FPS:</span>
                <span className={performanceStats.fps >= 30 ? 'text-green-400' : 'text-red-400'}>
                  {performanceStats.fps}
                </span>
              </div>
              {performanceStats.memory > 0 && (
                <div className="flex justify-between">
                  <span>内存:</span>
                  <span>{performanceStats.memory}MB</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 底部状态栏 */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
          <div className="text-white text-sm font-medium">
            当前场景: {currentScenarioConfig?.name}
          </div>
        </div>

        <button
          onClick={() => setShowControls(!showControls)}
          className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20 hover:bg-white/20 transition-colors"
          title={showControls ? "隐藏控制" : "显示控制"}
        >
          <span className="text-white text-lg">
            {showControls ? '🎛️' : '⚙️'}
          </span>
        </button>
      </div>

      {/* 加载状态 */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="text-white text-center">
              <div className="text-4xl mb-4">⏸️</div>
              <div className="text-lg font-medium">场景已暂停</div>
              <div className="text-sm text-white/70 mt-2">点击播放按钮继续</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 