import React from "react";

interface ChatBubbleChildren {
  children: string;
  align: "left" | "right";
}

const ChatBubble = ({ children, align }: ChatBubbleChildren) => {
  return (
    <div className={`flex ${align === "left" ? "justify-start" : "justify-end"}`}>
      <div className="relative m-5 inline-block rounded-md border border-black bg-white px-2 text-center">
        <span>{children}</span>
        <div className={`absolute ${align === "left" ? "-left-[5px] border-r-0 border-t-0" : "-right-[5px] border-l-0 border-b-0"} bottom-[7px] h-2 w-2 rotate-45 border border-black bg-white`} />
      </div>
    </div>
  );
};

export default ChatBubble;
