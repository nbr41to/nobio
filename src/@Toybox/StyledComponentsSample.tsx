import { VFC } from 'react';
import styled from 'styled-components';

type Sample1Props = {
  className?: string;
};

const Sample1: VFC<Sample1Props> = ({ className }) => {
  return (
    <StyledSample1 className={`${className}`} isTomato>
      <h3>styled.div``型</h3>
      <StyledH4>styled.h4``型</StyledH4>
      <div className='box sampleName2'>sampleName2</div>
      <div className={`box ${className}__attend`}>{`${className}__attend`}</div>
    </StyledSample1>
  );
};

const StyledSample1 = styled.div<{ isTomato: boolean }>`
  h3 {
    color: blue;
    background-color: ${(props) => (props.isTomato ? 'tomato' : 'white')};
  }
  .sampleName1 {
    border: 2px solid blue;
    background-color: tomato;
    &__attend {
      border: 2px solid blue;
      background-color: lime;
    }
  }
  .sampleName2 {
    border: 2px solid blue;
    background-color: skyblue;
  }
`;
const StyledH4 = styled.h4`
  color: gold;
`;

type Sample2Props = {
  className?: string;
  isTomato?: boolean;
  text: string;
};

const Sample2FC: VFC<Sample2Props> = ({ className, text }) => {
  return (
    <div className={`${className}`}>
      <h3>styled(Sample2FC)``型</h3>
      <StyledH4>styled.h4``型</StyledH4>
      <div className='box sampleName2'>sampleName2</div>
      <div className={`box ${className}__attend`}>{`${className}__attend`}</div>
      <p>{text}</p>
    </div>
  );
};

const Sample2 = styled(Sample2FC)`
  h3 {
    color: green;
    background-color: ${(props) => (props.isTomato ? 'tomato' : 'white')};
  }
  .sampleName1 {
    border: 2px solid green;
    background-color: tomato;
    &__attend {
      border: 2px solid green;
      background-color: lime;
    }
  }
  .sampleName2 {
    border: 2px solid green;
    background-color: skyblue;
  }
`;

const Sample3 = styled((props) => <Sample1 {...props} />)``;

export const StyledComponentsSample: VFC = () => {
  return (
    <StyledStyledComponentsSample>
      <Sample1 />
      <Sample2 text='hoge' />
      <Sample3 text='Sample3' />
      <Sample1 className='box sampleName1' />
      <Sample2 text='huga' className='box sampleName1' />
      <Sample3 text='Sample3' className='box sampleName1' />
    </StyledStyledComponentsSample>
  );
};

const StyledStyledComponentsSample = styled.div`
  /* h3 {
    color: red;
  }
  .sampleName1 {
    border: 2px solid red;
    &__attend {
      border: 2px solid red;
    }
  } */
  .sampleName2 {
    border: 2px solid red;
  }
`;
