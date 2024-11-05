export const theme = {
  colors: {
    primary: '#bca5ca',
    secondary: '#8fb8e0',
    yellow: '#e3dca8',
    green: '#b8c19b',
    pink: '#e099b6',
    background: '#fdfcff',
    text: '#778899',
    gray: {
      100: '#f5f5f5',
      300: '#e0e0e0',
      500: '#9e9e9e'
    }
  },
  fontSizes: {
    sm: '0.8rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.3rem',
    xxl: '1.7rem'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
} as const;

export type Theme = typeof theme;