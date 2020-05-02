import React from "react";

// import API from "../utils/API"


export default class FetchAutoSearch extends React.Component {
    state = {
      loading: true,
      search: null
    };

async componentDidMount() {
    const url = "https://api.spoonacular.com/food/ingredients/autocomplete?query=appl&number=5&apiKey=f70f7121e1804cc1b79a88af0f50635a";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    this.setState({ search: data[0], loading: false });
    }

handleInputChange = (event) => {
        event.preventDefault();
        this.setState({ search: event.target.value});
      };


render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.search) {
      return <div>didn't get a search</div>;
    }

    return (
      <div>
        <div>{this.state.search.name}</div>
        <div>{this.state.search.aisle}</div>
        {/* <div>{this.state.search.name.last}</div> */}
        <img src={this.state.search.image} />
      </div>
    );
  }
}
