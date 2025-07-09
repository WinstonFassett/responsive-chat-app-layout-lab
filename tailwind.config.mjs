/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'sidebar': 'var(--sidebar-width)',
        'thread': 'var(--thread-width)',
        'header': 'var(--header-height)',
        'tab': 'var(--tab-height)',
        'profile': 'var(--profile-height)',
      },
      transitionDuration: {
        'standard': 'var(--transition-duration)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}