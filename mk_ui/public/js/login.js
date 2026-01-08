

let screenWidth = window.innerWidth;

window.addEventListener("resize", function () {
    screenWidth = window.innerWidth;
});

(function loadAleoFont() {
    if (document.getElementById('aleo-font')) return;

    const link = document.createElement('link');
    link.id = 'aleo-font';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Aleo:wght@300;400;700;800&display=swap';

    document.head.appendChild(link);
})();


const loginPage = () => {
    const main = document.querySelector(".container.my-4");
    const login = document.getElementById('page-login');
    const signuptext = document.querySelector('.text-center.sign-up-message')
    if (signuptext) {
        signuptext.style.display = 'none'
    }
    if (login) {
        login.style.background =
            "url('/assets/mk_ui/images/123.png') center / cover no-repeat";

    }
    if (main) {
        main.style.backgroundColor = 'transparent'
    }
    const maincontainer = document.querySelector('.page_content');
    const loginFormContainer = document.querySelector('.page_content div');
    if (maincontainer) {
        maincontainer.style.alignContent = 'center';
        maincontainer.style.height = screenWidth <= 500 ? '100vh' : '100vh';


        if (loginFormContainer) {
            loginFormContainer.style.width = '100%';
            loginFormContainer.style.padding = '0px';
            const loginCard = loginFormContainer.querySelector('.for-login');
            if (loginCard) {
                loginCard.style.display = 'flex';
                loginCard.style.width = '100%';
                loginCard.style.borderRadius = '8px';
                loginCard.style.margin = screenWidth < 500 && '40px auto';
                loginCard.style.padding = '0px';
                loginCard.style.justifyContent = 'center';
                loginCard.style.flexDirection = screenWidth <= 500 ? 'column' : 'row';


                const pagecardHead = loginCard.querySelector('.page-card-head');
                if (pagecardHead) {
                    pagecardHead.style.display = 'none';
                }
                const formContent = loginCard.querySelector('.login-content.page-card');
                const loginBox = formContent.querySelector('.form-signin.form-login')
                if (formContent) {
                    formContent.style.width = screenWidth <= 500 && '90%';
                    formContent.style.minWidth = '300px';
                    formContent.style.display = 'flex';
                    formContent.style.position = 'absolute';
                    formContent.style.marginLeft = screenWidth > 500 && '63%';
                    formContent.style.justifyContent = 'center';
                    formContent.style.flexDirection = 'column';
                    formContent.style.textAlign = 'center';
                    formContent.style.background = screenWidth < 500 ?
                        "linear-gradient(rgba(95, 93, 93, 0.5), rgba(0,0,0,0.5))" : 'transparent';
                    formContent.style.border = 'none';
                    formContent.style.marginTop = screenWidth <= 500 ? '-50%' : '-17%';

                    const mklogo = document.createElement('img');
                    mklogo.src = '/assets/mk_ui/images/mk_logo.png';
                    mklogo.style.width = screenWidth <= 500 ? '130px' : '170px';
                    mklogo.style.display = 'block';
                    mklogo.style.padding = '10px';
                    mklogo.style.background = '#fff';
                    mklogo.style.borderRadius = '5px';
                    mklogo.style.margin = screenWidth <= 500 ? '20px auto auto auto' : 'auto';
                    if (loginBox) {
                        formContent.insertBefore(mklogo, loginBox);
                        loginBox.style.marginTop = '30px'
                        const pagecardbody = loginBox.querySelector('.page-card-body')
                        const pagecardbodysecondary = pagecardbody.querySelector('.page-card-body');
                        const loginbutton = pagecardbody.querySelector('.page-card-actions button');
                        const poweredby = pagecardbody.querySelector('.social-logins.text-center');
                        if (loginbutton) {
                            loginbutton.style.background = '#007e85';
                            loginbutton.style.borderRadius = '5px';

                            loginbutton.addEventListener('mouseover', () => {
                                loginbutton.style.backgroundColor = '#956438';
                            });
                            loginbutton.addEventListener('mouseout', () => {
                                loginbutton.style.backgroundColor = '#007e85';
                            })
                        }
                        if (poweredby) {
                            poweredby.innerHTML = '';
                            poweredby.innerHTML = `
                                              <footer>
                                                       Powered by 
                                                      <a href="https://hippoclouds.com/" target="_blank"><span style='color : #017bcf;'>hippo</span><span style='color : #fc3f19d8;'>cloud<span></a>
                                                 </footer>
                                                `;
                            poweredby.style.color = screenWidth < 500 ? '#fff' : '#525252'
                            poweredby.style.fontSize = '14px';
                            poweredby.style.fontWeight = '400';
                            poweredby.style.paddingTop = '10px';
                            poweredby.style.opacity = '1';
                            const hippotext = poweredby.querySelector('a')
                            {
                                if (hippotext) {
                                    hippotext.style.transition = '200ms';
                                    hippotext.style.fontStyle = 'italic';
                                    hippotext.style.fontSize = '15px';
                                    hippotext.style.textDecoration = 'none';
                                    hippotext.style.fontFamily = 'Aleo';
                                    hippotext.style.fontWeight = '700';
                                }
                            }
                        }
                        if (pagecardbody) {
                            pagecardbody.style.gap = '20px';

                            if (pagecardbodysecondary) {
                                const emailfield = pagecardbodysecondary.querySelector('.form-group .email-field');
                                const passwordfield = pagecardbodysecondary.querySelector('.form-group .password-field');
                                const forgot = pagecardbodysecondary.querySelector('.forgot-password-message a');

                                if (emailfield) {
                                    const emailInputField = emailfield.querySelector('input');
                                    const emailInputFieldSvg = emailfield.querySelector('svg');

                                    if (emailInputField) {
                                        emailInputField.style.background = 'transparent';
                                        emailfield.style.border = 'none';
                                        emailfield.style.background = 'transparent';
                                        emailfield.style.height = '30px';
                                        emailfield.style.borderRadius = '5px';
                                        emailfield.style.marginBottom = '20px';

                                        emailInputField.placeholder = 'Add your email here';

                                        emailInputField.classList.add('email-placeholder');

                                        const style = document.createElement('style');
                                        style.textContent = `
                                                    .email-placeholder::placeholder {
                                                        opacity : 0.8;
                                                        color : #888;
                                                        font-size : 13px
                                                    `;
                                        document.head.appendChild(style);
                                    }

                                    if (emailInputFieldSvg) {
                                        emailInputFieldSvg.remove();
                                    }

                                    const img = document.createElement('img');
                                    img.src = '/assets/mk_ui/images/envelope.svg';
                                    img.style.position = 'absolute';
                                    img.style.left = '8px';
                                    img.style.top = '48%';
                                    img.style.transform = 'translateY(-50%)';
                                    img.style.width = '20px';
                                    img.style.height = '20px';
                                    img.style.pointerEvents = 'none';

                                    emailfield.appendChild(img);
                                }




                                if (passwordfield) {
                                    const passwordInputField = passwordfield.querySelector('input');
                                    const toggleSpan = passwordfield.querySelector('.toggle-password');
                                    const passwordInputFieldSvg = passwordfield.querySelector('svg');

                                    passwordfield.style.position = 'relative';

                                    if (passwordInputField) {
                                        passwordInputField.style.background = 'transparent';
                                        passwordInputField.style.paddingLeft = '35px';
                                        passwordInputField.style.paddingRight = '40px';

                                        passwordfield.style.backgroundColor = 'transparent';
                                        passwordfield.style.border = 'none';
                                        passwordfield.style.height = '30px';
                                        passwordfield.style.borderRadius = '5px';

                                        passwordInputField.placeholder = 'Add password here';
                                        passwordInputField.classList.add('password-placeholder');

                                        const style = document.createElement('style');
                                        style.textContent = `
                                                            .password-placeholder::placeholder {
                                                                opacity: 0.8;
                                                                color: #888;
                                                                font-size: 13px;
                                                            }
                                                        `;
                                        document.head.appendChild(style);
                                    }

                                    if (passwordInputFieldSvg) {
                                        passwordInputFieldSvg.remove();
                                    }
                                    const lockImg = document.createElement('img');
                                    lockImg.src = '/assets/mk_ui/images/padlock.png';
                                    lockImg.style.position = 'absolute';
                                    lockImg.style.left = '8px';
                                    lockImg.style.top = '50%';
                                    lockImg.style.transform = 'translateY(-50%)';
                                    lockImg.style.width = '18px';
                                    lockImg.style.height = '18px';
                                    lockImg.style.pointerEvents = 'none';

                                    passwordfield.appendChild(lockImg);

                                    if (toggleSpan) {
                                        toggleSpan.remove();

                                        const eyeImg = document.createElement('img');
                                        eyeImg.src = '/assets/mk_ui/images/eye-regular.svg';
                                        eyeImg.style.position = 'absolute';
                                        eyeImg.style.right = '10px';
                                        eyeImg.style.top = '50%';
                                        eyeImg.style.transform = 'translateY(-50%)';
                                        eyeImg.style.width = '18px';
                                        eyeImg.style.height = '18px';
                                        eyeImg.style.cursor = 'pointer';

                                        eyeImg.addEventListener('click', () => {
                                            if (passwordInputField.type === 'password') {
                                                passwordInputField.type = 'text';
                                                eyeImg.src = '/assets/mk_ui/images/eye-slash.svg';
                                            } else {
                                                passwordInputField.type = 'password';
                                                eyeImg.src = '/assets/mk_ui/images/eye-regular.svg';
                                            }
                                        });

                                        passwordfield.appendChild(eyeImg);
                                    }
                                }


                                if (forgot) {
                                    forgot.style.transition = '200ms';
                                    forgot.style.color = screenWidth < 500 ? '#fff' : '#525252';
                                    forgot.style.fontSize = '14px';

                                    forgot.addEventListener('mouseover', () => {
                                        forgot.style.textDecoration = 'solid underline';
                                    })
                                    forgot.addEventListener('mouseout', () => {
                                        forgot.style.textDecoration = 'none';
                                    })
                                }


                            }
                        }


                    }



                }
            }
        }
    }
}

