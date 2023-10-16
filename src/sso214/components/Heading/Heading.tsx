import React from 'react';
import S from './style.module.css';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: HeadingLevel;
}

const Heading = ({ headingLevel, children, className = '', ...res }: Props) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, props, children);
  const headingStyle: Record<HeadingLevel, string> = {
    h1: S.h1,
    h2: S.h2,
    h3: S.h3,
    h4: S.h4,
    h5: S.h5,
    h6: S.h6,
    p: S.p,
  };

  return (
    <Heading className={`${headingStyle[headingLevel]} ${className}`} {...res}>
      {children}
    </Heading>
  );
};

export default Heading;
