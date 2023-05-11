// Detail.js
import { json, useParams } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add2Cart } from './../store.js';
export default Detail;

function Detail(props) {
  let { id } = useParams();
  let foundShoes = props.shoes.find(S => S.id == id);
  let [tabNum, setTabNum] = useState(0);
  let [fade2, setFade2] = useState('');
  let stock = useSelector(state => state.stock);
  const dispatch = useDispatch(); // useDispatch 훅을 사용하여 dispatch 함수 가져오기

  useEffect(() => {
    if (localStorage.getItem('watched') != null) {
      let arr = JSON.parse(localStorage.getItem('watched'));
      if (!arr.includes(id)) {
        arr.push(id);
      }
      localStorage.setItem('watched', JSON.stringify(arr));
    } else {
      let arr = [];
      arr.push(id);
      localStorage.setItem('watched', JSON.stringify(arr));
    }
    setTimeout(() => {
      console.log(localStorage.getItem('watched'));
      setFade2('end');
    });

    return () => {
      setFade2('');
    };
  }, []);

  return (
    <div className={`container start ${fade2}`}>
      <div className="row">
        <div className="col-md-6">
          <img
            onClick={() => {
              console.log(
                `https://codingapple1.github.io/shop/shoes${+id + 1}.jpg`
              );
            }}
            src={`https://codingapple1.github.io/shop/shoes${+id + 1}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{foundShoes.title}</h4>
          <p>{foundShoes.content}</p>
          <p>{foundShoes.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(add2Cart({ id: foundShoes.id, name: foundShoes.title }));
              console.log(stock);
            }}
          >
            주문하기
          </button>
        </div>
      </div>

      {/* <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabNum(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabNum(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabNum(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tabNum={tabNum} /> */}
    </div>
  );
}

function TabContent({ tabNum }) {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tabNum];
}
