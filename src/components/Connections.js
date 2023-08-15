import React, { useEffect, useRef } from 'react'
import * as THREE from "three";
import { styled } from 'styled-components';

const Connections = () => {
    const sceneRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight);
        renderer.setClearColor("red");
        camera.position.z = 40;
        // uv texture map
        const textureLoader = new THREE.TextureLoader();
        const uvTexture = textureLoader.load("/assets/images/headshot.jpg")
        // geometry details
        const geometry = new THREE.TorusKnotGeometry(10, 4, 300, 20, 2, 3);
        const material = new THREE.MeshBasicMaterial({
            map: uvTexture,
        })
        // const material = new THREE.MeshBasicMaterial({color: "black"});
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
            if (sceneRef.current.hasChildNodes()){
                sceneRef.current.removeChild(renderer.domElement);
            }
        }
    }, [])

  return (
    <StyledWrapper ref={sceneRef}></StyledWrapper>
  )
}

const StyledWrapper = styled.div`
    /* position: absolute; */
    /* margin-top: 15rem; */

`

export default Connections
