import React, { useState } from 'react'

const App = () => {
  const [Value, setValue] = useState('')
  const [details, setDetails] = useState('')

  const [Use, setUse] = useState([])

  function SubmitHandler (e) {
    e.preventDefault();

    const Data = [...Use];
    Data.push({Value, details})
    setUse(Data)

    console.log(Data);

    setValue('');
    setDetails('');
  }

  return (
    <div className='h-screen bg-black text-white'>
     
      <div className='flex flex-col lg:flex-row' >
      <form 
      onSubmit={(e) => { SubmitHandler(e) }}
      className='flex flex-col flex-wrap gap-5 p-2 w-1/2 '>
       <h1 className='font-bold'>Enter Notes Details</h1>
        <input type="text" placeholder='Enter topic' value={Value}
        onChange={(e) => {setValue(e.target.value) }}
        className='border rounded-sm border-gray-700 w-2/3 h-10 p-2'
        />
        <textarea type="text" placeholder='Enter Details' value={details}
        onChange={(e) => { setDetails(e.target.value)} }
        className='border rounded-sm border-gray-700 w-2/3 h-30 p-2'
        />
        <button className='border rounded-sm border-gray-400 w-2/3 h-8 p-2'>Submit</button>
      </form>
      <div className='mx-2 p-2'>
        <h1 className='font-bold'>Notes Details</h1>
        <div className='flex flex-wrap gap-4 mt-3'>
        
         {Use.map(function (elem, idx) {
          return <div key={idx} className='bg-white text-black h-32 p-1 w-25 rounded-2xl'>
            <h1 className='text-black'>{elem.Value}</h1>
            
          </div> 
         }
        )} 
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
