import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

const RenderAreaDiv = styled.div`
  width: 75%;
  height: 100%;
`;

export default function RenderArea() {
  return (
    <RenderAreaDiv>
      <Canvas>
        <mesh>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </RenderAreaDiv>
  );
}
