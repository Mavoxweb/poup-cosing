import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = "", id }) => {
  return (
    <div
      id={id}
      className={`w-full max-w-[1240px] mx-auto px-6 md:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
