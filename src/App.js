import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Transactions from "./components/Transactions";
import TransactionsDetail from "./components/TransactionDetail";
import EditForm from "./components/EditForm";
import NewForm from "./components/NewForm";



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactions/:id" element={<TransactionsDetail />} />
        <Route path="/transactions/:id/edit" element={<EditForm />} />
        <Route path="/transactions/new" element={<NewForm />} />
      </Routes>
    </Router>
  );
}

export default App;
