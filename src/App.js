import React, { useState } from "react";
import styles from "./styles.module.css";

function add(s) {
  return (s.replace(/\s/g, "").match(/[+\-]?([0-9\.]+)/g) || []).reduce(
    function (sum, value) {
      return parseFloat(sum) + parseFloat(value);
    }
  );
}

function multiple(s) {
  return (s.replace(/\s/g, "").match(/[+\-]?([0-9\.]+)/g) || []).reduce(
    function (sum, value) {
      return parseFloat(sum) * parseFloat(value);
    }
  );
}

function devide(s) {
  return (s.replace(/\s/g, "").match(/[+\-]?([0-9\.]+)/g) || []).reduce(
    function (sum, value) {
      return parseFloat(sum) / parseFloat(value);
    }
  );
}

function addMult(s) {
  let arr = [];

  if (s.includes("+")) {
    arr = s.split("+");
    return arr.reduce(
      (acc, value) => parseInt(multiple(value)) + parseInt(acc),
      0
    );
  } else if (s.includes("-")) {
    arr = s.split("-");
    const newArr = arr.join("+-");
    const newest = newArr.split("+");
    const ddd = newest.map((x) => multiple(x));

    console.log("arr", ddd);
    const smth = ddd.reduce((acc, value) => value + acc, 0);
    console.log("smth", smth);
  }
}

function App() {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // const a = value.split("+");
    // console.log("a", a);
    // const newA = a.reduce(
    //   (acc, value) => parseInt(multiple(value)) + parseInt(acc),
    //   0
    // );

    // console.log("1222", newA);

    if ((value.includes("+") || value.includes("-")) && value.includes("*")) {
      console.log("addmult", addMult(value));
    } else if (value.includes("+") || value.includes("-")) {
      console.log("add", add(value));
    } else if (value.includes("*")) {
      console.log("mult", multiple(value));
    } else if (value.includes("/")) {
      console.log("dev", devide(value));
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          AC
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          X
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          %
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          /
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          7
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          8
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          9
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          *
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          4
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          5
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          6
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          -
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          1
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          2
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          3
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          +
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          .
        </div>
        <div
          onClick={(e) => setValue(value + e.target.innerText)}
          className={styles.divButton}
        >
          0
        </div>
        <button>=</button>
      </form>
    </div>
  );
}

export default App;
