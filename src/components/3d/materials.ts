import * as THREE from 'three';

// 高品质PBR材质预设
export const Materials = {
  // 金属材质
  metals: {
    steel: {
      color: '#8B949E',
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 1.5,
    },
    aluminum: {
      color: '#F8F9FA',
      metalness: 0.95,
      roughness: 0.05,
      envMapIntensity: 2.0,
    },
    copper: {
      color: '#B87333',
      metalness: 0.8,
      roughness: 0.2,
      envMapIntensity: 1.2,
    },
    gold: {
      color: '#FFD700',
      metalness: 0.9,
      roughness: 0.1,
      envMapIntensity: 1.8,
    },
    chrome: {
      color: '#E8E8E8',
      metalness: 1.0,
      roughness: 0.0,
      envMapIntensity: 2.5,
    }
  },

  // 塑料材质
  plastics: {
    glossy: {
      color: '#FFFFFF',
      metalness: 0.0,
      roughness: 0.1,
      envMapIntensity: 0.5,
    },
    matte: {
      color: '#F5F5F5',
      metalness: 0.0,
      roughness: 0.8,
      envMapIntensity: 0.2,
    },
    rubber: {
      color: '#2D3748',
      metalness: 0.0,
      roughness: 0.9,
      envMapIntensity: 0.1,
    }
  },

  // 玻璃材质
  glass: {
    clear: {
      color: '#FFFFFF',
      metalness: 0.0,
      roughness: 0.0,
      transmission: 1.0,
      transparent: true,
      opacity: 0.9,
      ior: 1.5,
    },
    frosted: {
      color: '#F7FAFC',
      metalness: 0.0,
      roughness: 0.4,
      transmission: 0.8,
      transparent: true,
      opacity: 0.7,
      ior: 1.5,
    },
    tinted: {
      color: '#4299E1',
      metalness: 0.0,
      roughness: 0.1,
      transmission: 0.9,
      transparent: true,
      opacity: 0.8,
      ior: 1.5,
    }
  },

  // 发光材质
  emissive: {
    neon: {
      color: '#00FFFF',
      emissive: '#00FFFF',
      emissiveIntensity: 0.5,
      metalness: 0.0,
      roughness: 0.2,
    },
    led: {
      color: '#4299E1',
      emissive: '#4299E1',
      emissiveIntensity: 0.8,
      metalness: 0.0,
      roughness: 0.0,
    },
    hologram: {
      color: '#48BB78',
      emissive: '#48BB78',
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.7,
      metalness: 0.0,
      roughness: 0.1,
    }
  },

  // 织物材质
  fabrics: {
    silk: {
      color: '#FDF2F8',
      metalness: 0.0,
      roughness: 0.6,
      envMapIntensity: 0.3,
    },
    cotton: {
      color: '#F7FAFC',
      metalness: 0.0,
      roughness: 0.8,
      envMapIntensity: 0.1,
    },
    leather: {
      color: '#8B4513',
      metalness: 0.0,
      roughness: 0.7,
      envMapIntensity: 0.4,
    }
  },

  // 石材材质
  stones: {
    marble: {
      color: '#F8F9FA',
      metalness: 0.0,
      roughness: 0.2,
      envMapIntensity: 0.8,
    },
    granite: {
      color: '#4A5568',
      metalness: 0.0,
      roughness: 0.6,
      envMapIntensity: 0.3,
    },
    concrete: {
      color: '#718096',
      metalness: 0.0,
      roughness: 0.9,
      envMapIntensity: 0.1,
    }
  },

  // 木材材质
  woods: {
    oak: {
      color: '#CD853F',
      metalness: 0.0,
      roughness: 0.8,
      envMapIntensity: 0.2,
    },
    pine: {
      color: '#DEB887',
      metalness: 0.0,
      roughness: 0.7,
      envMapIntensity: 0.3,
    },
    mahogany: {
      color: '#8B4513',
      metalness: 0.0,
      roughness: 0.6,
      envMapIntensity: 0.4,
    }
  }
};

// 创建材质的辅助函数
export const createMaterial = (materialConfig: any) => {
  return new THREE.MeshStandardMaterial({
    ...materialConfig,
    side: THREE.FrontSide,
  });
};

// 特殊效果材质
export const createHologramMaterial = (color: string = '#00FFFF', intensity: number = 0.5) => {
  return new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color: { value: new THREE.Color(color) },
      intensity: { value: intensity }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color;
      uniform float intensity;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        float lines = sin(vPosition.y * 20.0 + time * 2.0) * 0.5 + 0.5;
        float noise = sin(vPosition.x * 10.0 + time) * sin(vPosition.z * 10.0 + time) * 0.1 + 0.9;
        float alpha = lines * noise * intensity;
        
        gl_FragColor = vec4(color * alpha, alpha * 0.7);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
};

// 粒子效果材质
export const createParticleMaterial = (color: string = '#FFFFFF', size: number = 1.0) => {
  return new THREE.PointsMaterial({
    color: new THREE.Color(color),
    size: size,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    vertexColors: false,
    sizeAttenuation: true,
  });
};

// 环境反射材质
export const createReflectiveMaterial = (color: string, roughness: number = 0.1, metalness: number = 0.8) => {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    roughness,
    metalness,
    envMapIntensity: 2.0,
    side: THREE.FrontSide,
  });
};

// 发光边缘材质
export const createGlowMaterial = (color: string = '#00FFFF', intensity: number = 1.0) => {
  return new THREE.ShaderMaterial({
    uniforms: {
      c: { value: 1.0 },
      p: { value: 1.4 },
      glowColor: { value: new THREE.Color(color) },
      viewVector: { value: new THREE.Vector3() }
    },
    vertexShader: `
      uniform vec3 viewVector;
      uniform float c;
      uniform float p;
      varying float intensity;
      
      void main() {
        vec3 vNormal = normalize(normalMatrix * normal);
        vec3 vNormel = normalize(normalMatrix * viewVector);
        intensity = pow(c - dot(vNormal, vNormel), p);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      varying float intensity;
      
      void main() {
        vec3 glow = glowColor * intensity;
        gl_FragColor = vec4(glow, 1.0);
      }
    `,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });
}; 