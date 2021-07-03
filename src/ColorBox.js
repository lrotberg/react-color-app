import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import classNames from "classnames";
import styles from "./styles/ColorBoxStyles";

const ColorBox = props => {
  const { name, background, moreUrl, showingFullPalette, classes } = props;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => setCopied(false), 1500);
  }, [copied]);

  const changeCopyState = () => {
    setCopied(true);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className={classes.colorBox}>
        <div
          style={{ background }}
          className={classNames(classes.copyOverlay, {
            [classes.showOverlay]: copied
          })}
        />
        <div
          className={classNames(classes.copyMsg, {
            [classes.showMsg]: copied
          })}
        >
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
