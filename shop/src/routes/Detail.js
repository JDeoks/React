import { useParams } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

export default Detail;

function Detail(props) {
  // URL파라미터, id부분의 url을 저장함
  let { id } = useParams();
  let foundShoes = props.shoes.find(S => S.id == id);
  let [tabNum, setTabNum] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={'https://codingapple1.github.io/shop/shoes' + id + '.jpg'}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{foundShoes.title}</h4>
          <p>{foundShoes.content}</p>
          <p>{foundShoes.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
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
      <TabContent tabNum={tabNum} />
    </div>
  );
}

function TabContent({ tabNum }) {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tabNum];
}
