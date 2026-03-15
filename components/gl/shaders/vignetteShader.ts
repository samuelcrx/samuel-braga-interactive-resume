export const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null }, // provided by ShaderPass
    darkness: { value: 1.0 }, // strength of the vignette effect
    offset: { value: 1.0 }, // vignette offset
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float darkness;
    uniform float offset;
    varying vec2 vUv;
    
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      
      // Calculate distance from center
      vec2 uv = (vUv - 0.5) * 2.0;
      float dist = dot(uv, uv);
      
      // Create vignette effect with deep navy fade
      float vignette = 1.0 - smoothstep(offset, offset + darkness, dist);
      
      // Deep navy background color
      vec3 navyColor = vec3(0.039, 0.055, 0.102); // #0a0e1a
      vec3 finalColor = mix(navyColor, texel.rgb, vignette);
      
      gl_FragColor = vec4(finalColor, texel.a);
    }
  `
};
