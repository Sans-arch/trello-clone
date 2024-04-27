import Card from "./Card";

interface ColumnProps {
  title: string;
  cards: { description: string }[];
}

export default function Column({ title, cards }: ColumnProps) {
  return (
    <div className="flex flex-col bg-[#e3e4e6] w-96 h-fit rounded-md pt-2 pb-4">
      <h2 className="text-slate-600 text-3xl font-bold text-center mt-2 mb-2">{title}</h2>

      <section className="flex flex-col gap-4">
        {cards.map((card) => (
          <Card key={card.description} description={card.description} />
        ))}
      </section>
    </div>
  );
}
