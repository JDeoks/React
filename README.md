# ReactLesson

## 1강

npx create-react-app 프로젝트명: 리액트 프로젝트 생성  
보통 Create React App을 사용해서 프로젝트 생성함  
App.js가 메인이 되는 페이지  
미리보기띄우기는 모두 들어있는 파일 ex) blog에서 npm start  
이걸 쓰려면 npm(Node Package Module, 라이브러리 있는 플랫폼)필요함(nodejs에 있음)

## 2강

node_modules: 프로젝트에 필요한 모든 라이브러리 보관함  
public 폴더: 이미지파일 같은 static파일 모아 놓는 곳  
src: 코드짜는 곳 소스 코드 보관함  
html없이 js에 적어도 되는 이유 -> js에다가 html쉽게 적을 수 있게 해주는 JXS  
pakage.json: 프로젝트에 대한 여러 정보 저장하는 파일 자동생성 안건드려도 됨

## 3강

import ‘경로’로 App.js에 css 파일 추가  
class 대신에 className

### 데이터 바인딩:

```jsx
let post = ‘스트링’;
<p>{post}</p>
```

id, className다 가능
스타일 입력

```jsx
style = {{스타일명: ‘값’}}
```

## 4강

function App()의 리턴값에는 병렬로 태그 2개이상 불가  
변수는 var, let const

### state변수:

일반변수는 바뀌어도 라벨의 값이 변하지 않는데,  
satate변수가 바뀌면 그 변수를 쓰던 html자체가 자동으로 전부 재렌더링 됨  
자주 변경될 것 같은 html부분 state로 생성

### useState():

React 컴포넌트에서 상태(state)를 관리하기 위해 사용

```jsx
let [a, b] = useState();
```

-> a 는 값 자체, b는 상태를 갱신하는 setter 함수  
a에 그냥 대입연산은 안됨, setter함수 사용

## 5강

```jsx
<span onClick={함수이름}>버튼</span>
// 클로저 사용
<span onClick={()=>{b(3)}}>버튼</span>

```

클로저 사용도 가능

## 6강

