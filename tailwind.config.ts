import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Rose Gold and Charcoal color palette
				'rose-gold': {
					50: '#fdf8f6',
					100: '#f9efeb',
					200: '#f2ddd2',
					300: '#e8c4b0',
					400: '#dca68b',
					500: '#d4a29c',
					600: '#c8958a',
					700: '#b47f70',
					800: '#956a5b',
					900: '#7a574c',
				},
				'charcoal': {
					50: '#f6f6f6',
					100: '#e7e7e7',
					200: '#d1d1d1',
					300: '#b0b0b0',
					400: '#888888',
					500: '#6d6d6d',
					600: '#5d5d5d',
					700: '#4f4f4f',
					800: '#454545',
					900: '#1f1f1f',
				},
				'cream': {
					50: '#f7f3eb',
					100: '#f1ebe0',
					200: '#e8ddc7',
					300: '#dcc7a3',
					400: '#ccab7d',
					500: '#c19762',
					600: '#b38856',
					700: '#95724a',
					800: '#795e41',
					900: '#634e37',
				},
				// Keep existing warm-clay, espresso, creamy-sand, bronze-glow for backward compatibility
				'warm-clay': {
					50: '#fdf9f5',
					100: '#faf2eb',
					200: '#f4e4d2',
					300: '#ebd0af',
					400: '#e0b88a',
					500: '#d6aa8b',
					600: '#c89471',
					700: '#b67f5e',
					800: '#956850',
					900: '#785543',
				},
				'espresso': {
					50: '#f6f5f5',
					100: '#e7e5e5',
					200: '#d1cdcd',
					300: '#b0aaaa',
					400: '#888080',
					500: '#6d6363',
					600: '#5d5353',
					700: '#4f4545',
					800: '#453d3d',
					900: '#3b2f2f',
				},
				'creamy-sand': {
					50: '#faf1e6',
					100: '#f5e8d9',
					200: '#ecdcbf',
					300: '#e0c99a',
					400: '#d1b373',
					500: '#c5a558',
					600: '#b8964c',
					700: '#997e41',
					800: '#7d683b',
					900: '#675631',
				},
				'bronze-glow': {
					50: '#faf8f6',
					100: '#f4f1ec',
					200: '#e9e0d6',
					300: '#dac8b7',
					400: '#c8ab94',
					500: '#bfa27e',
					600: '#ad8f6d',
					700: '#91765c',
					800: '#76614e',
					900: '#615041',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
