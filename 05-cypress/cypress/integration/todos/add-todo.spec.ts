/// <reference types="cypress" />

import { CategoryLabel, CategoryValue } from "../../support/constants";

describe('Add todo', () => {
    const user1 = Cypress.env('USER_1');

    it('should add todo with category important', () => {
      // given
      const name = 'Action' + new Date().getTime();
      const description = 'Description' + new Date().getTime();

      cy.headlessLogin(user1.email, user1.password);
      cy.visit('');
      
      // when
      cy.addTodo(name, description, CategoryLabel.Important)
      
      cy.screenshot('Adding todo');

      // then
      cy.contains(name).should('be.visible');
      cy.contains(description).should('be.visible');
      cy.get(`[data-testid="todo-row-${name}"]`).should('have.class', CategoryValue.Important);
    });

    it('should add todo with category standard', () => {
        // given
        const name = 'Action' + new Date().getTime();
        const description = 'Description' + new Date().getTime();

        cy.headlessLogin(user1.email, user1.password);
        cy.visit('');
        
        // when
        cy.addTodo(name, description, CategoryLabel.Standard)
        
        cy.screenshot('Adding todo2');
  
        // then
        cy.contains(name).should('be.visible');
        cy.contains(description).should('be.visible');
        cy.get(`[data-testid="todo-row-${name}"]`).should('have.class', CategoryValue.Standard);
      });

      it('should add todo with category other', () => {
        // given
        const name = 'Action' + new Date().getTime();
        const description = 'Description' + new Date().getTime();

        cy.headlessLogin(user1.email, user1.password);
        cy.visit('');
        
        // when
        cy.addTodo(name, description, CategoryLabel.Other)
        
        cy.screenshot('Adding todo3');
  
        // then
        cy.contains(name).should('be.visible');
        cy.contains(description).should('be.visible');
        cy.get(`[data-testid="todo-row-${name}"]`).should('have.class', CategoryValue.Other);
      });
  });
  