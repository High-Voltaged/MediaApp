// TailwindCSS Configuration File

// Docs: https://tailwindcss.com/docs/configuration
// Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
   theme: {
   
      screens: {
         'sm': '500px',
         'md': '768px',
         'lg': '1024px',
         'xl': '1280px',
         '2xl': '1536px',
      },

      boxShadow: {
         default: '0 1px 3px 0 rgba(0, 0, 0, .5), 0 1px 2px 0 rgba(0, 0, 0, .06)',
         md: '0 4px 6px -1px rgba(0, 0, 0, .3), 0 2px 4px -1px rgba(0, 0, 0, .06)',
         lg: ' 0 0 15px -3px rgba(0, 0, 0, .3), 0 0 8px -2px rgba(0, 0, 0, .05)',
         xl: ' 0 0 25px -5px rgba(0, 0, 0, .1), 0 0 10px -5px rgba(0, 0, 0, .04)',
         inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
         outline: '0 0 0 3px rgba(66,153,225,0.5)',
         'none': 'none',
      }, 

      inset: {
         auto: 'auto',
         full: '100%',
         px: '1px',
         '-1/10': '-10%',
         '-3/20': '-15%',
         '-1/5': '-20%',
         '-1/4': '-25%',
         '-1/3': '-33.3%',
         '-1/2': '-50%',
         '-1': '-0.25rem',
         '-2': '-0.5rem',
         '-3': '-0.75rem',
         '-4': '-1rem',
         '-5': '-1.25rem',
         '-6': '-1.5rem',
         '-12': '-3rem',
         '-16': '-4rem',
         '-8': '-2rem',
         '-10': '-2.5rem',
         '-18': '-4.5rem',
         '-88': '-22rem',
         '1/20' : '5%',
         '0' : '0',
         '0.03': '3%',
         '1/10': '10%',
         '1/2': '50%',
         '2/3': '66.666667%',
         '1/3': '33.333333%',
         '2/3': '66.666667%',
         '1/4': '25%',
         '2/4': '50%',
         '3/4': '75%',
         '1/5': '20%',
         '2/5': '40%',
         '3/5': '60%',
         '4/5': '80%',
         '1/6': '16.666667%',
         '2/6': '33.333333%',
         '3/6': '50%',
         '4/6': '66.666667%',
         '5/7': '70%',
         '5/6': '83.333333%',
         '1/12': '8.333333%',
         '2/12': '16.666667%',
         '3/12': '25%',
         '4/12': '33.333333%',
         '5/12': '41.666667%',
         '6/12': '50%',
         '7/12': '58.333333%',
         '8/12': '66.666667%',
         '9/12': '75%',
         '10/12': '83.333333%',
         '9/10': '90%',
         '11/12': '91.666667%',
         '19/20': '95%',
         '0': '0',
         '1': '0.25rem',
         '2': '0.5rem',
         '3': '0.75rem',
         '4': '1rem',
         '5': '1.25rem',
         '6': '1.5rem',
         '7': '1.75rem',
         '8': '2rem',
         '9': '2.25rem',
         '10': '2.5rem',
         '11': '2.25rem',
         '12': '3rem',
         '16': '4rem',
         '18': '4.5rem',
         '20': '5rem',
         '24': '6rem',
         '25': '6.25rem',
         '26': '6.5rem',
         '28': '7rem',
         '32': '8rem',
         '36': '9rem',
         '40': '10rem',
         '44': '11rem',
         '48': '12rem',
         '56': '14rem',
         '64': '16rem',
         '72': '18rem',
         '80': '20rem',
         '88': '22rem',
      },


      extend: {

         flex: {
            '0': '0 0 auto',
         },

         borderRadius: {
            xl: '12px',
            '2xl': '20px',
         },

         transitionDuration: {
            '250': '250ms',
         },

         spacing: {
            auto: 'auto',

            '2per': '2%',
            '3per': '3%',
            '1/20': '5%',
            '1/10': '10%',
            '1/2': '50%',
            '2/3': '66.666667%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            '9/10': '90%',
            '19/20': '95%',

            '8/5': '1.6rem',
            '7': '1.75rem',
            '9/5': '1.8rem',
            '9': '2.25rem',
            '11': '2.25rem',
            '12': '3rem',
            '13': '3.25rem',
            '14': '3.5rem',
            '18': '4.5rem',
            '20': '5rem',
            '22': '5.5rem',
            '25': '6.25rem',
            '26': '6.5rem',
            '28': '7rem',
            '30': '7.5rem',
            '35': '8.75rem',
            '36': '9rem',
            '44': '11rem',
            '45': '11.25rem',
            '47': '11.75rem',
            '50': '12.5rem',
            '58': '14.5rem',
            '60': '15rem',
            '62': '15.5rem',
            '72': '18rem',
            '80': '20rem',
            '84': '21rem',
            '88': '22rem',
            '96': '24rem',
            '100': '25rem',
            '104': '26rem',
            '108': '27rem',
            '120': '30rem', 

            'custom': '58px',
         },

         colors: {
            danger: '#ff4757',
            success: '#46c93a',
            warn: '#ffba00',
            
            gray: {
               1: '#1e1f21',
               2: '#2F3136',
               3: '#1e2023',
               4: '#242427',
               
               dark: '#18191c',
               
               light: '#27282D',
               dull: '#9b9b9b',

               100: '#f7fafc',
               200: '#edf2f7',
               300: '#e2e8f0',
               400: '#cbd5e0',
               500: '#a0aec0',
               600: '#718096',
               700: '#4a5568',
               800: '#2d3748',
               900: '#1a202c',
            },

            purple: {
               1: '#9370DB',
            }  
         },

      },

   },

   variants: {},

   plugins: []
}
