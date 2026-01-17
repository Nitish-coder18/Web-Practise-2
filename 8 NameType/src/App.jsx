import React, { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState('')
  const [Submit, setSubmit] = useState(second)

  const SubmitEvent = (e) => {
    e.preventDefault()
    setSubmit(Num)

    setNum('')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        SubmitEvent(e);
      }}>
        <input 
        value={Num}
        onChange={(e) => {
          setNum(e.target.value)
        }}
        type="text" placeholder='type Your Name'/>
        <input type="submit" />
      </form>
      <h1>hello {Submit} , Kaise ho..!!</h1>
    </div>
  )
}

export default App
