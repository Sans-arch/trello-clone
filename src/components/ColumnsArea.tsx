import { CardBackgroundColors, CardProps } from "./Card";
import Column from "./Column";

const ideasCards: CardProps[] = [
  { description: "New e-commerce for designer", tags: ["bg-yellow-400", "bg-red-400"], endsAt: "27 Jun" },
  { description: "Learn Big data - scikitlearn", tags: [], background: CardBackgroundColors.RED, endsAt: "13 Sep" },
  { description: "Explore Ethereum Blockchain", tags: ["bg-green-600"] },
];

const toDoCards: CardProps[] = [
  { description: "Create Pitch Deck", tags: ["bg-cyan-400"] },
  { description: "Ask Client X", tags: [], background: CardBackgroundColors.VIOLET },
  { description: "[Task Name]", tags: [] },
  { description: "Create Budget for Z", tags: ["bg-green-600", "bg-yellow-400"] },
  { description: "[Task Name]", tags: [], background: CardBackgroundColors.VIOLET },
  { description: "Conclude G job", tags: [] },
  { description: "Create Budget for R", tags: ["bg-green-600", "bg-red-400"] },
  { description: "Create Budget for R", tags: ["bg-green-600", "bg-red-400"] },
  { description: "Create Budget for R", tags: ["bg-green-600", "bg-red-400"] },
  { description: "Create Budget for R", tags: ["bg-green-600", "bg-red-400"] },
  { description: "Create Budget for R", tags: ["bg-green-600", "bg-red-400"] },
  { description: "Create Budget for R", tags: ["bg-green-600", "bg-red-400"] },
  { description: "Create Budget for R", tags: ["bg-green-600", "bg-red-400"] },
  { description: "Create Budget for R", tags: ["bg-green-600", "bg-red-400"] },
  { description: "Create Budget for R", tags: ["bg-green-600", "bg-red-400"] },
  { description: "Create Budget for R", tags: ["bg-green-600", "bg-red-400"] },
  { description: "Create Budget for R", tags: ["bg-green-600", "bg-red-400"] },
  { description: "Create Budget for R", tags: ["bg-green-600", "bg-red-400"] },
];

const doingCards: CardProps[] = [
  { description: "[Task Name]", tags: [] },
  { description: "Startup Ipsilon Spring", tags: ["bg-yellow-400", "bg-red-400"], endsAt: "4 Jun" },
  { description: "[Task Name]", tags: [] },
  {
    description: "Sport",
    tags: ["bg-green-600", "bg-yellow-400", "bg-red-400", "bg-cyan-400"],
    background: CardBackgroundColors.GREEN,
  },
  { description: "[Task Name]", tags: [] },
];

export default function ColumnsArea() {
  return (
    <div className="flex flex-row gap-x-8 mt-6 mx-6 overflow-auto box-border">
      <Column title="Ideas" cards={ideasCards} />
      {/* <Column title="To Do" cards={toDoCards} /> */}
      <Column title="Doing" cards={doingCards} />
    </div>
  );
}
