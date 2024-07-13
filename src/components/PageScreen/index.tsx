import React from "preact/compat";

export default function Screen({
  children,
  className,
  flush,
  flushTop,
  ...props
}: {
  children: React.ReactNode;
  flush?: boolean;
  flushTop?: boolean;
  className?: string;
  props?: any;
}) {
  return (
    <div
      className={`relative min-h-screen w-full overflow-visible text-[#010D10] dark:text-white ${
        !flush && "px-[28px] md:px-[62px]"
      } ${
        flushTop ? "md:mb-[42px]" : "md:py-[42px]"
      } flex flex-col space-y-[12px] transition-all ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
