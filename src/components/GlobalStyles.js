import { createGlobalStyle } from "styled-components";

export const breakpoints = { 
    mobileSmall: "320px",
    mobileMedium: "375px",
    mobileLarge: "4250px",
    tabletSmall: "480px",
    tabletMedium: "600px",
    tabletLarge: "750px",
    laptopSmall: "770px",
    laptopMedium: "900px",
    laptopLarge: "1000px",
    desktopSmall: "1050px",
    destopMedium: "1150px",
    desktopLarge: "1200px"
 };

export default createGlobalStyle`
    @font-face {
        font-family: "BaskervillePT";
        src: url("/assets/fonts/baskervillePT.woff2") format("woff2");
    }
    :root {
        --jost: 'Jost', sans-serif;
        --baskerville: 'BaskervillePT', serif;
        --black: #000000;
        --white: #ffffff;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    /* @font-face {
            font-family: "Lack-Regular";
            src: url("./fonts/Lack-Regular.woff2") format("woff2");
        } */

    body {
        line-height: 1;
        background-color: var(--black);
        color: var(--white);
        /* font-weight: 300; */
    }
    h1 {
    padding-top: 2rem;
    font-size: clamp(4.5rem, 1rem + 20vw, 10rem);
    font-family: var(--baskerville);
    font-weight: 300;
    margin: 10px;
    
    }

    h2 {
        font-family: var(--baskerville);
        font-size: clamp(4rem, 1rem + 15vw, 9rem);
        font-weight: 300;
        padding: 2rem 0;
        
    }
    
    h3, h4 {
        font-family: var(--baskerville);
        margin: 0% 5%;
    }
    h3 {
        font-size: clamp(1.5rem, 1rem , 2rem);
    }

    h4 {
        font-size: clamp(1rem, 1rem, 1.25rem);
    }

    p {
        font-family: var(--jost);
        font-weight: 400;
        max-width: 40ch;
        margin: 0% 5%;
        font-size: clamp(1rem, 1rem, 1.25rem);
    }
    a {
        font-family: var(--jost);
    }
`

