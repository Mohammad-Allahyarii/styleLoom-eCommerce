import type { ElementType } from 'react';

type PropsType = {
  as: ElementType;
};

const Container = ({ as: Element = 'div' }: PropsType) => {
  return <Element>Container</Element>;
};

export default Container;
