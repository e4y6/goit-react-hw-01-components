import { Container } from 'components/Container';
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

  return (
    <Container>
      <Wrapper>{data && renderList()}</Wrapper>
    </Container>
  );
};

const Wrapper = styled.ul`
  width: 100%;
  background-color: #34343434;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 7px;
  margin-bottom: 4px;
  border: 1px solid #00eeff61;
  border-radius: 4px;
  background-color: #34343414;
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
  margin-left: 25%;
`;

const Title = styled.span`
  margin-left: 25%;
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
