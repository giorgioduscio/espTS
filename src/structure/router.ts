export type Router={
  title: string;
  path: string;
  show: boolean;
}[]

export const pagesRouter :Router =[
  { title:'Home', path:'/index.html', show:true },
  { title:'List', path:'/src/pages/list/list.html', show:true },
  // { title:'', path:'', show:true },
]
