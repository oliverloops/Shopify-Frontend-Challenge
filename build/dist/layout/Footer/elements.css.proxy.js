// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "footer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n}\n\nfooter > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 500;\n}\n\nfooter > span > img {\n  width: 90px;\n  height: 56px;\n}\n\nfooter > a {\n  font-size: 14px;\n  margin-bottom: 14px;\n  font-weight: 500;\n}\n\n.stripe {\n  width: 100%;\n  height: 9px;\n  background-color: rgb(142, 230, 46);\n}\n/* Media Query */\n@media (min-width: 300px) and (max-width: 768px) {\n  footer {\n    position: relative;\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}