[let, var의 차이](https://www.freecodecamp.org/korean/news/var-let-constyi-caijeomeun/)

usestate의 setter 함수는 포인터 값 다를 때만 state변수 갱신  
setter 함수로 arr값 넣으려면 아래와 같이 해야 함

```jsx
let copy = [...arr];
// 대괄호를 벗긴 후 다시 입혀서 배열 생성
setterFunc(copy);
```

## 7강

### Component:

swiftUI의 뷰와 비슷  
여러 요소를 축약해서 표시가능  
반복적인 html 축약, 큰 페이지, 자주 변경되는 요소등에 사용

```jsx
<Compo />;
function Modal() {
  return <></>;
}
```

## 8강

state 변수 에 따라 컴포넌트 visible 결정하기  
{}안에서는 if, for 사용 불가

```jsx
let [showModal, setShowModal] = useState(false)
...
{showModal == true ? <Modal /> : null}
```

## 9강

### arr.map():

배열의 내장 함수  
arr 자료 개수만큼 코드 실행  
클로저 파라미터  
a: arr안에 있는 요소, i: 0..<n int(생략가능)  
return값은 arr에 저장됨

```jsx
[1, 2, 3].map((a, i) => {
  return a * 3;
  console.log(i);
});
// [3, 6, 9]
// log: 0, 1, 2

//컴포넌트처럼 쓸 때
{
  ['a', 'b', 'c'].map((a, idx) => {
    return (
      <>
        {a}
        {idx}
      </>
    ); //세미콜론 없애야함
  });
}
// a0 b1 c2
```

## 10강

### [props:](https://www.snugarchive.com/blog/react-components-and-props/)

상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달해주는 객체  
swiftUI에서 view 구조체에 parameter 전해주는 것과 같음  
\*부모 -> 자식만 가능

```jsx
<Modal titleText={'title'} />
...
function Modal(props){
  return(
    <>
      <h4>{props.titleText}</h4>
    </>
  )
}
// 함수 전달
<Modal setTitleTexts = {setTitleTexts} />
```

포인터, 함수도 전달 가능  
포인터와 함수를 전달함으로써 자식간의 데이터 전달 가능한듯

## 11강

\*state는 state를 사용하는 컴포넌트들 중 최상위 컴포넌트에 정의

## 12강

### 이벤트 핸들러

```jsx
// 값 변경 시
<input
  onChange={e => {
    //상위 뷰로 이벤트 가는 것 막음
    e.stopPropagation();
    // 이벤트 객체.html태그.값
    console.log(e.target.value);
  }}
/>
```

### 이벤트 버블링

이벤트가 상위 html로 퍼지는 것  
ex. 하위 뷰를 클릭하면 상위 뷰도 클릭한 것이 됨

## 13강

### arr.filter():

```jsx
arr.filter((element, i) => {
  i != inputIdx;
});
```

element: 배열 요소, i: 배열 인덱스  
i 와 inputIdx같으면 배열에서 삭제

### arr.splice(start, deleteCount):

```jsx
titleTexts.splice(0, 1);
```

0..<1 삭제

## 14강

### class 사용 컴포넌트 생성

```jsx
class Modal extends React.Component {
  constructor() {
    super();
    //state 변수
    this.state = {
      name: 'kim',
      age: 20,
    };
  }
  render() {
    return (
      <>
        /* state변수 사용 */
        <div>hello {this.state.age}</div>
        <button
          onClick={() => {
            // 업데이트
            this.setState({ age: 21 });
          }}
        >
          21
        </button>
      </>
    );
  }
}
```

## 15강

### github이용 배포

[link](https://jdeoks.github.io)

## 2-1강

### [React-Bootstrap](https://react-bootstrap.netlify.app/)

리액트에서 css 작업을 원활하게 도와주는 라이브러리

## 2-2강

### public 폴더

리액트는 빌드 할 때 js html css 압축하는데,  
public안에 있는 파일은 압축 되지 않음

### public에 있는 이미지 사용

```jsx
// 기본
<img src="/logo192.png" />
//권장
<img src={process.env.PUBLIC_URL + '/logo192.png'} />
```

세부 경로에 배포할 때도 파일 찾기 위함

## 2-3강

### export, import

```jsx
// export하려는 파일
let a = 10;
let b = 100;
export default { a, b };
//import하려는 파일
import { a, b } from './data.js';
// 변수명 그대로 가져와야함
```

컴포넌트도 export가능

### object

key, value 저장하는 자료형

```jsx
// 선언
let obj = { name: 'kim', age: 20 };
// 사용
obj.name;
```

## 2-4강

```jsx
<img src={'/img/shoes' + idx + '.jpg'} />
```

string 중간에 변수 넣을땐 중괄호로 묶음

## 2-5강

### 페이지 라우팅

요청한 경로에 따라 다른 페이지를 보여주는 것  
ex. youtube.com/channel/  
MPA에서는 각 경로마다 다른 html파일을 보냄  
리액트는 index.html하나만 사용.  
세부 경로 접속하면 기존의 html 지우고 새로운 컴포넌트 보임

### [react-router-dom](https://reactrouter.com/en/main)

리액트로 라우팅 구현할 때 사용하는 라이브러리  
npm install react-router-dom@6

index.js에 BrowserRouter 태그 추가

```jsx
// index.js
import { BrowserRouter } from 'react-router-dom';
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// App.js
import { Routes, Route, Link } from 'react-router-dom';
// ...
// App()  <div className="App"> 내부
<Routes>
  <Route path="/detail" element={<Detail />} />
  // 404 페이지 대신에 표시(설정해 놓은 것 이외의 모든 것)
  <Route path="*" element={<div>없는 페이지</div>} />
</Routes>;
// Link
<Link to="/detail">상세페이지</Link>;
```

## 2-6강

### useNavigate

event가 발생했을 때, url 조작 가능

```jsx
import { useNavigate } from 'react-router-dom';
//...
let navigate = useNavigate();
<p onClick={()=>{navigate('/detail')}}>
navigate(-1)
// 뒤로가기 앞으로 가기 버튼과 같음
```

### Nested Routes

다른 경로가 더 붙었을 때 중첩 Route 태그 사용  
유사한 페이지가 여럿 있을 때 사용

```jsx
<Route path="/detail/member" element={<Member />} />
// 위 방법 대신 아래 사용 가능
<Route path="/detail" element={<Detail />}>
  <Route path="/member" element={<Member />} />
</Route>
```

이 때, 상위경로 컴포넌트에는 Outlet 사용해서 하위경로 보일 위치 표시

```jsx
function Detail() {
  return (
    <div>
      <h4>detail</h4>
      <Outlet></Outlet>
    </div>
  );
}
```

## 2-7강

### URL파라미터

변수를 사용하여 페이지 주소를 정하고 싶을 때 사용

```jsx
// URL파라미터
<Route path="/detail/:id" element={<Detail shoes={shoes} />} />;
// ...

function Detail(props) {
  // React Router에서 제공하는 Hook 함수, 현재 URL에서 파라미터 값을 추출
  let { id } = useParams();
  return (
    <>
      <p>{props.shoes[id].content}</p>
    </>
  );
}
```

URL파라미터인 id에 /detail/ 뒤의 값이 들어감  
ex) url이 /detail/2 인 경우에는 id에 2 저장됨  
호출된 컴포넌트에서는 useParams()을 사용해서 url파라미터값 사용 가능

### find, filter

```jsx
// 배열에서 일치하는 첫 요소만 반환
let foundShoes = props.shoes.find(S => S.id == id);
//일치하는 모든 요소를 반환
let foundShoes = props.shoes.filter(S => S.id == id);
```

클로저를 받아서 배열 요소에 적용시킨 후 true를 반환하는 요소만 반환함

## 2-7강

### styled-components

컴포넌트를 만들 때 스타일을 미리 설정할 수 있게 하는 라이브러리

```jsx
import styled from 'styled-components';

let Box = styled.div`
  padding: 20px;
  color: grey;
`;
let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;

function Detail() {
  return (
    <div>
      <Box>
        <YellowBtn>버튼</YellowBtn>
      </Box>
    </div>
  );
}
```

- CSS 파일 오픈할 필요없이 JS 파일에서 바로 스타일 적용 가능
- 스타일이 다른 JS 파일로 오염되지 않음
- 페이지 로딩시간 단축

props 사용한 컴포넌트 재활용

```jsx
import styled from 'styled-components';

let YellowBtn = styled.button`
  background: ${props => props.bg}};
  // 조건문도 가능
  color : ${props => (props.bg == 'blue' ? 'white' : 'black')};
  padding: 10px;
