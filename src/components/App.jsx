import { Wrapper } from './Wrapper';
import Profile from './Profile';
import Statistics from './Statistics';
import Friends from './Friends';
import Transactions from 'components/Transactions';

export const App = ({ data }) => {
  return (
    <Wrapper>
      <Profile {...data.user} />
      <Statistics title="Upload stats" data={data.statistics} />
      <Friends data={data.friends} />
      <Transactions items={data.transactions} />
    </Wrapper>
  );
};
