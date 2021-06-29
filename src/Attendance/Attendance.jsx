import React, {useState, useEffect} from "react"
import { setInputSelection } from "../../../beginners/node_modules/rc-mentions/lib/util"
import moment from "moment"

const Attendance =()=>{
    const[name, setName] = useState("")
    const[number, setNumber] = useState("")

    const[list, setList] = useState([{id:1,name:"Stella", number:"009298820", time:Date.now()}])

    const addList = () =>{
        const id= list.length + 1
        const add = {id,name, number,time:Date.now()}
        setList([...list, add])
        setName("")
        setNumber("")
    }

    const removeList = (id)=>{
        const removeNow = list.filter((remove)=>(remove.id !== id))
        setList(removeNow)
    }
    useEffect(()=>{
        const view=JSON.parse(localStorage.getItem("local"))
        setList(view)
    },[])
    useEffect(()=>{
        localStorage.setItem("local", JSON.stringify(list))
    },[list])
    return(
        <div>
            <div style={{
                width:"100vw",
                height:"100vh",
                backgroundColor:"blue",
            }}>
                <div style={{
                    width:"100vw",
                    height:"70px",
                    backgroundColor:"lavender"
                }}>
                    <div>Logo</div>
                    <div>codelab attendance form</div>
                </div>
                <div style={{
                    display:"flex",
                }}>
                <div style={{
                    width:"50vw",
                    height:"90vh",
                    backgroundColor:"pink",
                }}>
                    <input
                    style={{
                        width:"280px",
                        margin:"10px"
                    }}
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    />
                    <br/>
                    <input
                    style={{
                        width:"280px",
                        margin:"10px"
                    }}
                    placeholder="Enter your number"
                    value={number}
                    onChange={(e)=>{
                        setNumber(e.target.value)
                    }}
                    /><br/>
                    <button
                    onClick={
                        ()=>{
                            addList()
                        }
                    }
                    style={{
                        width:"80px",
                        margin:"10px"
                    }}>add</button>

                </div>

                <div style={{
                    width:"50vw",
                    height:"90vh",
                    backgroundColor:"pink",
                    borderLeft:"1px solid gray"
                    
                }}> 
                <div>{list.map(({id,name,number,time})=>(
                    <div key={id}
                    style={{
                        display:"flex",
                        justifyContent:"space-around",
                    }}>
                        <div>{id}.</div>
                        <div>{name}</div>
                        <div>{number}</div>
                        <div>{moment(time).fromNow()}</div>
                        <button
                        onClick={()=>{
                            removeList(id)
                        }}>remove</button>
                    </div>

                ))
                }</div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Attendance