`;

<YellowBtn bg="blue">버튼</YellowBtn>;
```

### CSS 모듈화

CSS파일에서도 JS 파일에 간섭하지 않는 '모듈화' 가능
컴포넌트명.module.css 파일은 컴포넌트명.js에만 스타일 적용 가능

## 2-8, 2-9강

### 컴포넌트의 Lifecycle

class 문법 사용

```jsx
class Detail2 extends React.Component {
  componentDidMount() {
    //컴포넌트 로드 후 실행
  }
  componentDidUpdate() {
    //컴포넌트 업데이트 후 실행
  }
  componentWillUnmount() {
    //컴포넌트 삭제 전 실행
  }
}
```

### useEffect

생명주기에 따라 side effect처리하는 훅

```jsx
import { useState, useEffect } from 'react';

function Detail() {
  useEffect(() => {
    // 컴포넌트 mount & update 후 실행
    console.log('안녕');
  });

  return 생략;
}
```

dependencies:  
두 번째 파라미터로 [] (dependencies) 사용시 mount, []안의 변수 or state 변경시에만 실행

```jsx
// mount, count 변할때만 실행
useEffect(() => {
  실행할코드;
}, [count]);
// mount 후 실행
useEffect(() => {
  실행할코드;
}, []);
```

clean up function
useEffect 동작하기 전, 컴포넌트 unmount 시에 실행됨  
타이머 제거, 소켓 연결요청 제거, ajax 요청 중단

