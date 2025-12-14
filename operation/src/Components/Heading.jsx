import React from 'react'

const Heading = () => {


let count = 0;
function change(e) {
  count++;
  if(count%2 === 0)
  {
  console.log(`even no. pe click aaya hai joki = ${count} hai`);
  document.getElementById("heading").innerText = "No. even click kiya hai";
  } else {
  console.log(`odd no. pe click aaya hai joki = ${count} hai`);
  document.getElementById("heading").innerText = "No. odd click kiya hai";
  }
 }

  return (
    <>
    <div>
    <h1 id='heading'> hii Nitish </h1>
    <button onClick={change}>change</button>
    </div>
</>
  )
}

export default Heading

