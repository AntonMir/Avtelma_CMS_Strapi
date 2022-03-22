// path: ./admin/src/app.js

import AuthLogo from './extensions/logoGif.gif';
import MenuLogo from './extensions/logo.jpg';
import favicon from './extensions/favicon.ico';

export default {
    config: {
        // Replace the Strapi logo in auth (login) views
        auth: {
            logo: AuthLogo,
        },
        // Replace the favicon
        head: {
            favicon: favicon,
        },
        // Add a new locale, other than 'en'
        locales: ['en', 'ru'],
        // Replace the Strapi logo in the main navigation
        menu: {
            logo: MenuLogo,
        },
        // Override or extend the theme
        theme: {
            colors: {
                alternative100: '#f6ecfc',
                alternative200: '#e0c1f4',
                alternative500: '#ac73e6',
                alternative600: '#9736e8',
                alternative700: '#8312d1',
                danger700: '#b72b1a'
            },
        },
        // Extend the translations
        translations: {
            ru: {
                // страница авторизации
                "Auth.form.welcome.subtitle": "Войдите в свою учетную запись Avtelma",
                "Auth.form.welcome.title": "Панель адинистратора",
                "Auth.form.email.label": "Логин",
                "app.components.LeftMenu.navbrand.title": "Avtelma",
                "app.components.LeftMenu.navbrand.workplace": "Панель инструментов",
                // Панель инструментов
                "content-manager.plugin.name": "Content Manager",
                "app.components.LeftMenuLinkContainer.listPlugins": "Плагины",
                // Приветствие
                "app.components.HomePage.welcomeBlock.content.again": `
                    Панель администрации Avtelma использует технологию CMS Strapi. 
                `,

            },
            en: {
                // страница авторизации
                "Auth.form.welcome.subtitle": "Sign in to your Avtelma account",
                "Auth.form.welcome.title": "Administrator panel",
                "Auth.form.email.label": "Login",
                "app.components.LeftMenu.navbrand.title": "Avtelma",
                "app.components.LeftMenu.navbrand.workplace": "Dashboard",
                // Панель инструментов
                "content-manager.plugin.name": "Content Manager",
                "app.components.LeftMenuLinkContainer.listPlugins": "Plugins",
                // Приветствие
                "app.components.HomePage.welcomeBlock.content.again": `
                    The Avtelma administration panel uses CMS Strapi.
                `,
            },
        },
        // Disable video tutorials
        tutorials: false,
        // Disable notifications about new Strapi releases
        notifications: { release: false },
    },

    bootstrap(app) {
        console.log(app);
    },
};