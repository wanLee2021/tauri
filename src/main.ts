import App from "./App.svelte";
import "./style.css";
import "virtual:windi.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
