import React,{useState} from 'react'

const Attend = () => {
    const[count, setcount] = useState("")
    // const[count1, setcount1] = useState("")
    const[Count, setCount] = useState([])
    const addup = () => {
        setCount(...Count, count)
        setCount(count)
    }
    return (
        <div>
          <input
          placeholder= "whats your name"
          value = {count}
          onChange = {(e) => {
              setcount(e.target.value)
          } } 
          /> 

          {/* <input
          placeholder= "whats your name"
          value = {count1}
          onChange = {(e) => {
              setcount1(e.target.value)
          } } 
          /> */}
          <div>
              <button 
              onClick={() => {
                addup()
              }}
              >submit
              </button>
              </div> 
              <div>
                  {Count}
              </div> 
        </div>
    )
}

export default Attend
