<template>
    <div>
        <section class="page-contact section__container">
            <div class="container mx-auto">
                <div class="row">
                    <div class="contact-page__container col-12">
                        <h1> Laisser un petit mot. </h1>
                        <form @submit="submitForm">
                            <div class="form col-12">
                                <div class="row">
                                    <div class="form-group-50 col-12 col-lg-6">
                                        <div class="form-row">
                                            <label for="your-name"> Nom </label>
                                            <input type="text" name="name" placeholder v-model="name" />
                                        </div>
                                        <div class="form-row">
                                            <label for="email"> Email </label>
                                            <input type="text" name="email" placeholder v-model="email" />
                                        </div>
                                        <div class="form-row">
                                            <label for="subject"> Objet du message </label>
                                            <input type="text" name="subject" placeholder v-model="subject" />
                                        </div>
                                    </div>
                                    <div class="form-group-50 col-12 col-lg-6">
                                        <div class="form-row">
                                            <label for="message">Message </label>
                                            <textarea name="message" id="message-input" placeholder="Votre message"
                                                v-model="message"></textarea>
                                        </div>
                                        <div class="form-row">
                                            <input type="submit" name="submit" value="Envoyer ce message">
                                        </div>
                                    </div>
                                    <div v-if="errors.length">
                                        <b>Please correct the following error(s):</b>
                                        <ul>
                                            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                                        </ul>
                                    </div>
                                    <div class="form-sent" v-if="sent == 'true'"> Votre message à bien été envoyé </div>
                                </div>
                            </div>
                        </form>
                        <div class="informations-contact col-12">
                            <a href="tel:0607984123"> 0607984123 </a>
                            <a href="mailto:theo.chevessier@outlook.fr"> theo.chevessier@outlook.fr </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Contact',
        data() {
            return {
                sent: '',
                errors: [],
                name: null,
                email: null,
                subject: null,
                message: null,
            }
        },
        methods: {
            validEmail: function (email) {
                var re =
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
                return re.test(email);
            },
            submitForm(e) {
                e.preventDefault();
                this.errors = [];
                this.sent = 'false';

                if (!this.name) {
                    this.errors.push("Name required.");
                }
                if (!this.email) {
                    this.errors.push("Email required.");
                } else if (!this.validEmail(this.email)) {
                    this.errors.push("Valid email required.");
                }
                if (!this.subject) {
                    this.errors.push("Subject required.");
                }
                if (!this.message) {
                    this.errors.push("Message required.");
                }
                if (!this.errors.length) {
                    var bodyFormData = new FormData();
                    bodyFormData.set("your-name", this.name);
                    bodyFormData.set("your-email", this.email);
                    bodyFormData.set("your-subject", this.subject);
                    bodyFormData.set("your-message", this.message);

                    axios({
                            method: "post",
                            url: "https://portfolio-vue-wordpress.000webhostapp.com/wp-json/contact-form-7/v1/contact-forms/62/feedback",
                            data: bodyFormData,
                            config: {
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                }
                            },
                        })
                        .then(function (response) {
                            console.log(response);
                            this.sent = 'true';
                            return this.sent;
                        })
                        .catch(function (response) {
                            console.log(response, this.sent);
                        });
                }
            }
        }
    }
</script>

