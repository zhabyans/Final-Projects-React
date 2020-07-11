import { useState } from "react";

//===================================INI ADALAH CUSTOM HOOKS==================================

function useCounter(defaultValue) {
  const [state, setState] = useState(defaultValue);
  const handleTambah = () => {
    setState(currentState => currentState + 1);
  };

  const handleKurang = () => {
    setState(currentState => currentState - 1);
  };

  return [state, handleTambah, handleKurang];
}

export default useCounter;
