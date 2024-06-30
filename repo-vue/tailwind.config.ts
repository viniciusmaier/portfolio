module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      width: {
        '100': '100rem'
      },
      height: {
        '55': '55rem'
      },
      colors: {
        'midnight-blue': '#0a1816',
        'deep-jungle-green': 'hsla(170,51%,53%,1)'
      },
      fontFamily: {
        custom: ['Arial', 'Verdana', 'sans-serif'],
        Alegreya: ['Alegreya Variable', 'serif']
      },

      fontSize: {
        letterRgb: '55px'
      },

      keyframes: {
        // move-persona
        personaMove: {
          '0%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-50px)'
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        },
        rgb: {
          '0%': {
            color: '#F22786'
          },
          '10%': {
            color: '#E856A6'
          },
          '20%': {
            color: '#D885C5'
          },
          '30%': {
            color: '#CAB4E3'
          },
          '40%': {
            color: '#B7E3FF'
          },
          '50%': {
            color: '#A5C1D6'
          },
          '60%': {
            color: '#9590AD'
          },
          '70%': {
            color: '#847E85'
          },
          '80%': {
            color: '#736C5C'
          },
          '90%': {
            color: '#625A34'
          },
          '100': {
            color: '#515809'
          }
        }
      },
      //RGB -- Letter
      animation: {
        personaMove: 'personaMove 5s ease-in-out infinite',
        rgbLetterAboutA: 'rgb 8s ease-in-out infinite',
        rgbLetterAboutB: 'rgb 8.01s ease-in-out infinite',
        rgbLetterAboutO: 'rgb 8.02s ease-in-out infinite',
        rgbLetterAboutU: 'rgb 8.03s ease-in-out infinite',
        rgbLetterAboutT: 'rgb 8.04s ease-in-out infinite',
        rgbLetterAboutM: 'rgb 8.05s ease-in-out infinite',
        rgbLetterAboutE: 'rgb 8.07s ease-in-out infinite'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
