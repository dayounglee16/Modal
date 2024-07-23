import styled from "styled-components";
import "./App.css";
import { useRef } from "react";

function App() {
  const modalRef = useRef();

  return (
    <Container>
      <ShowBtn onClick={() => modalRef.current.showModal()}>Modal open</ShowBtn>

      <dialog ref={modalRef}>
        <h1>Modal</h1>
        <HideBtn onClick={() => modalRef.current.close()}>Close</HideBtn>
      </dialog>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  dialog {
    width: 500px;
    height: 200px;
    border: none;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

const ShowBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #40a578;
  padding: 20px 35px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bold;

  &:active {
    background-color: #40a578dc;
  }
`;

const HideBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #40a578;
  padding: 10px 15px;
  color: #fff;
  cursor: pointer;
  margin-top: 60px;

  &:active {
    background-color: #40a578dc;
  }
`;
