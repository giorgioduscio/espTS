export function itemize(mainArray:any[], itemCommand:(el:any)=>string ) {
  return mainArray .map(itemCommand).join('')
}

export function mapper(obj:any) {
  let newObject  =obj
  return Object.keys(newObject) .map(key=>{
    newObject[key]['key']=key
    return newObject[key]
  })
}