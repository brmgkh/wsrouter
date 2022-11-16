import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
};

export default About;
