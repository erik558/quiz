import React from "react";

function Cikl() {
 const arr = ["Item1", "Item2", "Item3", "Item4", "Item5"];
  
  
  return (
   
    <div >
      {arr.map((el) => (
        
         <p>{el}</p>
        
      ))}
    </div>
  );
}

export default Cikl;
