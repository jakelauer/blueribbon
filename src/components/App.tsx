import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const App: React.FC<Props> = (props) => {
  return <div>{props.children}</div>;
};
