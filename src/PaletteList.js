import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import "emoji-mart/css/emoji-mart.css";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import preval from "preval.macro";
import { version } from "../package.json";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";

const PaletteList = props => {
  const { palettes, classes, loadSeedPalettes } = props;
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deletingId, setDeletingId] = useState("");

  const openDialog = id => {
    setOpenDeleteDialog(true);
    setDeletingId(id);
  };

  const closeDialog = () => {
    setOpenDeleteDialog(false);
    setDeletingId("");
  };

  const goToPalette = id => {
    props.history.push(`/palette/${id}`);
  };

  const handleDelete = () => {
    props.deletePalette(deletingId);
    closeDialog();
  };

  const timeStamp = () => preval`
    const dateFormat = require("dateformat");
    module.exports = dateFormat(new Date(), "ddd mmm/dd/yyyy hh:MM TT");`;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <div className={classes.logodeploy}>
            <h1 className={classes.heading}>React Colors</h1>
          </div>
          <div>
            <Button onClick={loadSeedPalettes}>Load Seed Palettes</Button>
            <Button>
              <Link className={classes.seedbutton} to="/palette/new">
                Create Palette
              </Link>
            </Button>
          </div>
        </nav>
        <h6 className={classes.deploy}>
          {`v${version} - deployed on: ${timeStamp()}`}
        </h6>
        <TransitionGroup className={classes.palettes}>
          {palettes.map(palette => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                {...palette}
                goToPalette={goToPalette}
                openDialog={openDialog}
                key={palette.id}
                id={palette.id}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog
        open={openDeleteDialog}
        aria-labelledby="delete-dialog-title"
        onClose={closeDialog}
      >
        <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
