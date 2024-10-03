import { deleteList, getList, patchList, postList } from "../../datas/list/listDatas.js";
import { listType } from "../../datas/list/listType.js";
import pageStructure from "../../structure/pageStructure.js";
import { mapper, itemize } from "../../tools/abbreviations.js";
import { randomId } from "../../tools/randomCompiler.js";

// TODO MOSTRA
pageStructure('List', './list.css')
let list :listType[] =[]

function showComponent(updatedJson? :listType[]) {
  if (updatedJson) list =updatedJson
  if (!Array.isArray(list)) list =mapper(list)

  document.getElementById('list')!.innerHTML=
  itemize(list,el=>`
    <input type="checkbox" name="complete" ${el.complete ?"checked" :""}/>
    <input type="text" name="title" value="${el.title}"/>
    <span class="material-symbols-outlined delete">delete</span>
  `)
    
  addElement()
  deleteElement()
  putElement()
}
showComponent()
getList( showComponent )

// TODO AGGIUNGI
function addElement() {
  document.querySelector('#addElement')!.addEventListener('submit',(e:Event)=>{
    let field :any =(e.target as HTMLFormElement).title
    ,   newValue =field.value
    if (newValue) {
      const newElement :listType ={ title:newValue, complete:false, id:randomId() }
      list.push( newElement )  
      showComponent(list)
      postList(newElement)
    }
    e.preventDefault()
    console.log((e.target as HTMLFormElement).title);
    
    (e.target as any).title.value =''
  })
}

// TODO CANCELLA
function deleteElement() {
  document.querySelectorAll('.delete').forEach((element,i)=>{
    element.addEventListener('click',()=>{
      deleteList(list[i].key!)
      list.splice(i,1)
      showComponent(list)
    })
  })
}

// TODO MODIFICA
function putElement() {
  const checkboxs =document.querySelectorAll('#list>input[type="checkbox"]') 
  ,     inputs =document.querySelectorAll('#list>input[type="text"]')

  inputs.forEach((input,i)=>{
    checkboxs[i].addEventListener('change', onchange)
    inputs[i].addEventListener('change', onchange)

    function onchange(e:Event) {
      const {name, value, checked} =e.target as HTMLInputElement
      ,     $key =name as keyof listType
      ,     newValue =name==='title' ?value :checked
      ,     clone :any =list
      clone[i][$key] =newValue
      list=clone
      showComponent(list)
      patchList( list[i].key!, list[i] )
    }
  })
}