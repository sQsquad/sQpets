import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    :root{
        --bg-color-light: #FBFEF7;
        --dark-blue: #2FAEBF;
        --light-blue: #BEF7FF;
        --bg-color-dark: #1A364A;
        --light-blue-bg: #E8FCFF;
        --destaque: #F3712D;
        --texto-escuro: #5A6771;
        --texto-claro: #FFFFFF;
        --fundo-modal: #0B3553;
        --fundo-input-form: #274B64;
        --azul-saturado: #0087E8;
        --roxo-destaque: #8C54E6;
        --fundo-modal-dias: #081B29;
        --fonte: "Zen Maru Gothic", serif;
    }
    * {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        font-family: var(--fonte);
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        text-decoration: none;
    }
        ol, ul {
	list-style: none;
}
    blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`

export default GlobalStyle;