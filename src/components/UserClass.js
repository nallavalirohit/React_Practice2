import React from "react";
import Dummy from "./Dummy";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Donald",
                location: "New York"
            }
        }
        // console.log(this.props.name + "Child Constructor");
    }
    async componentDidMount(){
        // console.log(this.props.name + "Child componentDidMount");
        const data = await fetch("https://api.github.com/users/nallavalirohit");
        const jsonData = await data.json();
        console.log(jsonData);

        this.setState({
            userInfo: jsonData
        })

        // this.timer = setInterval(()=>{
        //     console.log("Component will update");
        // }, 1000);
    }

    componentDidUpdate(){
        console.log(this.props.name + "component did update");
    }

    componentWillUnmount(){
        // console.log(this.props.name + "Component will unmount called");
        // clearInterval(this.timer); //performing setInterval clean up here
    }

    render(){
        //we can also destructure the props object and extract the values in it.
        const {name, location, avatar_url } = this.state.userInfo;
        // console.log(this.props.name + "Child render");
        return (
            <div className="user-card">
                <img src="https://avatars.githubusercontent.com/u/34661824?v=4"></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: @WizkidRohit</h3>
            </div>
        );
    }
}

export default UserClass;