```jsx
// mount, count 변할때만 실행
useEffect(() => {
  실행할코드;
}, [count]);
// mount 후 실행
useEffect(() => {
  실행할코드;
}, []);
```

## 2-10강

### AJAX(Asynchronous JavaScript and XML)

비동기적으로 서버와 브라우저가 데이터를 주고받을 수 있는 기술  
페이지 전체를 새로고침하지 않고도 서버로부터 데이터를 받아와서 동적으로 화면을 업데이트함  
npm install axios로 설치  
import axios from 'axios'로 임포트

```jsx
// get
<button
  onClick={() => {
    axios
      .get('url주소')
      .then(result => {
        console.log(result.data);
      })
      .catch(() => {
        console.log('실패');
      });
  }}
>
  get 요청
</button>

// post
<button
  onClick={() => {
    axios
    .post('url주소', {name: 'Kim})
  }}
>
```

## 2-11강

### 탭바

```jsx
<Nav variant="tabs" defaultActiveKey="link0">
  <Nav.Item>
    <Nav.Link
      onClick={() => {
        탭변경(0);
      }}
      eventKey="link0"
    >
      버튼0
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link
      onClick={() => {
        탭변경(1);
      }}
      eventKey="link1"
    >
      버튼1
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link
      onClick={() => {
        탭변경(2);
      }}
      eventKey="link2"
    >
      버튼2
    </Nav.Link>
  </Nav.Item>
</Nav>;

function TabContent(props) {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.탭];
}
```

## 2-12강

### 전환 애니메이션

1. 애니메이션 동작 전 className 생성
2. 동작 후 className 생성
3. className에 transition 속성 추가
4. 애니메이션 표현할 때 2번 className 추가

```CSS
.start {
  opacity : 0
}
.end {
  opacity : 1;
  /* 해당 속성이 변할 때 서서히 변경 */
  transiton: opacity 0.5s;
}
```

```jsx
function TabContent({ tabIdx }) {
  let [fade, setFade] = useState('');

  useEffect(() => {
    //100ms 후에
    setTImeout(() => {
      setFade('end');
    }, 100);
    // 클린업 함수
    return () => {
      setFade('');
    };
  }, [tabIdx]);

  return (
    <div className={'start ' + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tabIdx]}
    </div>
  );
}
```

리액트 18버전 이상부터 automatic batch state로 인해 변경함수들이 연달아서 여러개 처리될 때  
state 변경함수를 다 처리하고 마지막에 한 번만 재렌더링됨->setTImeout으로 나눠서 실행 가능

## 2-12강

### Context API

컴포넌트가 중첩되어 있으면 props를 계속 연결해서 전달해주어야 함  
Context API 문법으로 props 없이 state 공유가능
사용하지 않는 컴포넌트들도 Context안에 있으면 재렌더링됨

```jsx
// Context 객체 생성
export let Context1 = React.createContext();
function App() {
  let [stock, setStock] = useState([10, 11, 12]);

  return (
    //Context1로 감싼 모든 컴포넌트와 그 자식컴포넌트는 state를 props 전송없이 직접 사용
    <Context1.Provider value={{ 재고, shoes }}>
      <Detail shoes={shoes} />
    </Context1.Provider>
  );
}

import { useState, useEffect, useContext } from 'react';
import { Context1 } from './../App.js';

function Detail() {
  let { 재고 } = useContext(Context1);

  return <div>{재고}</div>;
}
```
