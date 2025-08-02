import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Purple_model = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const objectRef = useRef(null);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(
      75,
      1, 
      0.1,
      1000
    );
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(400, 400); 
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.overflow = 'hidden';
    renderer.setClearColor(0x000000, 0); 
    rendererRef.current = renderer;
    
    mountRef.current.appendChild(renderer.domElement);
    console.log('Renderer and canvas created successfully');

    const objToRender = 'purple_planet';

    const testGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const testMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const testCube = new THREE.Mesh(testGeometry, testMaterial);
    testCube.position.set(2, 0, 0); 
    scene.add(testCube);
    const loader = new GLTFLoader();
    loader.load(
      `/models/${objToRender}/scene.gltf`,
      function (gltf) {
        console.log('Model loaded successfully!', gltf);
        const object = gltf.scene;
        objectRef.current = object;
        object.scale.set(1.5, 1.5, 1.5);
        object.position.set(0, 0, 0);
        scene.add(object);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.error('Error loading model:', error);
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshLambertMaterial({ 
          color: 0x8B4CF7,
          emissive: 0x440066,
          emissiveIntensity: 0.2
        });
        const fallbackSphere = new THREE.Mesh(geometry, material);
        objectRef.current = fallbackSphere;
        scene.add(fallbackSphere);
        console.log('Fallback purple sphere created');
      }
    );

    camera.position.z = 3;
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.6); 
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x8B4CF7, 0.5, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleResize = () => {
     
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    const animate = () => {
      requestAnimationFrame(animate);
      if (scene.children.length > 0) {
        const testCube = scene.children.find(child => child.geometry && child.geometry.type === 'BoxGeometry');
        if (testCube) {
          testCube.rotation.x += 0.01;
          testCube.rotation.y += 0.01;
        }
      }
      if (objectRef.current) {
        objectRef.current.rotation.y = -3 + (mouseRef.current.x / window.innerWidth) * 3;
        objectRef.current.rotation.x = -1.2 + (mouseRef.current.y * 2.5 / window.innerHeight);
      }

      renderer.render(scene, camera);
    };

    animate();
    console.log('Animation loop started');

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (controls) {
        controls.dispose();
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center py-20">
      <div ref={mountRef} id="container3D" className="rounded-lg" style={{width: '400px',   height: '400px',   background: 'radial-gradient(circle at center, #1a1a2e 0%, #16213e 30%, #0f0f23 70%, #000000 100%)',   position: 'relative',   boxShadow: '0 0 30px rgba(138, 43, 226, 0.3), inset 0 0 50px rgba(0, 0, 0, 0.5)', overflow: 'hidden' }}/>
    </div>
  );
};

export default Purple_model;
