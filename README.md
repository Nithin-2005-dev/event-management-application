# Event manager

This application is to manager your events with user-friendly calender.

The link for the application is:

-https://event-calender98.netlify.app/


## Configuring app in local device

-git clone https://github.com/Nithin-2005-dev/event-management-application.git

-cd event-management-application

-npm i

To install tailwind:
-npm install -D tailwindcss postcss autoprefixer

-npx tailwindcss init -p

In tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
in index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
To install shadcn:

https://ui.shadcn.com/docs/installation/vite

follow the above steps

To run the app:

npm run dev


## Libraries used:

1)framer-motion -->for smooth layout transitions

2)react-toastify -->to showing toasts

3)export-from-json -->to export events data to local storage

4)date-fns -->to format dates

5)react-icons -->for iceons