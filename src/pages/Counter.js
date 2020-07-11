import React, { useState } from "react";
import useCounter from "./useCounter";

//======================KOMPONEN COUNTER MENGGUNAKAN HOOKS DAN CUSTOM HOOKS=======================

export function Counter() {
  const [state, setState] = useState({
    reset: false,
    reaksi: false
  });

  const [nilai, handleTambah, handleKurang] = useCounter(0);

  const handleSubscribe = () => {
    setState({
      ...state,
      reaksi: !state.reaksi
    });
  };

  return (
    <div>
      <center><h3>Counter</h3>
      <h6>befungsi untuk melakukan penghitungan angka secara berurutan baik itu perhitungan maju ataupun perhitungan mundur</h6>
      <br /><br />
      <p>
        <button onClick={handleSubscribe}>
          {state.reaksi ? "Suka" : "Tidak suka"}
        </button>
      </p>
      <p>
        <button onClick={handleTambah}> Tambah </button>
        <span> {nilai} </span>
        <button onClick={handleKurang}> Kurangi </button>
      </p>
      </center>
    </div>
  );
}
