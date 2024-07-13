import { twMerge } from "tailwind-merge";

export default function Gap({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge([
        "relative flex min-h-[200px] w-full overflow-visible",
        className,
      ])}
    >
      {children && children}
    </div>
  );
}