const forgotPage = () => {
    const maincontainer = document.querySelector('.page_content');
    const loginFormContainer = document.querySelector('.page_content div');
    if (maincontainer) {
        maincontainer.style.alignContent = 'center';
        maincontainer.style.height = screenWidth <= 500 ? '100vh' : '100vh';

        const ForgotCard = loginFormContainer.querySelector('.for-forgot');
        if (ForgotCard) {
            const navbar = document.querySelector('.navbar.navbar-light.navbar-expand-lg');
            if (navbar) {
                navbar.style.display = 'none'
            }
            ForgotCard.style.display = 'flex';
            ForgotCard.style.width = '100%';
            ForgotCard.style.borderRadius = '8px';
            ForgotCard.style.padding = '0px';
            ForgotCard.style.margin = screenWidth < 500 && '40px auto';
            ForgotCard.style.justifyContent = 'center';
            ForgotCard.style.flexDirection = screenWidth <= 500 ? 'column' : 'row';


            const pagecardHead = ForgotCard.querySelector('.page-card-head');
            if (pagecardHead) {
                pagecardHead.style.display = 'none';
            }
            const formContent = ForgotCard.querySelector('.login-content.page-card');
            const forgotBox = formContent.querySelector('.form-signin.form-forgot')
            if (formContent) {

                formContent.style.width = screenWidth <= 500 && '90%';
                formContent.style.minWidth = '300px';
                formContent.style.display = 'flex';
                formContent.style.position = 'absolute';
                formContent.style.marginLeft = screenWidth > 500 && '63%';
                formContent.style.justifyContent = 'center';
                formContent.style.flexDirection = 'column';
                formContent.style.textAlign = 'center';
                formContent.style.background = screenWidth < 500 ?
                    "linear-gradient(rgba(95, 93, 93, 0.5), rgba(0,0,0,0.5))" : 'transparent';
                formContent.style.border = 'none';
                formContent.style.marginTop = screenWidth <= 500 ? '-50%' : '-17%';

                const mklogo = document.createElement('img');
                mklogo.src = '/assets/mk_ui/images/mk_logo.png';
                mklogo.style.width = screenWidth <= 500 ? '140px' : '170px';
                mklogo.style.display = 'block';
                mklogo.style.padding = '10px';
                mklogo.style.borderRadius = '5px';
                mklogo.style.background = '#fff';
                mklogo.style.margin = '0px auto 0px';
                if (forgotBox) {
                    formContent.insertBefore(mklogo, forgotBox);
                    forgotBox.style.marginTop = '30px'
                    forgotBox.style.width = screenWidth <= 500 ? '90%' : '300px'
                    const pagecardbody = forgotBox.querySelector('.page-card-body')
                    const forgotButtonDiv = forgotBox.querySelector('.page-card-actions');
                    const forgotButton = forgotBox.querySelector('.page-card-actions button');
                    const loginText = forgotBox.querySelector('.text-center.sign-up-message a');

                    if (loginText) {
                        loginText.style.color = screenWidth < 500 ? '#fff' : '#525252';
                        loginText.style.transition = '200ms';
                        loginText.style.display = '200ms';


                        const poweredby = document.createElement('footer')

                        poweredby.innerHTML = '';
                        poweredby.innerHTML = `
                                             <footer>
                                                       Powered by 
                                                      <a href="https://hippoclouds.com/" target="_blank"><span style='color : #017bcf;'>hippo</span><span style='color : #fc3f19d8;'>cloud</a>
                                                 </footer>
                                                `;
                        poweredby.style.color = screenWidth < 500 ? '#fff' : '#525252'
                        poweredby.style.fontSize = '15px';
                        poweredby.style.paddingTop = '10px';
                        poweredby.style.opacity = '1';
                        const hippotext = poweredby.querySelector('a')
                        {
                            if (hippotext) {
                                hippotext.style.color = '#fff';
                                hippotext.style.transition = '200ms';
                                hippotext.style.textDecoration = 'none';
                                hippotext.style.fontStyle = 'italic';
                                hippotext.style.fontSize = '15px';
                                hippotext.style.fontFamily = 'Aleo';
                                hippotext.style.fontWeight = '700';

                                poweredby.addEventListener('mouseover', () => {

                                    poweredby.style.opacity = '1';
                                })
                                poweredby.addEventListener('mouseout', () => {

                                    poweredby.style.opacity = '1';
                                })
                            }
                        }
                        forgotButtonDiv.appendChild(poweredby)
                    }

                    if (pagecardbody) {

                        const emailfield = pagecardbody.querySelector('.email-field');

                        if (emailfield) {
                            emailfield.style.marginTop = '-10px'
                            const emailinputfiled = emailfield.querySelector('input');
                            const emailinputfiledsvg = emailfield.querySelector('svg');
                            if (emailfield) {
                                emailinputfiled.style.backgroundColor = '#ffff'
                                emailfield.style.border = 'none'
                                emailfield.style.height = '30px'
                                emailfield.style.borderRadius = '5px'
                                emailfield.style.marginBottom = '20px';
                                if (emailinputfiledsvg) {
                                    emailinputfiledsvg.style.marginTop = '-2px';
                                    emailinputfiled.placeholder = 'Add your email here'
                                    emailinputfiled.classList.add('email-placeholder');

                                    const style = document.createElement('style');
                                    style.textContent = `
                                                    .email-placeholder::placeholder {
                                                        opacity : 0.8;
                                                        color : #888;
                                                        font-size : 13px
                                                    `;
                                    document.head.appendChild(style);

                                    if (emailinputfiledsvg) {
                                        emailinputfiledsvg.remove();
                                    }

                                    const img = document.createElement('img');
                                    img.src = '/assets/mk_ui/images/envelope.svg';
                                    img.style.position = 'absolute';
                                    img.style.left = '8px';
                                    img.style.top = '48%';
                                    img.style.transform = 'translateY(-50%)';
                                    img.style.width = '20px';
                                    img.style.height = '20px';
                                    img.style.pointerEvents = 'none';

                                    emailfield.appendChild(img);
                                }
                            }
                        }





                    }
                    if (forgotButton) {
                        forgotButton.style.backgroundColor = '#007e85';
                        forgotButton.style.borderRadius = '5px';
                        forgotButton.style.boxShadow = '0px 0px 5px grey';

                        forgotButton.addEventListener('mouseover', () => {
                            forgotButton.style.backgroundColor = '#956438';
                        });
                        forgotButton.addEventListener('mouseout', () => {
                            forgotButton.style.backgroundColor = '#007e85';
                        })
                    }





                }



            }
        }
    }
}


loginPage();
forgotPage();