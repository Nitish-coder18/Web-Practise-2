import { useState } from "react";


const App = () => {

  const [num, setnum] = useState('');
  const [submitted, setsubmitted] = useState('')

const Submit = (e) => {
  e.preventDefault();

  setsubmitted(num)

  setnum('');
}

  return (
    <div>
      <form onSubmit={(e) => {
        Submit(e);
      }}>
        <input
        type="text"
        placeholder='Type Your Name..' 
        value={num}
        onChange={(e) =>
          setnum(e.target.value)
          }
        />
        <button>Submit</button>
        <h1>Apne Apna Naam {submitted} btaya hai kya ye shi hai</h1>
      </form>
    </div>
  )
}

export default App
