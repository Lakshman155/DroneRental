import React, { useState, useEffect } from 'react';
import api from '../api/Api';

const AllRentals= () => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await api.get('rent/getallrentals');
        setRentals(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch rentals');
        setLoading(false);
      }
    };

    fetchRentals();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">From Date</th>
            <th className="py-2 px-4 border-b">To Date</th>
            <th className="py-2 px-4 border-b">Price/Day</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map((rental) => (
            <tr key={rental.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{rental.product.name}</td>
              <td className="py-2 px-4 border-b">{rental.rentDate}</td>
              <td className="py-2 px-4 border-b">{rental.returnDate}</td>
              <td className="py-2 px-4 border-b">${rental.product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllRentals;
