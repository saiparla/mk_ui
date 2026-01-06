

let screenWidth = window.innerWidth;

window.addEventListener("resize", function () {
    screenWidth = window.innerWidth;
});


const loginPage = () => {
    const main = document.querySelector(".container.my-4");
    const login = document.getElementById('page-login');
    const signuptext = document.querySelector('.text-center.sign-up-message')
    if (signuptext) {
        signuptext.style.display = 'none'
    }
    if (login) {
        login.style.background = '#fffdf7'
    }
    if (main) {
        main.style.backgroundColor = '#fffdf7'
    }
    const maincontainer = document.querySelector('.page_content');
    const loginFormContainer = document.querySelector('.page_content div');
    if (maincontainer) {
        maincontainer.style.alignContent = 'center';
        maincontainer.style.height = screenWidth <= 500 ? '100vh' : '80vh';


        if (loginFormContainer) {
            loginFormContainer.style.width = '100%';
            loginFormContainer.style.margin = 'auto';
            loginFormContainer.style.padding = '0px';
            const loginCard = loginFormContainer.querySelector('.for-login');
            if (loginCard) {
                loginCard.style.display = 'flex';
                loginCard.style.width = '100%';
                loginCard.style.borderRadius = '8px';
                loginCard.style.padding = '0px';
                loginCard.style.justifyContent = 'space-between';
                loginCard.style.flexDirection = screenWidth <= 500 ? 'column' : 'row';
                loginCard.style.marginTop = screenWidth <= 500 ? '-280px' : '0px';
                // loginCard.style.boxShadow = screenWidth <= 500 ? '0px' : '0px 0px 5px grey';

                const pagecardHead = loginCard.querySelector('.page-card-head');
                if (pagecardHead) {

                    // pagecardHead.style.width = screenWidth <= 500 ? '100%' : '50%';
                    // pagecardHead.style.maxWidth = '400px';
                    // pagecardHead.style.flex = '1';
                    pagecardHead.style.display = 'flex';
                    pagecardHead.style.justifyContent = screenWidth <= 500 ? 'start' : 'center';
                    pagecardHead.style.flexDirection = 'column';
                    pagecardHead.style.textAlign = 'center';
                    pagecardHead.style.color = '#007e85';
                    // pagecardHead.style.backgroundColor = screenWidth <= 500 ? 'transparent' : '#f4f9fcff'
                    // pagecardHead.style.borderRadius = screenWidth <= 500 ? '0px' : '10px  0px 0px 10px'
                    pagecardHead.style.marginTop = screenWidth <= 500 ? '-10px' : '0px'

                    const applogo = pagecardHead.querySelector('.app-logo')
                    if (applogo) {
                        applogo.style.display = 'none'
                    }
                    const welcomeText = pagecardHead.querySelector('h4')
                    if (welcomeText) {
                        welcomeText.innerHTML = 'Welcome Back!'
                        welcomeText.style.fontSize = '28px'
                        welcomeText.style.fontWeight = '800'
                        welcomeText.style.margin = '0px 0px 0px'
                        welcomeText.style.fontFamily = 'times'


                        const manImage = document.createElement('img');
                        manImage.src = '/assets/mk_ui/images/mk_logo.png';
                        manImage.style.height = screenWidth <= 500 ? '100px' : '165px';
                        manImage.style.marginBottom = '15px';
                        manImage.style.marginTop = '30px';
                        // manImage.style.filter = 'drop-shadow(0px 0px 4px grey)';
                        manImage.style.display = 'block';
                        manImage.style.margin = '30px auto 15px';
                        manImage.style.flexShrink = '0';
                        manImage.style.maxWidth = '165px';
                        pagecardHead.append(manImage)

                        const paraText = document.createElement('p');
                        paraText.innerHTML = 'Log in and take control.';
                        paraText.style.fontSize = '12px'
                        paraText.style.margin = '0px'
                        paraText.style.lineHeight = '2'
                        paraText.style.color = '#007e85';

                        pagecardHead.append(paraText);





                    }
                }
                const formContent = loginCard.querySelector('.login-content.page-card');
                const loginBox = formContent.querySelector('.form-signin.form-login')
                if (formContent) {
                    // formContent.style.flex = '1';
                    // formContent.style.width = screenWidth <= 500 ? '100%' : '50%';
                    formContent.style.minWidth = '300px';
                    formContent.style.display = 'flex';
                    formContent.style.justifyContent = 'center';
                    formContent.style.flexDirection = 'column';
                    formContent.style.textAlign = 'center';
                    formContent.style.backgroundColor = '#fff';
                    formContent.style.border = 'none';
                    formContent.style.padding = screenWidth <= 500 ? '5px' : '30px';
                    formContent.style.borderRadius = screenWidth <= 500 ? '5px' : '10px';
                    formContent.style.boxShadow = screenWidth <= 500 ? '0px 0px 5px grey' : '0px 0px 5px grey';
                    // formContent.style.marginTop = screenWidth <= 500 ? '-10px' : '0px';

                    const mklogo = document.createElement('img');
                    mklogo.src = '/assets/mk_ui/images/mk_logo.png';
                    mklogo.style.width = screenWidth <= 500 ? '130px' : '170px';
                    mklogo.style.display = 'block';
                    mklogo.style.margin = screenWidth <= 500 ? '20px auto auto auto' : 'auto';
                    if (loginBox) {
                        formContent.insertBefore(mklogo, loginBox);
                        loginBox.style.marginTop = '30px'
                        // loginBox.style.width = screenWidth <= 500 ? '100%' : '300px'
                        const pagecardbody = loginBox.querySelector('.page-card-body')
                        const pagecardbodysecondary = pagecardbody.querySelector('.page-card-body');
                        const loginbutton = pagecardbody.querySelector('.page-card-actions button');
                        const poweredby = pagecardbody.querySelector('.social-logins.text-center');
                        if (loginbutton) {
                            loginbutton.style.backgroundColor = '#007e85';
                            loginbutton.style.borderRadius = '5px';
                            loginbutton.style.boxShadow = '0px 0px 5px grey';

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
                                                      <a href="https://hippoclouds.com/" target="_blank">HippoCloud</a>
                                                 </footer>
                                                `;
                            poweredby.style.color = '#666'
                            poweredby.style.fontSize = '14px';
                            poweredby.style.fontWeight = '700';
                            poweredby.style.paddingTop = '10px';
                            poweredby.style.opacity = '0.5';
                            const hippotext = poweredby.querySelector('a')
                            {
                                if (hippotext) {
                                    hippotext.style.color = '#007e85';
                                    hippotext.style.transition = '200ms';

                                    poweredby.addEventListener('mouseover', () => {

                                        poweredby.style.opacity = '1';
                                    })
                                    poweredby.addEventListener('mouseout', () => {

                                        poweredby.style.opacity = '0.5';
                                    })
                                }
                            }
                        }
                        if (pagecardbody) {
                            pagecardbody.style.gap = '20px';
                            // pagecardbodysecondary.style.display = 'none'
                            if (pagecardbodysecondary) {
                                const emailfield = pagecardbodysecondary.querySelector('.form-group .email-field');
                                const passwordfield = pagecardbodysecondary.querySelector('.form-group .password-field');
                                const forgot = pagecardbodysecondary.querySelector('.forgot-password-message a');

                                if (emailfield) {
                                    const emailinputfiled = emailfield.querySelector('input');
                                    const emailinputfiledsvg = emailfield.querySelector('svg');
                                    if (emailfield) {
                                        emailinputfiled.style.backgroundColor = '#ffff'
                                        emailfield.style.border = 'none'
                                        emailfield.style.height = '30px'
                                        emailfield.style.borderRadius = '5px'
                                        emailfield.style.boxShadow = '0px 0px 5px grey';
                                        emailfield.style.marginBottom = '20px';
                                        if (emailinputfiledsvg) {
                                            emailinputfiledsvg.style.marginTop = '2px';
                                            emailinputfiled.placeholder = 'Add your email here'

                                        }
                                    }
                                }
                                if (passwordfield) {
                                    const passowordinputfiled = passwordfield.querySelector('input');
                                    const passowordinputfiledsvg = passwordfield.querySelector('svg');
                                    if (passwordfield) {
                                        passowordinputfiled.style.backgroundColor = '#ffff'
                                        passwordfield.style.border = 'none'
                                        passwordfield.style.height = '30px'
                                        passwordfield.style.borderRadius = '5px'
                                        passwordfield.style.boxShadow = '0px 0px 5px grey';
                                        if (passowordinputfiledsvg) {
                                            passowordinputfiled.placeholder = 'Add your password here';
                                            passowordinputfiledsvg.style.marginTop = '2px';

                                        }
                                    }
                                }
                                if (forgot) {
                                    forgot.style.transition = '200ms';
                                    forgot.style.color = '#525252';

                                    forgot.addEventListener('mouseover', () => {
                                        forgot.style.color = '#007e85';
                                    })
                                    forgot.addEventListener('mouseout', () => {
                                        forgot.style.color = '#525252';
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
        maincontainer.style.height = screenWidth <= 500 ? '100vh' : '80vh';

        const ForgotCard = loginFormContainer.querySelector('.for-forgot');
        if (ForgotCard) {
            ForgotCard.style.display = 'flex';
            ForgotCard.style.width = '100%';
            ForgotCard.style.borderRadius = '8px';
            ForgotCard.style.padding = '0px';
            ForgotCard.style.justifyContent = screenWidth <= 500 ? 'center' : 'space-between';
            ForgotCard.style.flexDirection = screenWidth <= 500 ? 'column' : 'row';
            // ForgotCard.style.boxShadow = screenWidth <= 500 ? 'none' : '0px 0px 5px grey';
            ForgotCard.style.marginTop = screenWidth <= 500 ? '-280px' : '0px 0px 5px grey';

            const pagecardHead = ForgotCard.querySelector('.page-card-head');
            if (pagecardHead) {

                // pagecardHead.style.width = screenWidth <= 500 ? '100%' : '50%';
                // pagecardHead.style.maxWidth = '450px';
                // pagecardHead.style.flex = '1';
                pagecardHead.style.display = 'flex';
                pagecardHead.style.justifyContent = 'center';
                pagecardHead.style.flexDirection = 'column';
                pagecardHead.style.textAlign = 'center';
                pagecardHead.style.color = '#007e85';
                // pagecardHead.style.backgroundColor = screenWidth <= 500 ? 'transparent' : '#f4f9fcff'
                // pagecardHead.style.borderRadius = screenWidth <= 500 ? '0px' : '10px 0px 0px 10px'

                const applogo = pagecardHead.querySelector('.app-logo')
                if (applogo) {
                    applogo.style.display = 'none'
                }
                const welcomeText = pagecardHead.querySelector('h4')
                if (welcomeText) {
                    welcomeText.innerHTML = 'Forgot password?'
                    welcomeText.style.fontSize = '28px'
                    welcomeText.style.fontWeight = '800'
                    welcomeText.style.margin = '0px 0px 0px'
                    welcomeText.style.fontFamily = 'times'
                    const manImage = document.createElement('img');
                    manImage.src = '/assets/mk_ui/images/mk_logo.png';
                    manImage.style.height = screenWidth <= 500 ? '200px' : '250px';
                    // manImage.style.filter = 'drop-shadow(0px 0px 4px grey)';
                    manImage.style.display = 'block';
                    manImage.style.margin = '0px auto 15px';
                    manImage.style.flexShrink = '0';
                    manImage.style.minWidth = '165px';
                    pagecardHead.append(manImage)

                    const paraText = document.createElement('p');
                    paraText.innerHTML = 'Kindly proceed to the password reset page.';
                    paraText.style.fontSize = '12px'
                    paraText.style.margin = '0px'
                    paraText.style.marginTop = '10px'
                    // paraText.style.lineHeight = '2'
                    paraText.style.color = '#007e85';

                    pagecardHead.append(paraText);





                }
            }
            const formContent = ForgotCard.querySelector('.login-content.page-card');
            const forgotBox = formContent.querySelector('.form-signin.form-forgot')
            if (formContent) {
                // formContent.style.flex = '1';
                // formContent.style.width = screenWidth <= 500 ? '100%' : '50%';
                // formContent.style.maxWidth = '500px';
                formContent.style.display = 'flex';
                formContent.style.justifyContent = 'center';
                formContent.style.flexDirection = 'column';
                formContent.style.textAlign = 'center';
                formContent.style.backgroundColor = '#fff';
                formContent.style.borderRadius = screenWidth <= 500 ? '8px' : '0px 10px 10px 0px';
                formContent.style.boxShadow = screenWidth <= 500 ? '0px 0px 5px  grey' : 'none';
                formContent.style.padding = screenWidth <= 500 ? '10px ' : '30px';

                const mklogo = document.createElement('img');
                mklogo.src = '/assets/mk_ui/images/mk_logo.png';
                mklogo.style.width = screenWidth <= 500 ? '140px' : '170px';
                mklogo.style.display = 'block';
                mklogo.style.margin = '0px auto 0px';
                if (forgotBox) {
                    formContent.insertBefore(mklogo, forgotBox);
                    forgotBox.style.marginTop = '30px'
                    forgotBox.style.width = screenWidth <= 500 ? '90%' : '300px'
                    const pagecardbody = forgotBox.querySelector('.page-card-body')
                    const forgotButtonDiv = forgotBox.querySelector('.page-card-actions');
                    const forgotButton = forgotBox.querySelector('.page-card-actions button');
                    const loginText = forgotBox.querySelector('.text-center.sign-up-message a');
                    // const poweredby = pagecardbody.querySelector('.social-logins.text-center');
                    if (loginText) {
                        loginText.style.color = '#525252';
                        loginText.style.transition = '200ms';
                        loginText.style.display = '200ms';

                        loginText.addEventListener('mouseover', () => {
                            loginText.style.color = '#007e85';
                        });
                        loginText.addEventListener('mouseout', () => {
                            loginText.style.color = '#525252';
                        })
                        const poweredby = document.createElement('footer')

                        poweredby.innerHTML = '';
                        poweredby.innerHTML = `
                                           
                                                       Powered by 
                                                      <a href="https://hippoclouds.com/" target="_blank">HippoCloud</a>
                                                `;
                        poweredby.style.color = '#666'
                        poweredby.style.fontSize = '14px';
                        poweredby.style.fontWeight = '700';
                        poweredby.style.paddingTop = '10px';
                        poweredby.style.opacity = '0.5';
                        const hippotext = poweredby.querySelector('a')
                        {
                            if (hippotext) {
                                hippotext.style.color = '#007e85';
                                hippotext.style.transition = '200ms';

                                poweredby.addEventListener('mouseover', () => {

                                    poweredby.style.opacity = '1';
                                })
                                poweredby.addEventListener('mouseout', () => {

                                    poweredby.style.opacity = '0.5';
                                })
                            }
                        }
                        forgotButtonDiv.appendChild(poweredby)
                    }
                    // forgotButton.append(poweredby)

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
                                emailfield.style.boxShadow = '0px 0px 5px grey';
                                emailfield.style.marginBottom = '20px';
                                if (emailinputfiledsvg) {
                                    emailinputfiledsvg.style.marginTop = '1px';
                                    emailinputfiled.placeholder = 'Add your email here'

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