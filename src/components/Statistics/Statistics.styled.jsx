import styled from 'styled-components';
import { getRandomHexColor } from 'components/Statistics/GetRandomHexColor';

export const StatisticsBox = styled.section`
  padding-top: 20px;
  margin-bottom: 30px;
  width: 340px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  background-color: rgba(106, 138, 152, 0.259);
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  list-style: none;
color: #fff;
`;

export const Item = styled.li`
    padding: 10px;
    width: 100%;
    background-color: ${props => getRandomHexColor(props.id)};
`

export const Label = styled.span`
    display: block;
    margin-bottom: 10px;
`
export const Percentage = styled.span`
    font-weight: 700;
    font-size: 20px;
`
