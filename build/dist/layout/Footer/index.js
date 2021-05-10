import React from "../../../_snowpack/pkg/react.js";
import {SiGithub} from "../../../_snowpack/pkg/react-icons/si.js";
import "./elements.css.proxy.js";
import shopify_logo from "../../assets/images/shopify_logo.png.proxy.js";
export default function Footer() {
  return /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("span", null, "Sponsored by:\xA0", /* @__PURE__ */ React.createElement("img", {
    src: shopify_logo,
    alt: "Shopify Logo"
  })), /* @__PURE__ */ React.createElement("small", null, "\xA9The Shoppies, Inc. 2021"), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/oliverloops/Shopify-Frontend-Challenge"
  }, "Link to GitHub repo", /* @__PURE__ */ React.createElement(SiGithub, {
    size: 20
  })), /* @__PURE__ */ React.createElement("div", {
    className: "stripe"
  }));
}
