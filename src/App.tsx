import { appWindow } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";
import Alpha from "./assets/alpha.webp";
import { Menu } from "./components/Menu.tsx";
import { TextBubble } from "./components/TextBubble.tsx";
import "./index.css";
function App() {
  const [name, setName] = useState("Alpha");
  const [showText, setShowText] = useState(false);
  const [menu, showMenu] = useState(false);

  const startDrag = () => {
    const mouseMoveHandler = (e: any) => {
      if (e.movementX > 1 || e.movementY > 1) {
        appWindow.startDragging();
        window.removeEventListener("mousemove", mouseMoveHandler);
      }
    };
    window.addEventListener("mousemove", mouseMoveHandler);

    // if the mouse doesn't move, drag after 500ms
    setTimeout(() => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    }, 500);

    // if the mouse is released, stop dragging
    window.addEventListener(
      "mouseup",
      () => {
        window.removeEventListener("mousemove", mouseMoveHandler);
      },
      { once: true },
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(true);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> -- GET FUCKED
    <div
      className="container relative flex flex-col bg-transparent border-red-400 border-2 select-none"
      onClick={() => showMenu(!menu)}
      onMouseDown={startDrag}
    >
      <img src={Alpha} className={""} alt="<3" draggable={false} />
      <TextBubble text={`Hi... I am ${name}`} visibility={showText} setVisibility={setShowText} />
      {menu && <Menu />}
    </div>
  );
}

export default App;
