import React from 'react';

const recentOrders = [
  {
    id: 1,
    customerName: 'John Doe',
    customerImage: 'https://via.placeholder.com/40',
    orderNumber: '12345',
    amount: '$150.00',
    status: 'Delivered',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    customerImage: 'https://via.placeholder.com/40',
    orderNumber: '12346',
    amount: '$75.50',
    status: 'Processing',
  },
  {
    id: 3,
    customerName: 'Michael Johnson',
    customerImage: 'https://via.placeholder.com/40',
    orderNumber: '12347',
    amount: '$200.75',
    status: 'Cancelled',
  },
  {
    id: 4,
    customerName: 'Emily Davis',
    customerImage: 'https://via.placeholder.com/40',
    orderNumber: '12348',
    amount: '$300.25',
    status: 'Pending',
  },
  {
    id: 5,
    customerName: 'William Brown',
    customerImage: 'https://via.placeholder.com/40',
    orderNumber: '12349',
    amount: '$50.00',
    status: 'Delivered',
  },
];

const Orders = () => {
  return (
    <div className="overflow-x-auto w-[53rem] m-4 rounded">
      <table className="p-4 min-w-full bg-dark-navy text-white rounded-lg shadow-md">
        <thead>
			<tr>
			<strong className="text-2xl ml-4 mt-6 font-bold text-white">Recent Orders</strong></tr>
          <tr>
            <th className="py-2 px-4 bg-dark-navy border-b text-left">Customer</th>
            <th className="py-2 px-4 bg-dark-navy border-b text-left">Order No</th>
            <th className="py-2 px-4 bg-dark-navy border-b text-left">Amount</th>
            <th className="py-2 px-4 bg-dark-navy border-b text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order) => (
            <tr key={order.id} className="hover:bg-blue-400">
              <td className="py-2 px-4 border-b flex items-center">
                <img
                  src={order.customerImage}
                  alt={order.customerName}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <span>{order.customerName}</span>
              </td>
              <td className="py-2 px-4 border-b">{order.orderNumber}</td>
              <td className="py-2 px-4 border-b">{order.amount}</td>
              <td className={`py-2 px-4 border-b ${getStatusClass(order.status)}`}>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getStatusClass = (status) => {
  switch (status) {
    case 'Delivered':
      return 'text-green-500';
    case 'Processing':
      return 'text-yellow-500';
    case 'Cancelled':
      return 'text-red-500';
    case 'Pending':
      return 'text-blue-500';
    default:
      return '';
  }
};

export default Orders;
