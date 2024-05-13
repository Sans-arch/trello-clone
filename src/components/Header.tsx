import TrelloIcon from "@/icons/TrelloIcon";
import { Jersey_20 } from "next/font/google";

const jersey = Jersey_20({ subsets: ["latin-ext"], weight: ["400"] });

export default function Header() {
  return (
    <div className="w-screen bg-blue-900/35 text-white/90 flex items-center justify-center p-2">
      <TrelloIcon className="text-white/90 size-7" />
      <h1 className={`${jersey.className} text-3xl`}>KanBan</h1>
    </div>
  );
}
