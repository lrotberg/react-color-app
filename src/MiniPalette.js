import React, { memo } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

const MiniPalette = memo(props => {
  const { id, classes, paletteName, emoji, colors, openDialog, goToPalette } =
    props;
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  const deletePalette = evt => {
    evt.stopPropagation();
    openDialog(id);
  };

  const handleClick = () => {
    goToPalette(id);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
});

export default withStyles(styles)(MiniPalette);
