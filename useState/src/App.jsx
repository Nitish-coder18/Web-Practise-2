import { useState } from 'react'


const App = () => {

  const [first, setfirst] = useState(0)

function increasing() {
  setfirst(first+1);
}

function decreasing() {
  setfirst(first-1);
}
function jumpedfive() {
  setfirst(first+5);
}

  return (
    <div>
      <h1>abhi {first} baar click kiya hai</h1>
      <button onClick={increasing}>Increase</button> <br />
      <button onClick={decreasing}>Decrease</button> <br />
      <button onClick={jumpedfive}>jump by 5</button>
    </div>
  )
}

export default App
