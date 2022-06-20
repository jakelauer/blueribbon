import Title from '@/components/Title';
import { graphql } from 'gatsby';
import { AllAccountsQuery } from '../../graphql-types';

interface Props {
  data: AllAccountsQuery;
}

export default function Home(props: Props) {
  const data = props.data.allMongodbRibbonAccounts.nodes;

  return (
    <main>
      <Title>Hello {data[0].username}!</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </main>
  );
}

export const pageQuery = graphql`
  query AllAccounts {
    allMongodbRibbonAccounts {
      nodes {
        username
        id
      }
    }
  }
`;
