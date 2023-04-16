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
