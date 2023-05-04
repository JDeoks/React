import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 2rem 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border-radius: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #555;
  height: 100%;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
`;

function Grid({ cells }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  function handleCellClick(cell) {
    setSelectedCell(cell);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function renderCell(cell, index) {
    return (
      <CSSTransition
        key={index}
        in={cell === selectedCell}
        timeout={300}
        classNames="cell"
        unmountOnExit
      >
        <Cell onClick={() => handleCellClick(cell)}>{cell}</Cell>
      </CSSTransition>
    );
  }

  return (
    <Container>
      <Title>Grid Popup</Title>
      <GridContainer>{cells.map(renderCell)}</GridContainer>
      <CSSTransition
        in={modalIsOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <Modal onClick={closeModal}>
          <ModalContent>
            {selectedCell !== null ? (
              <>
                <h2>Cell {selectedCell} Detail</h2>
                <p>This is the detail for Cell {selectedCell}.</p>
              </>
            ) : null}
          </ModalContent>
        </Modal>
      </CSSTransition>
    </Container>
  );
}

export default Grid;
