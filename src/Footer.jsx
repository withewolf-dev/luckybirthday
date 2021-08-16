import React from "react";
import "./App.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IconButton } from "@material-ui/core";

export default function Footer() {
  return (
    <footer className="footer">
      <ul>
        <IconButton href="https://twitter.com/unspokenkash">
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://github.com/withewolf-dev">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/gitartha-kashyap-bb6814173">
          <LinkedInIcon />
        </IconButton>
      </ul>
    </footer>
  );
}
