import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditForm.css";

function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState({
    item_name: "",
    date: "",
    from: "",
    amount: "",
    category: "",
  });

  useEffect(() => {
    fetchTransactionDataId();
  }, []);

  async function fetchTransactionDataId() {
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

  function handleTextChange(event) {
    setTransactions({
      ...transactions,
      [event.target.id]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      let url =
        process.env.NODE_ENV === "production"
          ? `https://budget-app-backend-cawn.onrender.com/transactions/${id}`
          : `http://localhost:3001/transactions/${id}`;

      let result = await axios.put(url, transactions);

      const { transactions: newTransaction } = result.data;

      alert("Updated Successfully!");

      navigate(`/transactions/${id}`);

      setTransactions(newTransaction);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className="budget-container-edit">Edit</h1>
      <div className="budget-container-edit-form">
        <form onSubmit={handleSubmit}>
          <div className="budget-edit-input">
            <label htmlFor="item_name">
              <span style={{ fontWeight: "bold" }}>Item Name</span>
            </label>
            <input
              type="text"
              id="item_name"
              name="item_name"
              value={transactions.item_name}
              onChange={handleTextChange}
            />
          </div>

          <div className="budget-edit-input">
            <label htmlFor="date">
              <span style={{ fontWeight: "bold" }}>Date</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={transactions.date}
              onChange={handleTextChange}
            />
          </div>

          <div className="budget-edit-input">
            <label htmlFor="from">
              <span style={{ fontWeight: "bold" }}>From</span>
            </label>
            <input
              type="text"
              id="from"
              name="from"
              value={transactions.from}
              onChange={handleTextChange}
            />
          </div>

          <div className="budget-edit-input">
            <label htmlFor="amount">
              <span style={{ fontWeight: "bold" }}>Amount</span>
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={transactions.amount}
              onChange={handleTextChange}
            />
          </div>

          <div className="budget-edit-input">
            <label htmlFor="category">
              <span style={{ fontWeight: "bold" }}>Category</span>
            </label>
            <input
              type="type"
              id="category"
              name="category"
              value={transactions.category}
              onChange={handleTextChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
