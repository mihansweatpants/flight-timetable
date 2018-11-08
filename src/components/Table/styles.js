import styled from 'styled-components';

export const FlightTable = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const FlightTableRow = styled.div`
    padding: 30px 15px;
    border-bottom: 0.2px solid #333333;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    position: relative;
    background-color: white;
    transition: transform 0.2s ease-in;
    transition-delay: 250ms;
    transition-property: box-shadow, border, transform;

    &:hover {
        transform: translate(-5px, -5px);
        box-shadow: 5px 5px 0px 0px #ffac02;
        border: 1px solid #333333;
    }

    @media screen and (max-width: 420px) {
        flex-wrap: wrap;
        padding: 15px 0px;
    }
`;

export const FlightRowItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 420px) {
        width: 20%;
        margin: 10px;
    }
`;

export const Time = styled(FlightRowItem)`
    font-weight: 700;
`;

export const Airline = styled(FlightRowItem)`
    font-size: 22px;
    font-weight: 800;

    @media screen and (max-width: 420px) {
        justify-content: flex-end;
    }
`;

export const FlightNumber = styled(FlightRowItem)`
    font-size: 16px;
    text-align: left;
`;

export const Terminal = styled(FlightRowItem)`
    font-weight: 700;
`;

export const Status = styled(FlightRowItem)`
    font-weight: 700;
    ${props => props.isDelayed && 'color: red;'}
`;
