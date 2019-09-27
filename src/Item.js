import React from "react";

import "./App.css";

class Item extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount = async () => {
    const res = await fetch(`${this.props.mainPokemon}`);
    const data = await res.json();
    console.log(data);
    this.setState({ data: data });
  };



  render() {
    
   return <p>{this.props.mainPokemon}</p> 
   
  }
}

export default Item;