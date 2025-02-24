import React, { type ElementType } from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    size: {
      h1: "text-5xl leading-[1.125] tracking-wide",
      h2: "text-3xl md:text-4xl leading-[1.125]",
      h3: "text-3xl leading-[1.125]",
      h4: "text-xl md:text-[24px] leading-[1.5]",
      h5: "text-lg tracking-wide",
      md: "text-md tracking-wide",
      sm: "text-sm tracking-wide",
      xs: "text-xs tracking-wide",
    },
    weight: {
      bold: "font-bold",
      semibold: "font-semibold",
      normal: "font-normal",
      light: "font-light",
      extralight: "font-extralight",
    },
    textColor: {
      foreground: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      white: "text-white",
      gray: "text-gray-600",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
    textColor: "foreground",
  },
});

type AsProp<T extends ElementType> = {
  type?: T;
};

type TypographyProps<T extends ElementType> = AsProp<T> &
  React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof typographyVariants>;

const Typography = <T extends ElementType = "p">({
  type,
  className,
  size,
  weight,
  textColor,
  ...props
}: TypographyProps<T>) => {
  const Component = type ?? "p";
  return (
    <Component
      className={cn(typographyVariants({ size, weight, textColor }), className)}
      {...props}
    />
  );
};

export default Typography;
