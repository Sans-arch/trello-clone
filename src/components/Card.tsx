import EndsAt from "./EndsAt";
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
  endsAt?: string;
}

export default function Card({ description, tags, background, endsAt }: CardProps) {
  return (
    <section
      className={`flex flex-col bg-slate-700 px-4 pt-2 pb-2 rounded-md shadow-md ${background || ""} cursor-pointer`}
    >
      {tags.length > 0 && (
        <div className="flex flex-row gap-x-2 mb-1 mt-1">
          {tags.map((tag) => (
            <TagColor key={tag} color={tag} />
          ))}
        </div>
      )}

      <p className="text-gray-300 text-sm">{description}</p>
    </section>
  );
}
