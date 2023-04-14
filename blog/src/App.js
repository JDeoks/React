
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {

  // let post = '강남우동맛집'
  let [titleText, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학'])
  var [like, setLike] = useState([0,0,0])

  function addLikeNum() {
    console.log(1)
  }

  return (
    <div className="App">
      
      <div className="black-nav">
        <h4 style={ {fontSize : "16px"} } >블로그임</h4>
      </div>

      <div className="list">
        <h4>{titleText[0]} <span onClick={()=> setLike([like[0]+1,])}>👍</span> {like[0]} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{titleText[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{titleText[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App; 
