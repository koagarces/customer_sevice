// import react from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";
import "../App.css";
import { useParams } from "react-router-dom";

const ReviewActions = (props) => {
  return (
    <div className="this">
      <h1>{props.review}</h1>
      <ul></ul>
    </div>
  );
};
export default ReviewActions;
