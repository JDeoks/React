// Cart.js
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, plusCount } from './../store.js';

function Cart() {
  // store 변수 가져옴
  let stock = useSelector(state => state.stock);
  const dispatch = useDispatch(); // useDispatch 훅을 사용하여 dispatch 함수 가져오기
  console.log('카트 콘솔');
  console.log(stock);
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {stock.map((stockI, i) => {
          return (
            // 키 설정하면 좋음
            <tr key={i}>
              <td>{stock[i].id}</td>
              <td>{stock[i].name}</td>
              <td>{stock[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(plusCount(stock[i]));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Cart;
