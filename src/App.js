import styled from "styled-components";
import "./App.css";
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <ShowBtn onClick={() => setModalOpen(true)}>Modal open</ShowBtn>
      {modalOpen && (
        <BlackBg onClick={() => setModalOpen(false)}>
          <ModalBox>
            <Modal>
              <h1>Modal</h1>
              <button onClick={() => setModalOpen(false)}>Close</button>
            </Modal>
          </ModalBox>
        </BlackBg>
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
`;

const ModalBox = styled.div`
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  h1 {
    color: #333;
  }

  button {
    border: none;
    border-radius: 5px;
    background-color: #40a578;
    padding: 10px 20px;
    color: #fff;
    cursor: pointer;
    margin-bottom: 20px;
  }
  button:active {
    background-color: #40a578dc;
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
