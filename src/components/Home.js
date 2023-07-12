import React from "react";
import "./Home.css"
import piggybank from "./image.png"

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Budget App!</h1>
      <div className="image">
        <img src={piggybank} alt="" />
      </div>
      
    </div>
  );
}

export default Home;
