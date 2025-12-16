const App = () => {



const Submit = (e) => {
  e.preventDefault();
  console.log (e);
}

  return (
    <div>
      <form onSubmit={(e) => {
        Submit(e);
      }}>
        <input type="text" placeholder='Type Your Name..' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
