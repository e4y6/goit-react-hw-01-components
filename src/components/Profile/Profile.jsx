import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Description>
        <Avatar src={avatar} alt={username} />
        <LineText>{username}</LineText>
        <LineText className="subtitle">@{tag}</LineText>
        <LineText className="subtitle">{location}</LineText>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 250px;
  border-radius: 5px;
  border: 1px solid #1ceeff61;
  background: #34343412;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-bottom: none;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const LineText = styled.p`
  color: #18202b;
  padding: 0;
  margin: 0;
  margin-top: 10px;

  &.subtitle {
    color: #7c848a;
  }
`;

const StatsList = styled.ul`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 4px;
  background-color: #f2f6f931;
  border-top: 1px solid #74e9ed;
  border-right: 1px solid #54e9ed;

  &:last-child {
    border-right: none;
  }
`;

const Label = styled.span`
  color: #7d848a;
`;

const Quantity = styled.span`
  color: #253340;
`;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
