import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.createElement("div");
container.id = "root";
document.body.appendChild(container);

const root = createRoot(container!);
root.render(<App />);
