// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".box {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  border-radius: 12px;\n\n  /* Box shadow effect */\n  -webkit-box-shadow: 0px 0px 8px 0px rgba(189, 189, 189, 0.35);\n  -moz-box-shadow: 0px 0px 8px 0px rgba(189, 189, 189, 0.35);\n  box-shadow: 0px 0px 8px 0px rgba(189, 189, 189, 0.35);\n\n  @media (min-width: 300px) and (max-width: 768px) {\n    width: 100%;\n  }\n}\n\n.box > ul {\n  padding: 1rem;\n  list-style: none;\n}\n\n.box > ul > li {\n  padding: 5px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}