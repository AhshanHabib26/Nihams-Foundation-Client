import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-[1180px] px-3 mx-auto">{children}</div>;
};

export default Container;