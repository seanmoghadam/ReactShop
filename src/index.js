// Just for presentational purpose
// import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App/>, document.getElementById("root"));
































/*
//Callback example

function serverRequest(query, callback){
  setTimeout(function(){
    const response = query + "full!";
    callback(response);
  },5000);
}

export const getResults = (results) => {
  console.log("Response from the server: " + results);
};

serverRequest("The glass is half ", getResults);*/
