import Column from "./Column";

export default function ColumnsArea() {
  return (
    <div className="mt-12 px-12 flex flex-row gap-9">
      <Column />
      <Column />
      <Column />
    </div>
  );
}
