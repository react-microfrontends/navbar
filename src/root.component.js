import React from "react";
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
    if (this.state.hasError) {
      return (
        <div className="h-16 flex items-center justify-between px-6 bg-danger">
          Error
        </div>
      );
    } else {
      return (
        <div className="h-16 flex items-center justify-between px-6 bg-primary">
          <div className="flex items-center justify-between">
            {links.map(link => {
              return (
                <Link
                  key={link.href}
                  className="p-6 text-contrast text-secondary:hover"
                  to={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center justify-between">
            <button className="mr-4" onClick={switchTheme}>
              Switch theme
            </button>
            <a
              href="https://github.com/react-microfrontends"
              className="externalLink"
            >
              Github project
            </a>
          </div>
        </div>
      );
    }
  }
}

function switchTheme() {
  const computed = getComputedStyle(document.documentElement);
  const imperialPrimary = computed
    .getPropertyValue("--imperial-primary")
    .trim();
  const currentPrimary = computed.getPropertyValue("--color-primary").trim();
  if (imperialPrimary === currentPrimary) {
    setRebelTheme();
  } else {
    setImperialTheme();
  }
}

function setRebelTheme() {
  document.documentElement.style.setProperty(
    "--color-primary",
    "var(--rebel-primary)"
  );
  document.documentElement.style.setProperty(
    "--color-secondary",
    "var(--rebel-red)"
  );
  document.documentElement.style.setProperty(
    "--color-contrast",
    "var(--rebel-white)"
  );
  document.documentElement.style.setProperty(
    "--color-success",
    "var(--rebel-green)"
  );
  document.documentElement.style.setProperty(
    "--color-danger",
    "var(--imperial-primary)"
  );
  document.documentElement.style.setProperty(
    "--color-warning",
    "var(--rebel-yellow)"
  );
  document.documentElement.style.setProperty(
    "--color-info",
    "var(--rebel-blue)"
  );
  document.documentElement.style.setProperty(
    "--background",
    "var(--rebel-white)"
  );
}

function setImperialTheme() {
  document.documentElement.style.setProperty(
    "--color-primary",
    "var(--imperial-primary)"
  );
  document.documentElement.style.setProperty(
    "--color-secondary",
    "var(--imperial-red)"
  );
  document.documentElement.style.setProperty(
    "--color-contrast",
    "var(--imperial-white)"
  );
  document.documentElement.style.setProperty(
    "--color-danger",
    "var(--rebel-primary)"
  );
  document.documentElement.style.setProperty(
    "--color-success",
    "var(--imperial-green)"
  );
  document.documentElement.style.setProperty(
    "--color-warning",
    "var(--imperial-yellow)"
  );
  document.documentElement.style.setProperty(
    "--color-info",
    "var(--imperial-blue)"
  );
  document.documentElement.style.setProperty(
    "--background",
    "var(--imperial-black)"
  );
}
