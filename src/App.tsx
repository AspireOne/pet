import { useEffect, useState } from "react";
import { TextBubble } from "./TextBubble.tsx";
import Alpha from "./assets/alpha.webp";
import "./index.css";
function App() {
  const [name, setName] = useState("Alpha");
  const [showText, setShowText] = useState(false);
  const [menu, showMenu] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(true);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="container relative flex flex-col bg-transparent border-red-400 border-2 select-none"
      onKeyDown={() => showMenu(!menu)}
    >
      <img src={Alpha} className={""} alt="<3" draggable={false} />
      {showText && <TextBubble text={"Hi..."} setVisibility={setShowText} />}
    </div>
  );
}

export default App;
