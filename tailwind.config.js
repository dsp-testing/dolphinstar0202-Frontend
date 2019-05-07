const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  important: true,
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        code: {
          green: '#bdfab3',
          yellow: '#f9e189',
          purple: '#e1bbff',
          red: '#ff88ac',
          blue: '#93ddfd',
          white: '#fff',

          // green: 'hsl(88, 72%, 71%)',
          // blue: 'hsl(193, 100%, 71%)',
          // red: 'hsl(355, 100%, 70%)',
          // purple: 'hsl(281, 77%, 75%)',
          // white: 'hsl(180, 100%, 96%)',
          // yellow: 'hsl(41, 100%, 67%)',
        }
      },
      spacing: {
        '7': '1.75rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '80': '20rem',
        '128': '32rem',
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      inset: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      borderWidth: {
        '6': '6px',
      },
      maxWidth: theme => {
        return {
          'screen-xl': theme('screens.xl'),
        }
      },
      maxHeight: {
        'xs': '20rem',
        'sm': '30rem',
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      boxShadow: {
        'md-light': '0 0 12px 8px rgb(255,255,255)'
      },
      zIndex: {
        '90': '90',
        '100': '100',
      },
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderWidth: ['responsive', 'hover', 'focus'],
  }
}
