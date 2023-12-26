import { useEffect, useState } from "react";
const User = ({name}) =>{
    const[count, setCount] = useState(0);


    useEffect(() => {
        let timer = setInterval(()=>{
            console.log("User use effect");
        },1000);
        console.log("User useEffect");

        return ()=>{ //this return is called when unmounting the component. Used as a cleanup.
            clearInterval(timer);
            console.log("useEffect returned");
        }
    },[])

    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <button onClick={()=> {
                setCount(count+1);
                console.log(count);
            }}>click</button>
            <h2>Name: {name}</h2>
            <h3>Location: Jacksonville</h3>
            <h3>Contact: @WizkidRohit</h3>
        </div>
    );
}

export default User;