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
      {titleTexts.map((a, idx) => {
        return (
          <div className="list" key={idx}>
            <h4
              onClick={() => {
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
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {showModal === true ? (
        <Modal
          color="orange"
          titleTexts={titleTexts}
          setTitleTexts={setTitleTexts}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal" style={{ background: props.color }}>
        <h4>{props.titleTexts[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            let copy = [...props.titleTexts];
            copy[0] = '여자 코트 추천';
            props.setTitleTexts(copy);
          }}
        >
          첫 글 여자코트로 변경
        </button>
      </div>
    </>
  );
}

export default App;
