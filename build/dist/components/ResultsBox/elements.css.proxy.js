// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@keyframes GoRight {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translatex(0%);\n    opacity: 1;\n  }\n}\n\n@-moz-keyframes GoRight {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translatex(0%);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes GoRight {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translatex(0%);\n    opacity: 1;\n  }\n}\n\n.box {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  border-radius: 12px;\n\n  /* Box shadow effect */\n  -webkit-box-shadow: 0px 0px 8px 0px rgba(189, 189, 189, 0.35);\n  -moz-box-shadow: 0px 0px 8px 0px rgba(189, 189, 189, 0.35);\n  box-shadow: 0px 0px 8px 0px rgba(189, 189, 189, 0.35);\n\n  /* Initial animation effect */\n  animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.35s;\n  -webkit-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.35s;\n  -moz-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.35s;\n}\n\n.box > ul {\n  padding: 1rem;\n  list-style: none;\n}\n\n.box > ul > li {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\n\n.box > ul > li > .info-button {\n  background: none;\n  border: none;\n  outline: none;\n}\n\n.box > ul > li > .info-button > svg {\n  margin: 0;\n  padding: 3px 1.5px 0 1.5px;\n}\n\n@media (min-width: 300px) and (max-width: 768px) {\n  .box {\n    width: 100%;\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}