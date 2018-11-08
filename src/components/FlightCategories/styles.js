import styled from 'styled-components';

export const Options = styled.div`
    font-weight: 700;

    display: flex;
    flex-wrap: wrap;
`;

export const OptionTab = styled.div`
    margin: 0.2em 0.5em 0.2em 0;
    color: ${props => (props.isActive ? '#ffac02' : '#333333')};

    font-size: calc(48px + 24 * ((100vw - 420px) / 480));
    @media screen and (max-width: 420px) {
        font-size: 28px;
    }

    @media screen and (min-width: 900px) {
        font-size: 52px;
    }

    cursor: pointer;

    transform-origin: top left;
    transition: transform 250ms ease;

    &:hover {
        color: #ffac02;
    }
`;