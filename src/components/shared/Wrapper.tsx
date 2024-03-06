import React from 'react';

interface Props {
  id?: string;
  Style?: string;
  MaxWidth?: string;
  children: React.ReactNode;
}

function Wrapper({ id, Style, children, MaxWidth = 'max-w-[1255px]' }: Props) {
  return (
    <section id={id} className={Style}>
      <div className={`w-full h-full ${MaxWidth} mx-auto relative`}>
        {children}
      </div>
    </section>
  );
}

export default Wrapper;
