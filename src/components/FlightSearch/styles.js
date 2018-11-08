import styled from 'styled-components';

export const SearchBar = styled.div`
    margin-top: 20px;
    max-width: 500px;
    width: 100%;
    position: relative;

    input {
        font-size: 20px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        outline: none;
        padding: 0 0 5px 5px;
        border-bottom: 1px solid #333333;
        margin-bottom: 3px;

        @media screen and (max-width: 490px) {
            font-size: 22px;
        }

        @media screen and (min-width: 900px) {
            font-size: 38px;
        }

        ~ .focus-border {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 3px;
            background-color: #ffac02;
            transition: 0.4s;
        }

        &:focus ~ .focus-border {
            width: 100%;
            transition: 0.4s;
        }
    }

    &:hover {
        input::placeholder {
            color: #ffac02;
        }
    }
`;