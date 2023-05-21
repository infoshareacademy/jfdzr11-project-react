/// <reference types="cypress" />

import { CategoryLabel } from './constants';

declare global {
    namespace Cypress {
        interface Chainable {
            headlessLogin: (login: string, password: string) => void;
            loginUI: (login: string, password: string) => void;
            addTodo: (name: string, description: string, category: CategoryLabel) => void;
        }
    }
}

Cypress.Commands.add('headlessLogin', (login, password) => {
    return fetch(`${Cypress.env().SERVER_URL}/login`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            username: login,
            password,
        }),
    })
        .then((res) => res.json())
        .then(({ authToken, name }) => {
            if (typeof authToken === 'string') {
                window.localStorage.setItem('authToken', authToken);
            }

            if (typeof name === 'string') {
                window.localStorage.setItem('userName', login);
            }
        });
});

Cypress.Commands.add('loginUI', (login, password) => {
    cy.visit('');
    cy.contains('label', 'Login').type(login);
    cy.contains('label', 'Hasło').type(password);
    cy.contains('Zaloguj').click();
});

Cypress.Commands.add('addTodo', (name, description, category) => {
    cy.contains('Dodaj todo').click();
    cy.get('#basic_name').type(name);
    cy.get('#basic_description').type(description);
    cy.get('#basic_category').click();
    cy.contains(category).click();
    cy.contains('Zapisz').click();
});

// without any export or import ts will ignore global type declaration
export {};
