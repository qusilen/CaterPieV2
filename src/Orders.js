import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css';
import { useStateValue } from "./StateProvider";
import Order from './Order';
import { useHistory } from 'react-router-dom';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    } else {
      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
          setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        ));
    }
  }, [user, history]);

  return (
    <div className='orders'>
      <h1>Siparişleriniz</h1>

      <div className='orders__order'>
        {orders?.map(order => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
