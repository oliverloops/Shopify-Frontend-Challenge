import React from "react";
import { SiGithub } from "react-icons/si";
import "./elements.css";
import shopify_logo from "../../assets/images/shopify_logo.png";

export default function Footer() {
  return (
    <footer>
      <span>
        Sponsored by:&nbsp;
        <img src={shopify_logo} alt="Shopify Logo" />
      </span>
      <small>©The Shoppies, Inc. 2021</small>
      <a href="https://github.com/oliverloops/Shopify-Frontend-Challenge">
        Link to GitHub repo
        <SiGithub size={20} />
      </a>
      <div className="stripe"></div>
    </footer>
  );
}
