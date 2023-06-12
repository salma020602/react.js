import {useState} from "react"
import ShowCount from "./components/ShowCount"
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
    <ShowCount count={count}/>
    <button onClick= {decrease} > Decrease  </button>
    </div>
  )


}

export default App;