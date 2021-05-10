// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "header {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  margin: 1rem 0 0.75rem 0;\n}\n\nheader > img {\n  width: 155px;\n  height: 70px;\n}\n\n@media (min-width: 300px) and (max-width: 768px) {\n  header {\n    margin: 12px 0 30px 0;\n  }\n\n  header > img {\n    width: 140px;\n    height: 65px;\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}