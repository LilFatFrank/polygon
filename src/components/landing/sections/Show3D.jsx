import { Box } from "@mui/material";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import "./Show3D.scss";

const Model = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "https://learosema.github.io/blender-experimenting/leas-donut.glb"
  );

  const [colour, setColour] = useState("#ED91AD");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Donut?.geometry}
        material={nodes.Donut?.material}
        position={[-0.0037, 0.0251, -0.0048]}
      >
        <mesh
          onClick={() => {
            colour === "#ED91AD" ? setColour("#93c572") : setColour("#ED91AD");
          }}
          geometry={nodes.Icing?.geometry}
          material={nodes.Icing?.material}
          material-color={colour}
        />
      </mesh>
      <mesh
        geometry={nodes.SprinkleBall001?.geometry}
        material={nodes.SprinkleBall001?.material}
        position={[0.0619, 0.0463, -0.014]}
        rotation={[0.8888, -0.848, 2.0698]}
        scale={[0.2261, 0.2592, 0.2496]}
      />
    </group>
  );
};

const Show3D = () => {
  return (
    <Box className="box">
      <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
        <OrbitControls
          autoRotate={true}
          position={[10, 18, 23]}
          enableZoom={false}
          autoRotateSpeed
        />
        <pointLight position={[10, 10, 10]} intensity={1.3} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Show3D;
