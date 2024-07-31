import React, { useEffect, useState } from 'react';

function App() {
  // hooks for getting data from api
  const [data, setData] = useState([]);

  // hooks to run api request
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      }).catch((e) => {
        console.log("there was an error");
      })
  }, []);

  return (
    <div className="container mt-3 justify-content-center">
      <h1 className="text-center mt-3 mb-3 lead">All Carts</h1>
      <hr />
      <div className="container card p-3 mt-3 bg-light text-dark rounded shadow">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>User Id</th>
              <th>Date</th>
              <th>Products</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.userId}</td>
                  <td>{item.date}</td>
                  <td>{JSON.stringify(item.products)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;