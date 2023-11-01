export interface ThemeApp {
    Pallete: {
        border: string
        title: string
        description: string
        main: string
        darkMain: string
        black: string
        background: string
    }
}
export interface ThemeAppCardFavorite {
    Pallete: {
        border: string
        title: string
        description: string
        main: string
        darkMain: string
        black: string
        background: string
    },
    isOpen:boolean,
    url:string
}