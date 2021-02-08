import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightTheme: true,
      light: {
        bg: "#fff",
        green: "rgb(255,118,14)",
        orange: "rgb(255,118,14)",
        bdr: "1px solid rgba(255,255,255,.1)",
        btnBg: "rgb(255,118,14)",
        fontColor: "#111",
      },
      dark: {
        bg: "#111111",
        fontColor: "rgba(255, 255, 255, 0.8)",
        green: "rgb(126,35,255)",
        orange: "rgb(255,118,14)",
        btnBg: "rgba(255,255,255,.1)",
        bdr: "1px solid rgba(255,255,255,.1)",
      },
    };
  }
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
