import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  						chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			},
  			gold: {
  				'400': '#fbbf24',
  				'500': '#f59e0b',
  				'600': '#d97706'
  			},
  			electric: {
  				'400': '#60a5fa',
  				'500': '#3b82f6',
  				'600': '#2563eb'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  				fontFamily: {
			sans: [
				'Inter',
				'system-ui',
				'sans-serif'
			],
			heading: [
				'Sora',
				'system-ui',
				'sans-serif'
			],
			poppins: [
				'Poppins',
				'system-ui',
				'sans-serif'
			],
			playfair: [
				'Playfair Display',
				'serif'
			],
			mono: [
				'JetBrains Mono',
				'Fira Code',
				'monospace'
			]
		},
  		fontSize: {
  			base: '15px'
  		},
  		letterSpacing: {
  			tighter: '-0.02em'
  		},
  		backdropBlur: {
  			xs: '2px'
  		},
  		animation: {
  			'fade-up': 'fade-up 0.5s ease-out',
  			'scale-in': 'scale-in 0.3s ease-out',
  			'glow': 'glow 2s ease-in-out infinite alternate'
  		},
  		keyframes: {
  			'fade-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'scale-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.95)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			'glow': {
  				'0%': {
  					'box-shadow': '0 0 20px rgba(251, 191, 36, 0.3)'
  				},
  				'100%': {
  					'box-shadow': '0 0 30px rgba(251, 191, 36, 0.5)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
