import PropTypes from 'prop-types';
// import css from './Profile.module.css';
import {Title, StatisticsBox, StatList, Item, Label, Percentage} from './Statistics.styled'
// import { getRandomHexColor } from 'utils';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBox>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} id={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

