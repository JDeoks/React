import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {
  let stock = useSelector(state => state.stock);

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
        <tr>
          {stock.map((stockI, i) => {
            return (
              <>
                <td>{i}</td>
                <td>{stockI.title}</td>
                <td>{stockI.count}</td>
                <td>{stockI.id}</td>
              </>
            );
          })}
        </tr>
      </tbody>
    </Table>
  );
}

export default Cart;
