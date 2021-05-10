// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@keyframes GoRight {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translatex(0%);\n    opacity: 1;\n  }\n}\n\n@-moz-keyframes GoRight {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translatex(0%);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes GoRight {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translatex(0%);\n    opacity: 1;\n  }\n}\n\n.App {\n  display: flex;\n}\n\nlabel.titles {\n  display: flex;\n  font-weight: 700;\n  font-size: 1.2rem;\n  padding-bottom: 12px;\n  /* Initial animation effect */\n  animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.55s;\n  -webkit-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.55s;\n  -moz-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.55s;\n}\n\nh3 {\n  display: flex;\n  margin: 0;\n}\n\nh3.results {\n  /* Initial animation effect */\n  animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.25s;\n  -webkit-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.25s;\n  -moz-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.25s;\n}\n\nsvg {\n  margin: 3px 0 0 4px;\n}\n\n.search-content {\n  display: flex;\n  width: 55%;\n  flex-direction: column;\n  justify-content: center;\n  padding: 5% 2.5% 5% 5%;\n}\n\n.search-content > form {\n  padding: 0.5em; /* 8px */\n}\n\n.search-content > div {\n  padding: 0.5em; /* 8px */\n}\n\n.nominations {\n  width: 30%;\n  padding: 5% 5% 5% 2.5%;\n  animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.15s;\n  -webkit-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.15s;\n  -moz-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.15s;\n}\n\n@media (min-width: 300px) and (max-width: 768px) {\n  .App {\n    flex-direction: column;\n    padding-bottom: 160px;\n  }\n\n  h3 {\n    /* Initial animation effect */\n    animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.15s;\n    -webkit-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.15s;\n    -moz-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.15s;\n  }\n\n  h3.results {\n    /* Initial animation effect */\n    animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.35s;\n    -webkit-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.35s;\n    -moz-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.35s;\n  }\n\n  .search-content {\n    width: 90%;\n    flex-direction: column;\n    justify-content: center;\n    padding: 5% 5% 0% 5%;\n  }\n\n  .nominations {\n    width: 88%;\n    padding: 0% 6% 4% 6%;\n    animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.15s;\n    -webkit-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.15s;\n    -moz-animation: GoRight 1.1s cubic-bezier(0.47, 0.18, 0.25, 0.75) 0.15s;\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}