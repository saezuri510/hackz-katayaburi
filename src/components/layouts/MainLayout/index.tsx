import { ReactElement } from "react";

type Props = {
  children: ReactElement;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-sky-600 to-purple-400 p-[32px]">
      {children}
    </div>
  );
};
