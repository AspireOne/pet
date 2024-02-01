export const TextBubble = ({
  text,
  visibility,
  setVisibility,
}: { text: string; visibility: boolean; setVisibility: any }) => {
  setTimeout(() => {
    setVisibility(false);
  }, text.length * 700);

  return (
    <div
      className={`transition-opacity duration-500 absolute w-full bottom-5 text-center ${
        visibility ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={"backdrop-blur rounded-md mx-auto bg-gray-600/20 w-[80%]"}>
        <h2>{text}</h2>
      </div>
    </div>
  );
};
