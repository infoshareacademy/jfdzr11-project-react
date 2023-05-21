/// <reference types="cypress" />

import { CategoryLabel } from './constants';

declare global {
    namespace Cypress {
        interface Chainable {}
    }
}

// without any export or import ts will ignore global type declaration
export {};
