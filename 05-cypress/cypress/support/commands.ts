/// <reference types="cypress" />
declare global {
    namespace Cypress {
        interface Chainable {
            headlessLogin: () => void;
        }
    }
}
Cypress.Commands.add('headlessLogin', () => {
    return fetch(`http://localhost:3010/login`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            username: Cypress.env('LOGIN'),
            password: Cypress.env('PASSWORD'),
        }),
    })
        .then((res) => res.json())
        .then((user) => {
            if (typeof user.authToken === 'string') {
                window.localStorage.setItem('authToken', user.authToken);
                window.localStorage.setItem('userName', user.name);
            }
        });
});
// without any export or import ts will ignore global type declaration
export {};
