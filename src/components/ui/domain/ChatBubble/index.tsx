import React from "react";

interface ChatBubbleChildren {
  name: string;
  children: string;
  align: "left" | "right";
}

const ChatBubble = ({ align, children, name }: ChatBubbleChildren) => {
  return (
    <div className={`flex flex-col gap-1 p-4 ${align === "left" ? "items-start" : "items-end"}`}>
      <div className="text-[5px]">{name}</div>
      <div className="relative inline-block rounded-md border border-black bg-white px-2 text-center">
        <span>{children}</span>
        <div
          className={`absolute ${
            align === "left"
              ? "-left-[5px] border-r-0 border-t-0"
              : "-right-[5px] border-b-0 border-l-0"
          } bottom-[7px] h-2 w-2 rotate-45 border border-black bg-white`}
        />
      </div>
    </div>
  );
};

export default ChatBubble;
