import { Jersey_20, Roboto } from "next/font/google";
import TrelloIcon from "@/icons/TrelloIcon";
import ColumnsArea from "@/components/ColumnsArea";

const jersey = Jersey_20({ subsets: ["latin"], weight: ["400"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "700", "900"] });

export default function Home() {
  return (
    <main className={`${roboto.className} text-white/90`}>
      <div className="bg-blue-900/60 text-white/90 flex items-center justify-center space-x-1 p-2">
        <TrelloIcon className="text-white/90 size-7" />
        <h1 className={`${jersey.className} text-3xl`}>KanBan</h1>
      </div>

      <div className="flex-col mt-10">
        <h1 className="text-3xl font-bold pl-4">Main Board</h1>
        <ColumnsArea />
      </div>
    </main>
  );
}
