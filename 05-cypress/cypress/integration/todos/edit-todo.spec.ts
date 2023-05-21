/// <reference types="cypress" />

import { CategoryLabel, CategoryValue } from "../../support/constants";

describe('Edit todo', () => {  
    const user1 = Cypress.env('USER_1');

    it('should edit todo name', () => {
      const name = 'Name' + new Date().getTime();
      const description = 'Description' + new Date().getTime();
      const newName = `${name}-v2`;

      cy.headlessLogin(user1.email, user1.password);
      cy.visit('/');
  
      cy.addTodo(name, description, CategoryLabel.Important)
      
      cy.get(`[data-testid="edit-button-${name}"]`).click();
      cy.get('#basic_name').clear().type(newName);
      cy.contains('Zapisz').click();
  
      expect(!!cy.get(`[data-testid="todo-row-${name}"]`).should('not.exist')).to.be.true;
      cy.get(`[data-testid="todo-row-${newName}"]`).should('be.visible').should('have.class', CategoryValue.Important);
    });

    it('should edit todo description', () => {
        const name = 'Name' + new Date().getTime();
        const description = 'Description' + new Date().getTime();
        const newDescription = `${description}-v2`;
    
        cy.addTodo(name, description, CategoryLabel.Important)
        
        cy.get(`[data-testid="edit-button-${name}"]`).click();
        cy.get('#basic_description').clear().type(newDescription);
        cy.contains('Zapisz').click();
    
        cy.get(`[data-testid="todo-row-${description}"]`).should('not.exist');
        cy.contains(newDescription).should('be.visible');
        cy.get(`[data-testid="todo-row-${name}"]`).should('have.class', CategoryValue.Important);
      });

      it('should edit todo category', () => {
        const name = 'Name' + new Date().getTime();
        const description = 'Description' + new Date().getTime();
    
        cy.addTodo(name, description, CategoryLabel.Important)
        
        cy.get(`[data-testid="edit-button-${name}"]`).click();
        cy.contains(CategoryLabel.Important).click();
        cy.contains(CategoryLabel.Standard).click();
        cy.contains('Zapisz').click();
    
        cy.get(`[data-testid="todo-row-${name}"]`).should('have.class', CategoryValue.Standard);
      });
  });
  