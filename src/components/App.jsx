import styled from 'styled-components';

import Profile from './Profile';
import Statistics from './Statistics';
import Friends from './Friends';
import Transactions from 'components/Transactions';

export const App = ({ data }) => {
  return (
    <Wrapper>
      <Item>
        <Profile {...data.user} />
      </Item>
      <Item>
        <Statistics title="Upload stats" data={data.statistics} />
      </Item>
      <Item>
        <Friends data={data.friends} />
      </Item>
      <Item>
        <Transactions items={data.transactions} />
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 35px;
`;

const Item = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;
