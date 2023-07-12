import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./TransactionDetail.css";

function TransactionDetail() {
  const [transactions, setTransactions] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const formattedDate = new Date(transactions.date).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric", year: "numeric" }
  );

  useEffect(() => {
    fetchTransactionData();
  }, []);

  async function fetchTransactionData() {
    try {
      let url =
        process.env.NODE_ENV === "production"
          ? `https://budget-app-backend-cawn.onrender.com/transactions/${id}`
          : `http://localhost:3001/transactions/${id}`;

      let result = await axios.get(url);

      setTransactions(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleNavigateBack() {
    navigate("/transactions");
  }

  async function handleDeleteById() {
    try {
      let url =
        process.env.NODE_ENV === "production"
          ? `https://budget-app-backend-cawn.onrender.com/transactions/${id}`
          : `http://localhost:3001/transactions/${id}`;

      await axios.delete(url);

      navigate("/transactions");
    } catch (error) {
      console.log(error);
    }
  }
  function handleEdit() {
    navigate(`/transactions/${id}/edit`);
  }

  return (
    <div>
      <h1 className="budget-container-show">Show</h1>
      <div className="budget-container-info">
        <p>
          <span style={{ fontWeight: "bold" }}>Item Name:</span>{" "}
          {transactions.item_name}
        </p>

        <p>
          <span style={{ fontWeight: "bold" }}>Date:</span> {formattedDate}
        </p>

        <p>
          <span style={{ fontWeight: "bold" }}>From:</span> {transactions.from}
        </p>

        <p>
          <span style={{ fontWeight: "bold" }}>Amount:</span> $
          {transactions.amount}
        </p>

        <p>
          <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
          {transactions.category}
        </p>
      </div>

      <div className="budget-navigation">
        <ul>
          <li>
            <button onClick={handleNavigateBack}>Back</button>
          </li>
          <li>
            <button onClick={handleEdit}>Edit</button>
          </li>
          <li>
            <button onClick={handleDeleteById}>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TransactionDetail;
