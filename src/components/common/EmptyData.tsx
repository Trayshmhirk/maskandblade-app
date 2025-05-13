import Image from "next/image";
// import EmptyIcon from "/empty.svg";
import { cn } from "@/lib/utils";

const EmptyData = ({
  message,
  description,
  className,
}: {
  message?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 items-center justify-center mt-4",
        className
      )}
    >
      <Image
        src="/empty_data_icon.svg"
        alt="empty data icon"
        width={300}
        height={400}
        className="object-contain"
      />

      <div className="text-center">
        <p className="text-gray-700 font-medium">
          {message ?? "No available data!"}
        </p>
        <p className="text-sm text-gray-600 mt-3">{description}</p>
      </div>
    </div>
  );
};

export default EmptyData;
