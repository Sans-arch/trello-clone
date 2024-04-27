interface TagColorProps {
  color: string;
}

export default function TagColor({ color }: TagColorProps) {
  return <div className={`${color} h-3 inline w-16 rounded-3xl`}></div>;
}
