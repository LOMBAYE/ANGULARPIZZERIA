export interface Burger{
    id: number,
    nom:string,
    image:string,
    prix:number,
    qte?:number,
    type?:string,
}
export interface Frites{
    id: number,
    nom:string,
    image:string,
    prix:number,
    portions:string,
    qte?:number,
}
export interface Boissons{
    id: number,
    nom:string,
    image:string,
    prix:number,
    qte?:number,
    idBoisson:number,
}
export interface BoissonT{
    id: number,
    quantite:number,
    taille:Taille,
    boisson:Boissons,
    image:string
}
export interface Taille{
    id: number,
    libelle:string,
    boissonTailles:Boissons[]
}
export interface Menu{
    id: number,
    nom:string,
    image:string,
    prix:number,
    burgers:Burger[],
    frites:Frites[],
    tailles:BoissonT[],
    qte?:number,
    type?:string
}
export interface Catalogue{
    menus:Menu[],
    burgers:Burger[]
}
export interface ligneDeCom{
    quantite:number,
    prix:number,
    produit:Burger |Menu
}

export interface Commande{
    id: number,
    isEtat:string,
    numero:string,
    modeReception:boolean,
    date:Date,
    client:User,
    prix:number,
    expedie:boolean,
    Produits:ligneDeCom[]
}
export interface CommandeDunClient{
    telephone:string,
    id:number,
    nomComplet:string,
    email:string,
    commandes:Commande[],
}
export interface Complement{
    boissonsT:BoissonT[],
    frites:Frites[]
}
export interface User{
    nomComplet:string,
    email:string,
    telephone:string,
}
export interface Livreur{
    "matricule": string,
    "etat": string,
    "livraisons": string[],
    "id": number,
    "email": string,
}
export interface Zone{
    id: number
    nom:string,
    commandes:Commande[],
    coutLivraison:number,
    quartiers:{nom:string}[]
}
export interface Livraison{
    id: number,
    isEtat:boolean,
    commandes:Commande[],
    livreur:{
        matricule: string,
        etat: string,
        email: string,
        nomComplet: string
    },
    zone:{
        id: number,
        nom:string,
    },
    date:Date,
}
export interface Produit{
    id: number,
    nom:string,
    image:string,
    prix:number,
    burgers?:Burger[]
}