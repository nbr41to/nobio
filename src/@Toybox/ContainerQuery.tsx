import { useState, VFC } from 'react';
import styled from 'styled-components';
import styles from './container.module.css';

type ContainerQueryProps = {
  className?: string;
};

export const ContainerQuery: VFC<ContainerQueryProps> = ({ className }) => {
  const [width, setWidth] = useState('');

  return (
    <StyledContainerQuery className={`${className}`}>
      <input
        type='range'
        min={100}
        max={800}
        onChange={(e) => setWidth(e.target.value)}
      />
      <div className={`${styles.parent} parent box`}>
        Parent Container
        <div className={`${styles.child} box`}>Child Container</div>
        <div className={`${styles.child} box`}>Child Container</div>
        <div className={`${styles.child} box`}>Child Container</div>
      </div>
    </StyledContainerQuery>
  );
};

const StyledContainerQuery = styled.div`
  input {
    border: 1px solid #444;
    border-radius: 12px;
  }
  .parent {
    width: 50%;
    height: 200px;
    background-color: greenyellow;
    contain: layout inline-size;
  }
`;
