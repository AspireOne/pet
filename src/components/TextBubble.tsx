export const TextBubble = ({
  text,
  visibility,
  setVisibility,
}: { text: string; visibility: boolean; setVisibility: any }) => {
  setTimeout(() => {
    setVisibility(false);
  }, text.length * 700);

  const textClick = () => {
    activateText();
  };

  return (
    <div
      style={{ transition: "opacity 4s", opacity: visibility ? 1 : 0 }}
      className={"absolute w-full bottom-5 text-center"}
    >
      <div
        className={"backdrop-blur rounded-md mx-auto bg-gray-600/20 w-[80%]"}
        onMouseDown={textClick}
      >
        <h2>{text}</h2>
      </div>
    </div>
  );
};
