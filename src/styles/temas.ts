import { extendTheme } from "native-base" 

export const TEMAS = extendTheme({
    colors: {
        gray: {
            100: "#F9F9F9",
        },
        
        purple: {
            200: '#B4ADEA',
            300: '#6E48A3',
            400: '#533680',
            500: '#820AD1',
            600: '#5A1B8D',
        },
        white: '#fff',
        black: '#000'
    },

    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
        "2xl": '28px',
        "3xl": '32px',
    }
})