<style scoped>
    @import './../assets/css/variables.css';
    @import './../assets/css/normalize.css';



    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .page-contact .contact-page__container h1 {
        margin-bottom: 20px;
        font-size: 45px;
        margin-top: 0px;
        font-family: 'Bodoni Moda';
        color: #FF794F;
        position: relative;
        left: 0;
        animation: fadeInLeft 1s both;
        animation-delay: .8s;
    }

    .page-contact .contact-page__container {
        width: 90%;
    }

    .page-contact .contact-page__container .form {
        width: 100%;
        display: flex;
        margin-top: 50px;
        justify-content: space-between;
    }

    .page-contact .contact-page__container .form-group-50:nth-of-type(1) {
        border: none;
        padding: 0;
    }

    .page-contact .contact-page__container .form-group-50 .form-row input {
        display: block;
        width: 90%;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.288);
        padding: 10px 0;
        margin-bottom: 20px;
        background: none;
    }

    .page-contact .contact-page__container .form-group-50 .form-row input:focus {
        outline: none;
    }

    .page-contact .contact-page__container .form-group-50:nth-of-type(2) .form-row label {
        display: block;
        margin-bottom: 20px;
    }

    .page-contact .contact-page__container .form-group-50:nth-of-type(2) {
        position: relative;
        padding: 0;
    }

    .page-contact .contact-page__container .form-group-50:nth-of-type(2):before {
        content: '';
        display: block;
        width: 0.5px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: #000;
        z-index: -1;
    }

    .page-contact .contact-page__container .form-group-50:nth-of-type(2) .form-row:nth-of-type(1) {
        padding: 10px 30px;
    }

    .page-contact .contact-page__container .form-group-50:nth-of-type(2) .form-row textarea {
        width: 100%;
        min-height: 200px;
        border: none;
        background: none;
    }

    .page-contact .contact-page__container .form-group-50:nth-of-type(2) .form-row textarea:focus {
        outline: none;
    }

    .page-contact .contact-page__container .form-group-50:nth-of-type(2) .form-row input[type=submit] {
        width: 100%;
        height: 50px;
        border: none;
        background: #FF794F;
        z-index: 999;
        color: #fff;
        font-weight: 300;
        font-family: 'Ubuntu';
        font-size: 20px;
        transition: .2s ease;
        cursor: pointer;
        margin: 0;
    }

    .page-contact .contact-page__container .form-group-50:nth-of-type(2) .form-row input[type=submit]:hover {
        background: #da6643;
    }

    .page-contact .contact-page__container .form-group-50:nth-of-type(2) .form-row input[type=submit]:focus {
        outline: none;
    }

    .page-contact .contact-page__container .form-group-50 .form-row {
        margin: 0;
        display: block;
    }

    .page-contact .contact-page__container .row {
        width: 100%;
        margin: 0;
    }

    .page-contact .informations-contact {
        display: flex;
        justify-content: center;
        margin-top: 70px;
    }

    .page-contact .informations-contact a {
        color: #FF794F;
        font-size: 25px;
        margin-right: 50px;
    }

    .page-contact .informations-contact a {
        z-index: 1;
        color: #000;
        position: relative;
        overflow: hidden;
        margin-top: 20px;
        display: block;
        font-size: 19px;
        text-decoration: none;
        line-height: 30px;
        transition: .2s ease;
        animation: fadeInLeft 1s both;
        animation-delay: 1.6s;
    }

    .page-contact .informations-contact a:hover {
        color: var(--color-orange);
    }

    @media screen and (min-width: 450px) and (max-width: 800px) {
        .contact-page {
            width: 100%;
            height: 100%;
            padding-top: 120px;
        }

        .contact-page .contact-page__container .row {
            width: 80%;
            margin: 0 auto;
        }

        .contact-page .contact-page__container h1 {
            font-size: 35px;
            text-align: center;
        }

        .contact-page .contact-page__container .form-group-50 .form-row input {
            width: 100%;
            padding: 0;
        }

        .contact-page .contact-page__container .form-group-50:nth-of-type(2) .form-row:nth-of-type(1) {
            padding: 10px 0;
        }

        .contact-page .contact-page__container .form-group-50:nth-of-type(2) .form-row:nth-of-type(1) textarea {
            border: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.288);
        }

        .contact-page .contact-page__container .form-group-50:nth-of-type(2):before {
            display: none;
        }

        .contact-page .contact-page__container .form-group-50:nth-of-type(2) .form-row button {
            width: 190px;
            margin: 0 auto;
            display: block;
            font-size: 17px;
            height: 40px;
            margin-top: 20px;
        }

        .contact-page .informations-contact {
            display: block;
        }

        .contact-page .informations-contact {
            padding-top: 50px;
            margin: 0;
            padding-bottom: 70px;
        }

        .contact-page .informations-contact a span {
            font-size: 17px;
        }

        .contact-page .informations-contact a {
            margin: 0 auto;
        }
    }

    @media screen and (min-width: 300px) and (max-width: 450px) {
        .header__contact {
            background: #fff;
        }

        .contact-page {
            width: 100%;
            height: 100%;
            padding-top: 120px;
        }

        .contact-page .contact-page__container .row {
            width: 80%;
            margin: 0 auto;
        }

        .contact-page .contact-page__container h1 {
            font-size: 25px;
            text-align: center;
        }

        .contact-page .contact-page__container .form-group-50 .form-row input {
            width: 100%;
            padding: 0;
        }

        .contact-page .contact-page__container .form-group-50:nth-of-type(2) .form-row:nth-of-type(1) {
            padding: 10px 0;
        }

        .contact-page .contact-page__container .form-group-50:nth-of-type(2) .form-row:nth-of-type(1) textarea {
            border: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.288);
            min-height: 100px;
            height: 100px !important;
        }

        .contact-page .contact-page__container .form-group-50:nth-of-type(2):before {
            display: none;
        }

        .contact-page .contact-page__container .form-group-50:nth-of-type(2) .form-row button {
            width: 190px;
            margin: 0 auto;
            display: block;
            font-size: 17px;
            height: 40px;
            margin-top: 20px;
        }

        .contact-page .informations-contact {
            display: block;
        }

        .contact-page .informations-contact a {
            margin: 0 auto;
            text-align: center;
        }

        .contact-page .informations-contact {
            padding-top: 50px;
            margin: 0;
            padding-bottom: 70px;
        }

        .contact-page .informations-contact a span {
            font-size: 17px;
        }
    }
</style>