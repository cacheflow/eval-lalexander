import React, { Component, Fragment } from "react";
import Header from "../app/components/Header/index";
import Lists from "../app/components/Lists/index";
import Container from "../app/components/Container/index";
import Input from "../app/components/Input/index";
import Label from "../app/components/Label/index";
import throttle from './helpers/index';

const names = [
  "Yasujiro",
  "F.W.",
  "Sergei",
  "Carl",
  "Howard",
  "Luis",
  "Martin",
  "Billy",
  "Charles",
  "Kar-Wai",
  "Jean-Luc",
  "Ingmar",
  "Francis",
  "Akira",
  "Jean",
  "John",
  "Federico",
  "Stanley",
  "Alfred",
  "Orson",
  "Alexander",
  "Frank",
  "Ingrid",
  "Horatio",
  "Akiva",
  "Luciano",
  "George",
  "Stacey",
  "Horton",
  "Carrie",
  "Alfonse",
  "Yasmin"
].map(name => {
  return {
    name,
    checked: false
  };
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNames: names,
      sortSelectedNames: false,
      searchedName: ""
    };
  }

  renderHeaderListItems = () => {
    return [
      "Create a git branch for your changes.",
      "Review sample code and refactor to at least two components: name list component and selected names display component",
      'Add functionality to toggle selected names and display below in "Selected Names" section.',
      "Add filter field above checkbox list and filter visible options based on matching characters",
      "Review sample code and refactor to improve code quality"
    ];
  };

  handleToggleName = name => {
    const { selectedNames } = this.state;
    const newSelectedNames = selectedNames.map(selectedName => {
      if (selectedName.name === name) {
        selectedName.checked = !selectedName.checked;
      }
      return selectedName;
    });
    this.setState({
      selectedNames: newSelectedNames
    });
  };

  handleSearch = throttle((e) => {
    this.setState({
      selectedNames: this.filterNamesOnSearch(e),
      searchedName: e
    });
  });

  filterNamesOnSearch = data => {
    const content = new RegExp(data, "ig");
    const newSelectedNames = names.filter(selectedName => {
      return content.test(selectedName.name);
    });
    return newSelectedNames;
  };

  sortAlphabetically = () => {
    this.setState({ sortSelectedNames: !this.state.sortSelectedNames }, () => {
      if (this.state.sortSelectedNames) {
        const sortedSelectedNames = this.state.selectedNames
          .slice(0, names.length - 1)
          .sort((a, b) => {
            return a.name < b.name ? -1 : 1;
          });
        this.setState({
          selectedNames: sortedSelectedNames
        });
      } else {
        this.setState({
          selectedNames: names
        });
      }
    });
  };

  renderNameLists = (predicate = true) => {
    const selectedNames = this.state.selectedNames.filter(selectedName => {
      return selectedName.checked === predicate;
    });
    return selectedNames.map((data, i) => {
      return (
        <Fragment>
          <Input
            type={"checkbox"}
            defaultChecked={predicate}
            onChange={e => {}}
            dataName={data.name}
            key={i + 1}
            id={`dir-${i + 1}`}
            onClick={() => this.handleToggleName(data.name)}
          />
          <Label
            htmlFor={`dir-${i + 1}`}
            onClick={() => this.handleToggleName(data.name)}
          >
            {data.name}
          </Label>
        </Fragment>
      );
    });
  };

  render() {
    return (
      <Container fontFamily={"Roboto"} textAlign={"center"}>
        <Container fontFamily={"Roboto"} textAlign={"center"}>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
            rel="stylesheet"
          />
          <Header>
            <p>Sample code: List of first names selection</p>
            <Lists
              tag={"ol"}
              textAlign={"left"}
              fontSize={"12px"}
              flexDirection={"column"}
              data={this.renderHeaderListItems()}
            />
          </Header>
          <Input
            type={"input"}
            width={"50%"}
            onChange={e => this.handleSearch(e.target.value)}
            onClick={() => {}}
          />
          <Input
            type={"checkbox"}
            placeholder={"Sort Alphabetically"}
            onClick={e => this.sortAlphabetically(e.target.value)}
          />
          <Label onClick={e => {}}>Sort Alphabetically</Label>
          <Container float={"left"} margin={"0 auto"} width={"50%"}>
            <h2>Names</h2>
            <Lists
              tag={"ul"}
              alignItems={"center"}
              listStyle={"none"}
              padding={"0"}
              flexDirection={"column"}
              data={this.renderNameLists(false)}
            />
          </Container>
        </Container>
        <Container float={"left"} width={"50%"}>
          <h2>Selected Names:</h2>
          <Lists
            tag={"ul"}
            alignItems={"center"}
            listStyle={"none"}
            padding={"0"}
            flexDirection={"column"}
            data={this.renderNameLists(true)}
          />
        </Container>
      </Container>
    );
  }
}

export default App;
