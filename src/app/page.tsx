import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import Board from "@/components/Board";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "700", "900"] });

export default function Home() {
  return (
    <main className={`${roboto.className}`}>
      <Header />
      <Board />
    </main>
  );
}
