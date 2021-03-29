import React, { useEffect, useState } from "react";
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
  if ((s.includes("+") && s.includes("-")) || s.includes("-")) {
    let newArr = [];
    arr = s.split("-");

    newArr = arr.join("+-");
    const newest = newArr.split("+");

    const arrReadyForMultiple = newest.map((x) => multiple(x));

    const result = arrReadyForMultiple.reduce((acc, value) => value + acc, 0);
    return result;
  } else if (s.includes("+")) {
    arr = s.split("+");

    return arr.reduce(
      (acc, value) => parseInt(multiple(value)) + parseInt(acc),
      0
    );
  }
}

function addDevide(s) {
  if ((s.includes("+") && s.includes("-")) || s.includes("-")) {
    let newArr = [];
    const arr = s.split("-");
    newArr = arr.join("+-");

    const newest = newArr.split("+");

    const arrReadyForMultiple = newest.map((x) => devide(x));

    const result = arrReadyForMultiple.reduce((acc, value) => value + acc, 0);
    return result;
  } else if (s.includes("+")) {
    const arr = s.split("+");

    return arr.reduce((acc, value) => devide(value) + acc, 0);
  }
}

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // setResult(0);

    if (
      value.slice(-1) === "+" ||
      value.slice(-1) === "-" ||
      value.slice(-1) === "*" ||
      value.slice(-1) === ""
    ) {
      return;
    } else {
      if ((value.includes("+") || value.includes("-")) && value.includes("*")) {
        setResult(addMult(value));
        console.log("admult", addMult(value));
      } else if (
        (value.includes("+") || value.includes("-")) &&
        value.includes("/")
      ) {
        console.log(value);
        setResult(addDevide(value));
      } else if (value.includes("+") || value.includes("-")) {
        console.log(value);
        setResult(add(value));
      } else if (value.includes("*")) {
        console.log(value);
        setResult(multiple(value));
      } else if (value.includes("/")) {
        console.log(value);
        setResult(devide(value));
      }
    }
  }, [value]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <p>{result}</p>
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
