module.exports = {
    plugins: [
        // eslint-disable-next-line global-require
        require('autoprefixer'),
        require('tailwindcss')('./config/tailwind.config.js'),
    ],
};
