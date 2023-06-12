import {useState} from "react"

function App()
{
  const [count,setCount] = useState(0)

  const increase = () => {
    setCount(count+1)
    console.log(count)
  }

  const decrease = () => {
    setCount(count-1)
    console.log(count)
  }

  return (
    //jsx
     <div>
    <button OnClick = {increase} > Increase </ button >
    <h1> {count} </h1>
    <button onClick= {decrease} > Decrease  </button>
     </div>

  )
}

export default App;