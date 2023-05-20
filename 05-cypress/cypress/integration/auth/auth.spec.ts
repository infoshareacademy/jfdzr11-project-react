/// <reference types="cypress" />

describe('Todos authorization', () => {
    const user1 = Cypress.env('USER_1');
    const user2 = Cypress.env('USER_2');

    it('should display error on invalid credentials', () => {
        // given
        const login = 'LOGIN';
        const password = '1234';

        // when 
        cy.loginUI(login, password);
        
        // then
        cy.contains('Niepoprawne dane logowania');
    });
  
    it('should redirect to main page after login', () => {
        cy.loginUI(user1.email, user1.password);

        cy.contains('Moja lista todo');
    });
  
    it('should display message when backend is unavailable', () => {
        // ustaw przechwytywanie zapytań POST do loginu
        cy.intercept(
            {
                method: 'POST',
                url: `${Cypress.env().SERVER_URL}/login`
            },
            {
                statusCode: 500,
                headers: { 'access-control-allow-origin': '*' },
                delaysMs: 500
            }
        );

        cy.loginUI(user1.email, user1.password);

        cy.contains('Niespodziewany błąd serwera');
    });
  
    it('should redirect already logged in users', () => {
        cy.headlessLogin(user1.email, user1.password);
        cy.visit('');

        cy.contains('Moja lista todo');
    });

    it('should display name of USER_1', () => {
        cy.headlessLogin(user1.email, user1.password)
        cy.visit('');

        cy.contains(`Hello ${user1.email}`)
    });

    it('should display name of USER_2', () => {
        cy.headlessLogin(user2.email, user2.password)
        cy.visit('');

        cy.contains(`Hello ${user2.email}`)
    });
  });
