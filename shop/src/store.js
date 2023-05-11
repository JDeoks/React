// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeName(state) {
      return 'john ' + state;
    },
  },
});

let stock = createSlice({
  name: 'stock',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    // Int 받음
    plusCount(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);
      state[index].count += 1;
    },
    // { id: 2, name: 'Grey Yordan', count: 1 } 같은 오브젝트 받음
    add2Cart(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);
      //   state.push({ id: 1, name: 'Red knit', count: 1 });
      if (index !== -1) {
        // 해당 아이템이 이미 존재하는 경우
        state[index].count += 1;
      } else {
        // 해당 아이템이 존재하지 않는 경우
        state.push({
          id: action.payload.id,
          name: action.payload.name,
          count: 1,
        });
      }
    },
  },
});

// Slice 임포트
export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});
// slice이름.actions state 변경함수가 전부 반환됨
//반환값을 changeNameㅇ
export let { changeName } = user.actions;
export let { plusCount, add2Cart, addItem } = stock.actions;
