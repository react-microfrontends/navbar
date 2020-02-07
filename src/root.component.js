import React from "react";
import { Scoped } from "kremling";
import styles from "./root.krem.css";
import { links } from "./root.helper.js";
import { Link } from "@reach/router";

export default class Root extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <Scoped css={styles}>
        {this.state.hasError ? (
          <div className="root navBarHeight">Error</div>
        ) : (
          <div className="root navBarHeight">
            <div>
              {links.map(link => {
                return (
                  <Link
                    key={link.href}
                    className="primary-navigation-link"
                    to={link.href}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div>
              <a
                href="https://github.com/react-microfrontends"
                className="externalLink"
              >
                Github project
              </a>
            </div>
          </div>
        )}
      </Scoped>
    );
  }
}
