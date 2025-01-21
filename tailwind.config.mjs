/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                playwrite: ['PlayWrite', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif']
            },
            animation: {
                slideDown: 'slideDown 2s ease-out forwards',
                slideInLeft: 'slideInLeft 2s ease-out forwards',
                slideInUp: 'slideInUp 2s ease-out forwards'
            },
            keyframes: {
                slideDown: {
                    '0%': { transform: 'translateY(-50px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                },
                slideInUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                }
            }
        }
    },
    plugins: []
}
