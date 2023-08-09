import React, { useEffect, useRef } from 'react'
import * as THREE from "three";

const Connections = () => {
    const sceneRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight);
        renderer.setClearColor("white");
        camera.position.z = 40;

        // geometry details
        const geometry = new THREE.TorusKnotGeometry(10, 2.2, 300, 20, 6, 10);
        const material = new THREE.MeshBasicMaterial({color: "black"});
        const torusKnot = new THREE.Mesh( geometry, material);
        scene.add(torusKnot);
        sceneRef.current.appendChild(renderer.domElement);

        // animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            torusKnot.rotation.x += 0.01;
            torusKnot.rotation.y += 0.01;
            renderer.render( scene, camera);
        }
        animate();

        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( newWidth, newHeight);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            sceneRef.current.removeChild(renderer.domElement);
        }
    }, [])

  return (
    <div ref={sceneRef}></div>
  )
}

export default Connections
