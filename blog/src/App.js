import logo from './logo.svg';
import './App.css';
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

  function addLikeNum() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: '16px' }}>블로그임</h4>
      </div>
      <div>
        <button
          onClick={() => {
            let copy = [...titleTexts];
            copy = copy.sort();
            setTitleTexts(copy);
          }}
        >
          가나다 순으로 정렬
        </button>

        <button
          onClick={() => {
            let copy = [...titleTexts];
            copy[0] = '여자 코트 추천';
            setTitleTexts(copy);
          }}
        >
          여자로 변경
        </button>
      </div>

      {/* list map으로 출력 */}
      {titleTexts.map((a, cnt) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setShowModal(true);
              }}
            >
              {a}{' '}
              <span
                onClick={cnt => {
                  let copy = [...likes];
                  copy[cnt] += 1;
                  setLikes(copy);
                }}
              >
                👍 {likes[cnt]}
              </span>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {/* <div className="list">
        <h4>
          {titleText[0]}
          <span
            onClick={() => {
              setLike([like[0] + 1]);
            }}
          >
            👍
          </span>
          {like[0]}{' '}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{titleText[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            showModal == true ? setShowModal(false) : setShowModal(true);
          }}
        >
          {titleText[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {showModal == true ? <Modal titleText={titleTexts[0]} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>{props.titleText}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
