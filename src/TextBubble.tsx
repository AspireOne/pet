export const TextBubble = ({ text, setVisibility }: { text: string; setVisibility: any }) => {
  setTimeout(() => {
    setVisibility(false);
  }, text.length * 1000);

  return (
    <div className={"absolute w-full bottom-5 text-center"}>
      <div className={"backdrop-blur rounded-md mx-auto bg-gray-600/20 w-[80%]"}>
        <h2>{text}</h2>
      </div>
    </div>
  );
};
