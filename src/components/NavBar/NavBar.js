import React from "react";

import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: ""
    };
  }

  onChangeHandlerTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  onChangeHandlerYear = (e) => {
    this.setState({ year: e.target.value });
  };

  onClickHandler = () => {
    const { title, year } = this.state;
    this.props.dataUpdate(title, year);
  };

  render() {
    return (
      <div className="nav">
        <h1>OMDb</h1>
        <div className="search">
          <input onChange={this.onChangeHandlerYear} type="text" size="1" placeholder="Year"></input>
          <input onChange={this.onChangeHandlerTitle} type="text" size="12" placeholder="Title"></input>
          <FontAwesomeIcon onClick={this.onClickHandler} className="search-icon" size="lg" icon={faSearch} />
        </div>
      </div>
    );
  }
}
