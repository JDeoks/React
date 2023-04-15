# ReactLesson

### 1강
npx create-react-app 프로젝트명: 리액트 프로젝트 생성  
보통 Create React App을 사용해서 프로젝트 생성함  
App.js가 메인이 되는 페이지  
미리보기띄우기는 모두 들어있는 파일 ex) blog에서 npm start  
이걸 쓰려면 npm(Node Package Module, 라이브러리 있는 플랫폼)필요함(nodejs에 있음)  

### 2강 
node_modules: 프로젝트에 필요한 모든 라이브러리 보관함  
public 폴더: 이미지파일 같은 static파일 모아 놓는 곳  
src: 코드짜는 곳 소스 코드 보관함  
html없이 js에 적어도 되는 이유 -> js에다가 html쉽게 적을 수 있게 해주는 JXS  
pakage.json: 프로젝트에 대한 여러 정보 저장하는 파일 자동생성 안건드려도 됨

### 3강
import ‘경로’로 App.js에 css 파일 추가 
class 대신에 className

데이터 바인딩:  
```javascript
let post = ‘스트링’;  
<p>{post}</p>  
```
id, className다 가능 
스타일 입력
```javascript
style = {{스타일명: ‘값’}}
```

### 4강
function App()의 리턴값에는 병렬로 태그 2개이상 불가
변수는 var, let const

state변수:  
일반변수는 바뀌어도 라벨의 값이 변하지 않는데
satate변수가 바뀌면 그 변수를 쓰던 html자체가 자동으로 전부 재렌더링 됨
자주 변경될 것 같은 html부분 state로 생성
useState():
	 React 컴포넌트에서 상태(state)를 관리하기 위해 사용
```javascript
let [a, b] = useState('남자 코트 추천'


```
-> a 는 값 자체 b는 상태를 갱신하는 함수
<p onClick={함수}>
클로저 사용도 가능
