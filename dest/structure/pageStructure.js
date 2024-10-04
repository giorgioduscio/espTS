import navbar from "./navbar/navbar.js";
export default function pageStructure(pageTitle, cssPath) {
    document.head.innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${pageTitle}">
    <meta name="keywords" content="parole chiave, esempio, meta tag">
    <meta property="og:title" content="Il mio sito web" />
    <meta property="og:description" content="Una breve descrizione per i social media" />

    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="shortcut icon" href="/racoonLogo.png" type="image/x-icon">

    ${cssPath ? `<link rel="stylesheet" href="${cssPath}">` : ''}
    <title>${pageTitle}</title>
  `;
    if (document.querySelector('nav#navbar'))
        navbar();
}
