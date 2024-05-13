import ClockHourIcon from "@/icons/ClockHourIcon";

interface EndsAtProps {
  date: string;
}

export default function EndsAt({ date }: EndsAtProps) {
  return (
    <div className="bg-[#EC9488] flex flex-row items-center w-fit py-1 pl-1 pr-2 mt-4 space-x-2 rounded-lg">
      <ClockHourIcon className="size-5" />
      <p className="text-sm">{date}</p>
    </div>
  );
}
