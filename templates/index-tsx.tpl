import React, { FC } from 'react';
export interface ComponentNameProps {
  height: number;
}
const ComponentName: FC = () => {
  return (
    <div>
      Hello ComponentName
    </div>
  );
};

export default ComponentName;
