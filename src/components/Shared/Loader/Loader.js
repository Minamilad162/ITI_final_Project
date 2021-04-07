import React, { useState, useEffect } from "react";
import "./Loader.scss";

export default function Loader() {
  return (
    <div id="loader">
      <div className="d-flex justify-content-around bg" />
      <h1 className="title position-absolute">Netflix</h1>
    </div>
  );
}