The solution involves configuring Tailwind's purge options to account for dynamically added classes.  Instead of relying solely on static analysis of your HTML, you'll need to tell Tailwind where to find these classes.  This can be done by either:

1. **Modifying your `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add this line to include dynamically generated content
    './node_modules/react-daisyui/dist/**/*.js', // Add other potential sources of dynamic classes here.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
2. **Using a custom purge function (more advanced):**

This approach requires writing a custom function that analyzes your JavaScript files to identify dynamically added classes.  This is significantly more complex and may not be necessary if the first approach works effectively.

By adjusting the `content` array or using a custom purge function, Tailwind CSS will include the dynamically added classes in the final CSS bundle, preventing the style loss.