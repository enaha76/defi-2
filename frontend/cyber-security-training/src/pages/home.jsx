import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function Home() {
  return (
    <div>
      <h1>Welcome to Cybersecurity Training!</h1>
      <p>Learn how to protect yourself from cyber threats!</p>
      <Link to="/dashboard">
        <Button variant="contained" color="primary">
          Start Learning
        </Button>
      </Link>
    </div>
  );
}

export default Home;
