interface CardProps {
  description: string;
}

export default function Card({ description }: CardProps) {
  return (
    <div className="bg-white mx-5 p-6 rounded-md">
      <p className="text-stone-900">{description}</p>
    </div>
  );
}
