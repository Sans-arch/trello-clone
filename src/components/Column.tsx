import Card, { CardProps } from "./Card";

interface ColumnProps {
  title: string;
  cards: CardProps[];
}

export default function Column({ title, cards }: ColumnProps) {
  return (
    <li className="min-w-72 h-fit bg-gray-950/85 px-2 pt-2 pb-2 rounded-xl shadow-md">
      <input
        type="text"
        className="text-gray-300 text-sm font-bold ml-3 mt-1 mb-3 leading-5 bg-transparent"
        name=""
        id=""
        defaultValue={title}
      />
      <ol className="flex flex-col gap-3">
        {cards.map((card) => (
          <Card key={card.description} {...card} />
        ))}
      </ol>
    </li>
  );
}
