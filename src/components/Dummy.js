import React from "react";


export default class Dummy extends React.Component{
    constructor(props){
        super(props)
        console.log("granchild constructor");
    }

    componentDidMount(){
        console.log("grandchild componentDidMount");
    }

    render(){
        console.log("grandchild render");
    }
}