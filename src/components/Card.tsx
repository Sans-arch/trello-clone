import TagColor from "./TagColor";

type Colors = "bg-yellow-400" | "bg-red-400" | "bg-green-600" | "bg-cyan-400";

export enum CardBackgroundColors {
  RED = "bg-red-300/80",
  VIOLET = "bg-violet-400/55",
  GREEN = "bg-green-200/85",
}

export interface CardProps {
  description: string;
  tags: Colors[];
  background?: CardBackgroundColors;
}

export default function Card({ description, tags, background }: CardProps) {
  return (
    <section className={`flex flex-col bg-white/80 mx-3 px-6 pt-2 pb-2 rounded-md shadow-md ${background || ""}`}>
      {tags.length > 0 && (
        <div className="flex flex-row gap-x-2 mb-3 mt-1">
          {tags.map((tag) => (
            <TagColor key={tag} color={tag} />
          ))}
        </div>
      )}

      <p className="text-stone-950">{description}</p>
    </section>
  );
}
