export interface Burger{
    id: number,
    nom:string,
    image:string,
    prix:number,
    qte?:number,
    type?:string,
    isInPanier?:boolean
}
export interface Frites{
    id: number,
    nom:string,
    image:string,
    prix:number,
    qte?:number,
    type?:string
}
export interface Boissons{
    id: number,
    nom:string,
    image:string,
    prix:number,
    qte?:number,
    type?:string
}
export interface Menu{
    id: number,
    nom:string,
    image:string,
    prix:number,
    burgers:Burger[],
    frites:Frites[],
    boissons:Boissons[],
    qte?:number,
    type?:string
}
export interface Catalogue{
    menus:Menu[],
    burgers:Burger[]
}
 // private menu:Observable<Menu> = from(
  //   [

  //   ]
  // )