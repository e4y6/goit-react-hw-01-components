import { Container } from 'components/Container';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Transactions = ({ items }) => {
  const renderList = () =>
    items.map(({ id, type, amount, currency }, index) => (
      <Row key={id} accent={index % 2 !== 0}>
        <Cell className="capitalize">{type}</Cell>
        <Cell>{amount}</Cell>
        <Cell>{currency}</Cell>
      </Row>
    ));

  return (
    <Container>
      <Wrapper>
        <TableHead>
          <Row>
            <HeadCell>Type</HeadCell>
            <HeadCell>Amount</HeadCell>
            <HeadCell>Currency</HeadCell>
          </Row>
        </TableHead>

        <tbody>{items && renderList()}</tbody>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.table`
  width: 100%;
`;

const TableHead = styled.thead`
  background-color: #b7c5ec;
`;

const HeadCell = styled.th`
  font-size: 18px;
`;

const Row = styled.tr`
  background-color: ${p => (p.accent ? '#ECEEFF' : '#34343434')};
`;

const Cell = styled.td`
  padding: 3px;

  &.capitalize {
    text-transform: capitalize;
  }
`;

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transactions;
