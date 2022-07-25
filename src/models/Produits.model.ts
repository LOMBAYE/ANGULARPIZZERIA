export interface Burger{
    id: number,
    nom:string,
    image:string,
    prix:number,
}
export interface Frites{
    id: number,
    nom:string,
    image:string,
    prix:number,
}
export interface Boissons{
    id: number,
    nom:string,
    image:string,
    prix:number,
}
export interface Menu{
    id: number,
    nom:string,
    image:string,
    prix:number,
    burgers:Burger[],
    frites:Frites[],
    boissons:Boissons[]
}
export interface Catalogue{
    menus:Menu[],
    burgers:Burger[]
}