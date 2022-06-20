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
      <h1>ShowRibbon 🎗️</h1>
      <Title>Hello {data[0].username}!</Title>
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
