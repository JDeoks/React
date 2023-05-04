import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.css';

function Namespace() {
  const [showDetail, setShowDetail] = useState(false);
  const [currentId, setCurrentId] = useState('');

  function handleBoxClick(id) {
    setCurrentId(id);
    setShowDetail(true);
  }

  function handleCloseDetail() {
    setCurrentId('');
    setShowDetail(false);
  }

  return (
    <div>
      <div className="box-container">
        <div onClick={() => handleBoxClick('1')} className="box">
          <div className="box-background"></div>
          <div className="box-title">1.circle</div>
        </div>
        <div onClick={() => handleBoxClick('2')} className="box">
          <div className="box-background"></div>
          <div className="box-title">2.circle</div>
        </div>
        <div onClick={() => handleBoxClick('3')} className="box">
          <div className="box-background"></div>
          <div className="box-title">3.circle</div>
        </div>
      </div>
      <TransitionGroup>
        {showDetail && (
          <CSSTransition
            key={currentId}
            classNames={{
              enter: 'fade-enter',
              enterActive: 'fade-enter-active',
              exit: 'fade-exit',
              exitActive: 'fade-exit-active',
            }}
            timeout={500}
          >
            <div className="detail" onClick={handleCloseDetail}>
              <div className="detail-background"></div>
              <CSSTransition
                classNames={{
                  enter: 'slide-enter',
                  enterActive: 'slide-enter-active',
                  exit: 'slide-exit',
                  exitActive: 'slide-exit-active',
                }}
                timeout={500}
              >
                <div className="detail-content">
                  <div className="detail-title">{currentId}.circle</div>
                  <button onClick={handleCloseDetail}>Close</button>
                </div>
              </CSSTransition>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default Namespace;
