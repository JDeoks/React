// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  // let post = '강남우동맛집'
  let [titleTexts, setTitleTexts] = useState([
    '남자 코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);
  let [likes, setLikes] = useState([0, 0, 0]);
  let [showModal, setShowModal] = useState(false);
  let [textIdx, setTextIdx] = useState(0);
  let [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: '16px' }}>블로그임</h4>
      </div>

      {/* list map으로 출력 */}
      {titleTexts.map((a, idx) => {
        return (
          <div className="list" key={idx}>
            <h4
              onClick={() => {
                setTextIdx(idx);
                setShowModal(true);
              }}
            >
              {a}{' '}
              <span
                onClick={() => {
                  let copy = [...likes];
                  copy[idx] += 1;
                  setLikes(copy);
                }}
              >
                👍 {likes[idx]}
              </span>
            </h4>
            <p>
              2월 17일 발행
              <span
                onClick={e => {
                  //titleTexts idx번째 요소 삭제
                  setTitleTexts(titleTexts.filter((titleText, i) => i !== idx));
                  //splice로도 가능
                  // titleTexts.splice(0, 2);
                  setLikes(likes.filter((like, i) => i !== idx));
                }}
              >
                삭제
              </span>
            </p>
          </div>
        );
      })}

      {/* 모달컴포넌트 */}
      {showModal === true ? (
        <Modal
          titleTexts={titleTexts}
          setTitleTexts={setTitleTexts}
          textIdx={textIdx}
          setShowModal={setShowModal}
        />
      ) : null}

      {/* 텍스트 필드 */}
      <input
        onChange={e => {
          setInputValue(e.target.value);
          // console.log(e.target.value);
        }}
      />
      {/* 등록 버튼 */}
      <button
        onClick={() => {
          let textCopy = [inputValue, ...titleTexts];
          let likeCopy = [0, ...likes];
          setTitleTexts(textCopy);
          setLikes(likeCopy);
        }}
      >
        등록
      </button>
    </div>
  );
}

function Modal(props) {
  let [inputText, setInputText] = useState('');
  return (
    <>
      <div className="modal" style={{ background: props.color }}>
        <h4>{props.titleTexts[props.textIdx]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <input
          onChange={e => {
            setInputText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let copy = [...props.titleTexts];
            copy[props.textIdx] = inputText;
            props.setTitleTexts(copy);
          }}
        >
          글제목 변경
        </button>
        <button
          onClick={() => {
            props.setShowModal(false);
          }}
        >
          모달창 닫기
        </button>
      </div>
    </>
  );
}

export default App;
