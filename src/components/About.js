import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("Parent constructor");
    }
    componentDidMount(){
        // console.log("Parent componentDidMount");
    }
    render(){
        // console.log("Parent render");
        return(
            <div>
                <h1>About Page</h1>
                <User name={"Rohit Nallavali(functional)"}/>
                {/* <UserClass name={"First"} location={"Jacksonville, Florida"}/> */}
            </div>
        );
    }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About Page</h1>
//             <User name={"Rohit Nallavali(functional)"}/>
//             <UserClass name={"Rohit Kumar(class)"} location={"Jacksonville, Florida"}/>
//         </div>
//     );
// }

export default About;