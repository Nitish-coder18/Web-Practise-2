
const Containor = (Props) => {
  return (
    <div className="main">
      <div className="part1">
        <h1>{Props.h1}</h1>
        <p>{Props.para}</p>
        <span>
            <button>{Props.b1}</button>
            <button>{Props.b2}</button>
            <button>{Props.b3}</button>
        </span>
      </div>

      <div className="part2">
        <h3>{Props.h3}</h3>
        <button>{Props.ok}</button>
      </div>
    </div>
  )
}

export default Containor
