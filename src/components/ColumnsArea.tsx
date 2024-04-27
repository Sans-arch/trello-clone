import Column from "./Column";

const ideasCards = [
  { description: "New e-commerce for designer" },
  { description: "Learn Big data - scikitlearn" },
  { description: "Explore Ethereum Blockchain" },
];

const toDoCards = [
  { description: "Create Pitch Deck" },
  { description: "Ask Client X" },
  { description: "[Task Name]" },
  { description: "Create Budget for Z" },
  { description: "[Task Name]" },
  { description: "Conclude G job" },
  { description: "Create Budget for R" },
];

const doingCards = [
  { description: "[Task Name]" },
  { description: "Startup Ipsilon Spring" },
  { description: "[Task Name]" },
  { description: "Sport" },
  { description: "[Task Name]" },
];

export default function ColumnsArea() {
  return (
    <div className="mt-10 px-12 flex flex-row gap-6">
      <Column title="Ideas" cards={ideasCards} />
      <Column title="To Do" cards={toDoCards} />
      <Column title="Doing" cards={doingCards} />
    </div>
  );
}
