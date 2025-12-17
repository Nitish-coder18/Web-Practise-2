import React, { useState } from 'react'

const input = () => {

  const submitted = (e) => {
    e.preventDefault();
    setupdate(value);

    setvalue('');
  }


  const [value, setvalue] = useState('')
  const [update, setupdate] = useState('')

  return (
    <div>
      <form onSubmit={(e) => {submitted(e);}}>
        <input type="text" className='border'
        value={value}
        onChange={(e) => {
           setvalue(e.target.value);
        }}
        />
        <button >Submit</button>
        <h1>{update}</h1>
      </form>
    </div>
  )
}

export default input
