import { ReactNode } from "react";

export const MainLayout = (page: ReactNode) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-sky-600 to-purple-400 p-[32px]">
      {page}
    </div>
  );
};
