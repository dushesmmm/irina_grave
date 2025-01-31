import { Inter } from "next/font/google";
import Header from "../UI/header/Header";

export default function about({ children }) {
  return (
    <div>
      <Header dark={false} />
      {children}
    </div>
  );
}
