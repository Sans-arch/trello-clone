interface TagColorProps {
  color: string;
}

export default function TagColor({ color }: TagColorProps) {
  return <div className={`${color} h-2 inline w-10 rounded-2xl`}></div>;
}
