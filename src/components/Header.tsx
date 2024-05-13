import TrelloIcon from "@/icons/TrelloIcon";
import { Jersey_20 } from "next/font/google";

const jersey = Jersey_20({ subsets: ["latin-ext"], weight: ["400"] });

export default function Header() {
  return (
    <div className="w-screen bg-slate-800 text-white/90 flex items-center justify-start py-1.5 px-10 gap-x-1">
      <TrelloIcon className="text-gray-400 size-7" />
      <h1 className={`${jersey.className} text-3xl text-gray-400`}>KanBan</h1>
    </div>
  );
}
