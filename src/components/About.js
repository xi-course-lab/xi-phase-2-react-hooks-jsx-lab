import React from "react";
import { image } from "../data/data";
import {name, city} from "../data/data";

function showName (data) {
  return (
    <div>
      <h3>the name we found in database is: {data}, is it you? </h3>
    </div>
  )
};

function verifyCity(input) {
  const op = input == city;

  return (
    <div>
      <p> we realise: {op ? `you are from ${input}` : "sorry, data not matching" } </p>
    </div>
  )
};


function About() {
  return (
    
    <div id="about">
      <h2>About Me</h2>
      <section>{showName(name)}</section>
      {/* <p>some thing coming....</p>  */}
      <section> {verifyCity("London")}</section>
      <section> {verifyCity("New York")}</section>
      <section> {verifyCity("NewYork")}</section>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
