<template>
    <div class="header__element_fixed">
        <div class="header__container">
            <div class="container mx-auto">
                <div class="logo__wrapper"> <img alt="Vue logo" :src="logoBlanc"></div>
                <div class="socials_medias">
                    <a href="#"> behance </a>
                    <a href="#"> instagram </a>
                </div>
            </div>
        </div>
        <div class="sidebar__container">
            <div class="menu__links navigation__links">
                <router-link to="/">01. Bienvenue.</router-link>
                <router-link to="/a-propos">02. A propos de moi</router-link>
                <router-link to="/mes-projets">03. Mes projets</router-link>
                <router-link to="/contact-moi">04. Me contacter</router-link>
            </div>
        </div>
    </div>
</template>

<script>

    import logoBlanc from './../assets/logo.svg';
    import logoNoir from './../assets/logo_dark.svg';


    export default {
        name: "Header",
        data() {
            return {
                logoBlanc: logoBlanc,
                logoNoir: logoNoir
            }
        },  
        mounted() {
            this.handleStyles()
        },

        methods: {
            handleStyles() {
                // Red style to the body tag for the home page
                if (['/'].includes(this.$route.path)) {
                    document.body.className = 'bg-black-body';
                    document.querySelector('.logo__wrapper img').src = logoBlanc;
                    // Pink style to the body tag for all other pages
                } else if (!['/'].includes(this.$route.path)) {
                    document.body.className = 'bg-white-body';
                    document.querySelector('.logo__wrapper img').src = logoNoir;
                }
            }
        },
        // Handle styles when the route changes
        watch: {
            '$route'() {
                this.handleStyles()
            }
        }
    }
</script>

<style lang="css" scoped>

    .header__container {
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9;
    }

    .header__container img {
        height: 100%;
    }

    .container {
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header__container a {
        transition: all .3s ease-in-out;
        mix-blend-mode: difference;
        margin: 0 15px;
    }
    
    .header__container a:hover {
        color: var(--color-orange);
        transition: all .3s ease-in-out;
    }

    .logo__wrapper {
        height: 70px;
        width: 70px;
    }

    .sidebar__container {
        width: 250px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9;
    }

    .menu__links a {
        width: fit-content;
        height: fit-content;
        display: block;
        text-align: left;
        margin: 50px 0;
    }
</style>