export const theme = {
  colors: {
    primary: '#8B4513',    // Marron
    secondary: '#D2691E',  // Terre cuite
    background: '#F5DEB3', // Beige sable
    text: '#2C1B18',       // Marron très foncé (High Contrast)
    accent: '#FFB300',     // Ambre/Fossile
    white: '#FFFFFF',
    black: '#000000',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  layout: {
    borderRadius: 0, // Sharp corners
  },
  text: {
    title: {
      fontSize: 32,
      fontWeight: 'bold' as 'bold',
      color: '#2C1B18',
      textTransform: 'uppercase' as 'uppercase', // Industrial/Museum look
      letterSpacing: 1,
    },
    subtitle: {
      fontSize: 20,
      color: '#8B4513',
      textTransform: 'uppercase' as 'uppercase',
      letterSpacing: 0.5,
    },
    body: {
      fontSize: 18,
      color: '#2C1B18',
    },
  },
};
