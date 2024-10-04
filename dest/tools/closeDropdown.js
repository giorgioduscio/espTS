/*  QUANDO SI CLICCA SU QUALSIASI PUNTO DELLA PAGINA,
    IL DROPDOWN SI CHIUDE, ALTRIMENTI HA UN COMPORTAMENTO NORMALE
*/
export default function closeDropdown(detailsClass) {
    //   L'ELEMENTO E' IL DROPDOWN?
    document.addEventListener('click', (e) => {
        var _a;
        const element = (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement, dropdown = document.querySelector(`details.${detailsClass}`);
        if (element !== dropdown)
            dropdown === null || dropdown === void 0 ? void 0 : dropdown.removeAttribute("open");
    });
}
