import React from "react";
import Item from "./Item";
import "./App.css";

class Request extends React.Component {
  constructor() {
    super();
    this.url = "https://pokeapi.co/api/v2/pokemon/";
    this.state = { data: [] };
  }

  componentDidMount = async () => {
    const res = await fetch(`${this.url}`);
    const data = await res.json();
    const pokemon = data.results.map(item => item.name);
    this.setState({ data: pokemon });
    console.log(this.state.data);
  };

  render() {
    const pokemonList = this.state.data.map((item, index) => {
      const urlMainPokemon = this.url + item;
      return (
        <li key={index}>
          {item}
          <Item mainPokemon={urlMainPokemon} />
        </li>
      );
    });

    return <ul>{pokemonList}</ul>;
  }
}

export default Request;
