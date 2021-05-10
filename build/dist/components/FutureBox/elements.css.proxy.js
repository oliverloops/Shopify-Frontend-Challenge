// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/* Loader animation */\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.box {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  border-radius: 12px;\n\n  /* Box shadow effect */\n  -webkit-box-shadow: 0px 0px 8px 0px rgba(189, 189, 189, 0.35);\n  -moz-box-shadow: 0px 0px 8px 0px rgba(189, 189, 189, 0.35);\n  box-shadow: 0px 0px 8px 0px rgba(189, 189, 189, 0.35);\n\n  @media (min-width: 300px) and (max-width: 768px) {\n    width: 100%;\n  }\n}\n\n.box > ul {\n  padding: 1rem;\n  list-style: none;\n}\n\n.box > ul > li {\n  padding: 5px;\n}\n\n/* Loader Styling */\n.lds-dual-ring {\n  transform: translateX(149%);\n  display: inline-block;\n  width: 70px;\n  height: 70px;\n}\n\n.lds-dual-ring:after {\n  content: \" \";\n  display: block;\n  width: 44px;\n  height: 44px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid rgba(177, 177, 177, 0.65);\n  border-color: rgba(177, 177, 177, 0.65) transparent rgba(177, 177, 177, 0.65)\n    transparent;\n  animation: lds-dual-ring 1.5s linear infinite;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}