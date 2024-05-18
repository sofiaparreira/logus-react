import { extendTheme } from "native-base" 

export const TEMAS = extendTheme({
    colors: {
        gray: {
            100: "rgba(240, 240, 240, 0.6)",
            200: "#F0F1F5",
            300: "#F9F9F9",
            400: "E0E0E0",
            500: "ACACAC",
            600: "#484848"
        },
        
        purple: {
            200: '#B4ADEA',
            300: '#6E48A3',
            400: '#533680',
            500: 'rgb(109 40 217)',
            600: '#5A1B8D',
         
        },
        white: '#fff',
        black: '#000',
        red: '#FF0000',
        green: '#228B22'
    },

    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
        "2xl": '28px',
        "3xl": '32px',
    },

    borderRadius: {
        xs: 8,
        sm: 12,
        md: 16,
        lg: 20,
        xl: 32
    }

    
})

