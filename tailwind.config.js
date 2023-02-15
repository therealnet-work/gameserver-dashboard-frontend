module.exports = {
    content: [
        './index.html',
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        './safelist.txt',
    ],
    theme: {
        extend: {
            colors: {
                current: 'currentColor',

                info: '#00dcef',
                danger: '#c50000',
                warning: '#ffb300',
                success: '#00b300',

                primary: {
                    0: '#7200D6',
                    50: '#FFF',
                    100: '#7200D6',
                    200: '#FFF',
                    300: '#FFF',
                    400: '#FFF',
                    450: '#7F7F7F',
                    500: '#FFF',
                    550: '#FFF',
                    600: '#e3e3e3',
                    700: '#3E5461',
                    800: '#FFF',
                    900: '#FFF',
                },

                accent: {
                    200: '#787878',
                    300: '#7200D6',
                    500: '#00b300',
                    600: '#7200D6'
                },

                red: {
                    700: '#c53030',
                },
            },

            height: {
                unset: 'unset'
            },

            animation: {
                slide: 'slide 1.2s ease-in-out infinite'
            },

            keyframes: {
                slide: {
                    '0%': { 'background-position': '-200px 0' },
                    '100%': { 'background-position': 'calc(200px + 100%) 0' }
                }
            },

            screens: {
                'xs': '400px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
};
