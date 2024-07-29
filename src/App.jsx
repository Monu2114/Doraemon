import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div class="header">
        <h1>ドラえもん</h1>
        <Link to="cart">Cart</Link>
        <Link to="Shop">Shop</Link>
      </div>
    </div>
  );
}

export default App;
