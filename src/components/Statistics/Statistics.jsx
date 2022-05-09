import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'components/Container';

const Statistics = ({ title, data }) => {
  const backgroundColors = [
    '#035397',
    '#a47881',
    '#8D8DAA',
    '#CE49BF',
    '#557B83',
  ];
  const renderData = () =>
    data.map(({ id, label, percentage }, index) => (
      <StatItem key={id} bg={backgroundColors[index]}>
        <LineText>{label}</LineText>
        <LineText className="subtitle">{percentage}%</LineText>
      </StatItem>
    ));

  return (
    <Container>
      <Wrapper>
        {title && <Title>{title}</Title>}
        <StatList>{renderData()}</StatList>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  border: 1px solid #1ceeff41;
  border-radius: 5px;
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
`;

const StatList = styled.ul`
  display: flex;
  width: 100%;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  background-color: ${p => (p.bg ? p.bg : '#43919B')};
`;

const LineText = styled.span`
  color: #fff;

  &.subtitle {
    margin-top: 10px;
  }
`;

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
