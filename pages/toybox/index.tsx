import { GetStaticProps } from 'next';
import { VFC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const fs = require('fs');
  const filenames: string[] = fs.readdirSync('pages/toybox'); //ファイル名を取得
  const paths = filenames
    .map((filename) => {
      const path = filename.replace('.mdx', '');
      return path;
    })
    .filter((path) => path !== 'index.tsx');

  return {
    props: {
      paths,
    },
  };
};

type ToyboxPageProps = {
  className?: string;
  paths: string[];
};

const ToyboxPage: VFC<ToyboxPageProps> = ({ className, paths }) => {
  return (
    <StyledToyboxPage className={`${className}`}>
      <h1>ToyBox</h1>
      <p>実験用おもちゃ箱</p>
      <div>
        {paths.map((path) => (
          <Link key={path} href={`toybox/${path}`}>
            <a>{path}</a>
          </Link>
        ))}
      </div>
    </StyledToyboxPage>
  );
};

const StyledToyboxPage = styled.div``;

export default ToyboxPage;
