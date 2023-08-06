import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Transactions.css";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactionData();
  }, []);

  async function fetchTransactionData() {
    try {
      let url =
        process.env.NODE_ENV === "production"
          ? "https://budget-app-backend-cawn.onrender.com/transactions"
          : "http://localhost:3001/transactions";

      let result = await axios.get(url);

      setTransactions(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const total = transactions.reduce(
    (accu, curr) => (accu += Number(curr.amount)),
    0
  );

  let colorByTotal;
  if (total >= 100) {
  }
  colorByTotal = "color-green";
  if (total < 100) colorByTotal = "color-red";

  return (
    <div>
      <h1 className="budget-container-index">Index</h1>
      <div className="budget-container">
        <h2 className="budget-container-amount">
          Bank Total Amount: <span className={colorByTotal}>${total}</span>
        </h2>
        <div className="budget-container-table">
          <table id="budget">
            <tbody>
              <tr>
                <th>Date</th>
                <th>Item Name</th>
                <th>Amount</th>
              </tr>

              {transactions.map((transaction) => {
                const transactionDate = new Date(transaction.date);

                const formattedDate = transactionDate.toLocaleDateString();
                return (
                  <tr key={transaction.id}>
                    <td>{formattedDate}</td>
                    <td id="item-name">
                      <Link to={`/transactions/${transaction.id}`}>
                        {transaction.item_name}
                      </Link>
                    </td>
                    <td>{transaction.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
