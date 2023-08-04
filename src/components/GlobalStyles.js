import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --jost: 'Jost', sans-serif;
        --baskerville: 'Baskervville', serif;
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
        background-color: var(--white);
        color: var(--black);
        /* font-weight: 300; */
    }
    h1 {
    padding-top: 30px;
    font-size: 50px;
    font-family: var(--baskerville);
    font-weight: 300;
    margin: 10px;
    }

    h2 {
        font-family: var(--baskerville);
        font-size: 50px;
        font-weight: 300;
    }

    h3, h4 {
        font-family: var(--baskerville);
    }

    p {
        font-family: var(--jost);
        font-weight: 400;
    }
`