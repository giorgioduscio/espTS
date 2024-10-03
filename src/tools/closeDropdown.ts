/*  QUANDO SI CLICCA SU QUALSIASI PUNTO DELLA PAGINA, 
    IL DROPDOWN SI CHIUDE, ALTRIMENTI HA UN COMPORTAMENTO NORMALE
*/
export default function closeDropdown(detailsClass:string){
//   L'ELEMENTO E' IL DROPDOWN?
  document.addEventListener('click', (e:Event)=>{
    const element =(e.target as HTMLElement).parentElement?.parentElement
    ,     dropdown =document.querySelector(`details.${detailsClass}`)
    if(element!==dropdown) dropdown?.removeAttribute("open")
  })
}