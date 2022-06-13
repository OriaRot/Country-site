import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Layout from "./components/Layout";
import Main from "./components/Main";

function App() {
  const [list, setList] = useState([]);
  const [searchList, setSearchList] = useState(list);
  const [cnt, setCnt] = useState(0);
  const [input, setInput] = useState("");
  const clickToSearch = () => {
    if (input === "") {
      setSearchList(list);
      console.log(list);
      return;
    }
    setSearchList(
      list.filter((i) =>
        i.name.common.toLocaleLowerCase().startsWith(input.toLocaleLowerCase())
      )
    );
  };

  const getInfo = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setSearchList(list);
    }
  };

  useEffect(() => {
    setCnt(searchList.length);
  }, [searchList]);

  useEffect(() => {
    setSearchList(list);
  }, [list]);

  useEffect(() => {
    getCountries();
    console.log(list);
  }, []);
  function getCountries() {
    axios.get("https://restcountries.com/v3.1/all").then((result) => {
      setList(result.data);
      console.log(result.data);
    });
  }
  if (list.length === 0) {
    return <h1 className="load">Loading...</h1>;
  }
  return (
    <div>
      <Layout data={list} click={clickToSearch} change={getInfo} cnt={cnt} />
      <Main data={searchList} />
    </div>
  );
}

export default App;
