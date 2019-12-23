import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ format: evt.target.value });
    this.props.handleChange(evt.target.value);
  }
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>level:{level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
              trackStyle={[{ backgroundColor: "transparent" }]}
              handleStyle={[
                {
                  backgroundColor: "green",
                  outline: "none",
                  border: "2px solid green",
                  boxShadow: "none"
                }
              ]}
              activeDotStyle={{
                backgroundColor: "green",
                outline: "none",
                border: "2px solid green",
                boxShadow: "none"
              }}
            />
          </div>
        </div>
        <div className="secelct-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - </MenuItem>
            <MenuItem value="rgb">RGB - </MenuItem>
            <MenuItem value="rgba">RGBA - </MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}
