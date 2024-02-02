import { appWindow } from "@tauri-apps/api/window";
import { useState } from "react";
import Alpha from "./assets/alpha.webp";
import { TextBubble } from "./components/TextBubble.tsx";
import "./index.css";
function App() {
  const [name, setName] = useState("Alpha");
  const [showText, setShowText] = useState(false);
  const [text, setText] = useState(`Hi... I am ${name}`);

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

  const Home = () => {
    return (
      // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
      <div
        className="container relative flex flex-col bg-transparent w-full h-full select-none"
        onClick={() => setShowText(true)}
        onMouseDown={startDrag}
      >
        <img src={Alpha} className={""} alt="<3" draggable={false} />
        {/*Needs to be randomized*/}
        <TextBubble text={text} visibility={showText} setVisibility={setShowText} />
      </div>
    );
  };

  return <Home />;
}

export default App;
