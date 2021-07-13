import React, { Component } from "react";
import { CardList } from "./components/card-list";
import { SearchBox } from "./components/search-box";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  onSearchChanged = (event) => {
    this.setState({ searchField: event.target.value });
    console.log(this.state.searchField);
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((item) =>
      item.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="h1"> Роботуудын хайлт: </h1>
        <SearchBox onSearch={this.onSearchChanged} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
