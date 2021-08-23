import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#fbfbfe',
    fontColor: '#242329',
    toggler: 'moon'
}

export const darkTheme = {
    body: '#242329',
    bodyHighlight: '#2B2A33',
    fontColor: '#fbfbfe',
    toggler: 'lightbulb'
}

export const GlobalStyle = createGlobalStyle`

    body {
        transition: all 0.5s ease;
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
    }

    a {
        color: ${(props) => props.theme.fontColor};
    }

    .mobile-nav {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
    }

    .nav__toggle__icon {
        stroke: ${(props) => props.theme.fontColor};
    }

    .fa-moon, .fa-lightbulb, .fa-bars {
        color: ${(props) => props.theme.fontColor};
    }

    .skills__javascript {
        fill: ${(props) => props.theme.body};
    }

    .contact__social__icon {
        stroke: ${(props) => props.theme.fontColor};
    }

    .more-button {
        color: ${(props) => props.theme.fontColor};
    }

    .work-card {
        background-color: ${(props) => props.theme.bodyHighlight};
    }

    .projects__StyledProject-sc-1v1fime-1 {
        background-color: ${(props) => props.theme.bodyHighlight};
    }

`;