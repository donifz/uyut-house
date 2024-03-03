
const config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	  ],

  theme: {
    extend: {
	  boxShadow: {
			strong: "0px 3px 20px rgba(106, 133, 137, 0.22)",
			medium: "0px 2px 10px rgba(106, 133, 137, 0.1)",
			small: "0px 2px 5px rgba(106, 133, 137, 0.2);",
	  },
      colors: {
				"blue":"#1B75BB",
				"text-color":"#081F32",
        "bg-dark-ui":"#081F32"
				
      },
			borderRadius: {
				lg: "10px",
			},
			aspectRatio: {
				"108/25": "108 / 25",
				"13/5": "13 / 5",
				"119/50": "119 / 50",
				"243/80": "243 / 80",
				"186/25": "186 / 25"
			},
			spacing: {
				7.5: "30px",
				13: "52px"
			}

    },

		fontFamily: {
			sans: ["Noto Sans", "sans-serif"],
			serif: ["Vollkorn", "serif"],
		},
    fontSize: {
			sm: ["12px", "20px"],
			xxs: ["10px"],
			"2sm": "16px",
			md: "18px",
			base: "14px",
			lg: ["20px", "28px"],
			lg2: ["32px"],
			xl: ["24px", "32px"],
			xxl: ["42px"],
			xxlh: ["22px"],
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1140px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1488px",
			// => @media (min-width: 1536px) { ... }
		},
  },
  plugins: [
	require('./uyut.tailwind.plugin')
	// require('@tailwindcss/typography'),
  ],
  darkMode: "class",


  daisyui: {
		styled: true,
		base: true,
		utils: true,
		logs: true,
		prefix: "",
		darkTheme: "dark",
		themes: [
			{
				rb: {
					"primary": "#05C3DE",
					"secondary": "#FFD34E",
					"accent": "#69DBEB",
					"neutral": "#13161A",
					"base-100": "#FFFFFF",
					"info": "#3ABFF8",
					"success": "#36D399",
					"warning": "#FBBD23",
					"error": "#F87272",
					"--btn-text-case": "none",
					"--rounded-btn": "10px",
					"--tooltip-color":"#B9C9D1"
				},

			},
		],
	},

}
export default config
