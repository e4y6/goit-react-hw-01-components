import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Friends = ({ data }) => {
  const renderList = () =>
    data.map(({ id, isOnline, name, avatar }) => (
      <Item key={id}>
        <OnlineLabel isOnline={isOnline} />
        <Avatar src={avatar} alt={name} />
        <Title>{name}</Title>
      </Item>
    ));

  return <Wrapper>{data && renderList()}</Wrapper>;
};

const Wrapper = styled.ul`
  display: block;
  width: 250px;
  background: #34343414;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #00eeff61;
  border-radius: 2px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const OnlineLabel = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${p => (p.isOnline ? '#357C3C' : '#590F0D')};
  border-radius: 50%;
`;

const Avatar = styled.img`
  width: 40px;
  margin-left: 22%;
`;

const Title = styled.span`
  margin-left: 21%;
`;

Friends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default Friends;
