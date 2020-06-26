import React from "react";
import { links } from "./root.helper.js";
import { Link } from "@reach/router";

export default function Root(props) {
  return (
    <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
      <div className="flex items-center justify-between">
        {links.map((link) => {
          return (
            <Link key={link.href} className="p-6" to={link.href}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
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
