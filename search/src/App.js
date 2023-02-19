import React, { useState } from "react";

function App() {
  const list = ["Armen", "Karen", "Artur", "Poxos", "Armine", "Petros"];

  const [lists, setlists] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setlists(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setlists(filteredValues);
  };
  return (
    <div className="app">
      <div>
        <input  type="text" onChange={handleSearch} />
      </div>
      {lists && lists.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
}

export default App;


