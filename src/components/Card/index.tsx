import React from "react";
interface CardProps {
  children: JSX.Element;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  const defaultClassName =
    "bg-white shadow-xs rounded-2xl p-8 outline outline-[#F8F9FA]";
  const mergedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return <div className={mergedClassName}>{children}</div>;
};

export default Card;
