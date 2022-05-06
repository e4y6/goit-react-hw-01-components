import React from 'react';
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
  );
};

const Wrapper = styled.table`
  width: 250px;
`;

const TableHead = styled.thead`
  background-color: #b7c5ec;
`;

const HeadCell = styled.th`
  font-size: 18px;
`;

const Row = styled.tr`
  background-color: ${p => (p.accent ? '#CDDEFF' : 'transparent')};
`;

const Cell = styled.td`
  padding: 5px;

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
