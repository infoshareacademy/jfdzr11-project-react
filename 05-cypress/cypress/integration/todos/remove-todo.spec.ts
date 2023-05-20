/// <reference types="cypress" />

describe('Remove todo', () => {
    const user1 = Cypress.env('USER_1');

    it('should remove todo', () => {
      // given
      const name = 'Action' + new Date().getTime();
      const description = 'Description' + new Date().getTime();

      cy.headlessLogin(user1.email, user1.password);
      cy.visit('/');

      cy.contains('Dodaj todo').click();
      cy.get('#basic_name').type(name);
      cy.get('#basic_description').type(description);
      cy.get('#basic_category').click();
      cy.contains('Ważna').click();
      cy.contains('Zapisz').click();
    
      cy.get(`[data-testid="remove-button-${name}"]`).click();
      cy.contains('OK').click();
  
      expect(!!cy.get(`[data-testid="todo-row-${name}"]`).should('not.exist')).to.be.true;
      cy.get(`[data-testid="todo-row-${name}"]`).should('not.exist');
    });
  });
  