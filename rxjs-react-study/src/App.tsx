import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { AsyncSubject, fromEvent, Observable, of, from } from "rxjs";
import axios, { AxiosResponse } from "axios";
axios.defaults.baseURL = "http://qiita.com/api/v2";

function getQiitaItems(): Observable<AxiosResponse> {
  return from(axios.get("/items?per_page=10"));
}

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);

  const loadData = () => {
    setCount(count + 1);
    getQiitaItems().subscribe((data) => {
      setData(data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="App">
      <header
        className="App-header"
        onClick={() => {
          loadData();
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data?.data[count]?.body}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
