// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/* Slide down animation */\n@keyframes slideDown {\n  from {\n    transform: translateY(-48px);\n  }\n  to {\n    transform: translateY(0px);\n  }\n}\n\n.banner {\n  display: flex;\n  justify-content: center;\n  background-color: rgb(16, 215, 125);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  height: 48px;\n  animation: slideDown 0.45s cubic-bezier(0.46, 0.69, 0.63, 0.53);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}