import sizes from "./sizes";
import bg from "./bg.svg";
const styles = {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#160599",
    backgroundImage: `url(${bg})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    overflow: "scroll"
  },
  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      textDecoration: "none",
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem"
    }
  },
  heading: {
    fontSize: "2rem"
  }
};

export default styles;
