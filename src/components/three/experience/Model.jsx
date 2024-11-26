import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/skull.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) actions["Open Close Jaw"].reset().fadeIn(0.5).play();

    return () => actions["Open Close Jaw"].fadeOut(0.5);
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Object_5" position={[0, 1.2, 0]}>
          <group name="Jaw" />
          <skinnedMesh
            name="Object_8"
            geometry={nodes.Object_8.geometry}
            material={
              new THREE.MeshStandardMaterial({
                color: 0xffffff,
                metalness: 1,
                roughness: 0,
              })
            }
            skeleton={nodes.Object_8.skeleton}
          />
          <group name="Skull001" />
          <primitive object={nodes._rootJoint} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/skull.glb");
