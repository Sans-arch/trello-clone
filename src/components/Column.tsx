import Card from "./Card";

export default function Column() {
  return (
    <div className="flex flex-col bg-[#e3e4e6] w-96 rounded-md pt-2 pb-4">
      <h2 className="text-slate-600 text-2xl font-bold text-center mb-4">Ideas</h2>

      <section className="flex flex-col gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}
