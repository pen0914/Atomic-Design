import { BrowserRouter } from "react-router-dom";
import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
