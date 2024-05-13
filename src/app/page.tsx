import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import ColumnsArea from "@/components/ColumnsArea";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "700", "900"] });

export default function Home() {
  return (
    <main className={`${roboto.className}`}>
      <Header />
      <ColumnsArea />
    </main>
  );
}
