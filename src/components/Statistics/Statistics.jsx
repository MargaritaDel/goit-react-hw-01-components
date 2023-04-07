import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsBox,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBox>
      {title && <h2>{title}</h2>}
      <StatisticsList>
        {stats.map(stat => {
          return (
            <StatisticsItem
              key={stat.id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
