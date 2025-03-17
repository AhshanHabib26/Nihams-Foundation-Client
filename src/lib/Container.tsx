import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-[1180px] px-5 mx-auto">{children}</div>;
};

export default Container;