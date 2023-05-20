/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {

    }
  }
}

// without any export or import ts will ignore global type declaration
export {};


