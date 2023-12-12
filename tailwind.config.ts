import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
		    navy: '#273043',
        honey: '#F39237',
        magenta: '#BF1363',
        azure: '#0E79B2',
        parchment: '#FBFFF1',
        white: '#FFFFFF',
        grey: '#F2F2F2',
        black: '#000000',
        crimson: '#d70015',
    }
    
  },
  plugins: [],
}
export default config
