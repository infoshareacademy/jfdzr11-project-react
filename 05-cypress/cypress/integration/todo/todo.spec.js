describe('todo tests', () => {
    it.skip('new todo is shown on the list', () => {
        cy.headlessLogin();

        cy.visit('');
        cy.contains('Dodaj todo').click();
        cy.contains('label', 'Nazwa').click().type('Zadanie');
        cy.contains('label', 'Opis').click().type('Bojowe zadanie');
        cy.contains('label', 'Kategoria').click();
        cy.focused().click();
        cy.contains('Inne').click();
        cy.contains('Zapisz').click();

        cy.contains('Bojowe zadanie').should('be.visible').should('have.class', 'other');
    });

    it.skip('new todo is shown on the list', () => {
        cy.headlessLogin();

        cy.visit('');
        cy.contains('Dodaj todo').click();
        cy.contains('label', 'Nazwa').click().type('Drugie zadanie');
        cy.contains('label', 'Opis').click().type('Drugie bojowe zadanie');
        cy.contains('label', 'Kategoria').click();
        cy.focused().click();
        cy.contains('Ważna').click();
        cy.contains('Zapisz').click();

        cy.contains('Drugie bojowe zadanie').should('be.visible').should('have.class', 'important');
    });

    it.skip('new todo is shown on the list', () => {
        cy.headlessLogin();

        cy.visit('');
        cy.contains('Dodaj todo').click();
        cy.contains('label', 'Nazwa').click().type('Trzecie zadanie');
        cy.contains('label', 'Opis').click().type('Trzecie bojowe zadanie');
        cy.contains('label', 'Kategoria').click();
        cy.focused().click();
        cy.contains('Standardowa').click();
        cy.contains('Zapisz').click();

        cy.contains('Trzecie zadanie').should('be.visible');
        cy.contains('Trzecie bojowe zadanie').should('be.visible').should('have.class', 'standard');
    });

    it.skip('removing todo from list', () => {
        const todo = {
            name: 'Sprzątanie2',
            description: 'Sprzątanie kuchni',
            category: 'Inne',
        };
        cy.headlessLogin();

        cy.visit('');
        cy.contains('Dodaj todo').click();
        cy.contains('label', 'Nazwa').click().type(todo.name);
        cy.contains('label', 'Opis').click().type(todo.description);
        cy.contains('label', 'Kategoria').click();
        cy.focused().click();
        cy.contains(todo.category).click();
        cy.contains('Zapisz').click();

        cy.get(`[data-testid="remove-button-${todo.name}"]`).click();
        cy.contains('OK').click();
    });

    it('editing todo from list', () => {
        const todo = {
            name: 'Sprzątanie3',
            description: 'Sprzątanie pokoju',
            category: 'Inne',
        };
        cy.headlessLogin();

        cy.visit('');
        cy.contains('Dodaj todo').click();
        cy.contains('label', 'Nazwa').click().type(todo.name);
        cy.contains('label', 'Opis').click().type(todo.description);
        cy.contains('label', 'Kategoria').click();
        cy.focused().click();
        cy.contains(todo.category).click();
        cy.contains('Zapisz').click();

        cy.get(`[data-testid="edit-button-${todo.name}"]`).click();

        cy.focused().click({ force: true });
        cy.contains('label', 'Nazwa').type('{selectall}{backspace}');
        cy.contains('label', 'Nazwa').type('Rozwalenie pokoju');
        cy.contains('Zapisz').click();

        cy.contains('Rozwalenie pokoju').should('be.visible');
    });

    it('editing todo from list', () => {
        const todo = {
            name: 'Sprzątanie3',
            description: 'Sprzątanie pokoju',
            category: 'Inne',
        };
        cy.headlessLogin();

        cy.visit('');
        cy.contains('Dodaj todo').click();
        cy.contains('label', 'Nazwa').click().type(todo.name);
        cy.contains('label', 'Opis').click().type(todo.description);
        cy.contains('label', 'Kategoria').click();
        cy.focused().click();
        cy.contains(todo.category).click();
        cy.contains('Zapisz').click();

        cy.get(`[data-testid="edit-button-${todo.name}"]`).click();

        cy.focused().click({ force: true });
        cy.contains('label', 'Opis').type('{selectall}{backspace}');
        cy.contains('label', 'Opis').type('Rozwalenie pokoju');
        cy.contains('Zapisz').click();

        cy.contains('Rozwalenie pokoju').should('be.visible');
    });

    it('editing todo from list', () => {
        const todo = {
            name: 'Sprzątanie3',
            description: 'Sprzątanie pokoju',
            category: 'Inne',
        };
        cy.headlessLogin();

        cy.visit('');
        cy.contains('Dodaj todo').click();
        cy.contains('label', 'Nazwa').click().type(todo.name);
        cy.contains('label', 'Opis').click().type(todo.description);
        cy.contains('label', 'Kategoria').click();
        cy.focused().click();
        cy.contains(todo.category).click();
        cy.contains('Zapisz').click();

        cy.get(`[data-testid="edit-button-${todo.name}"]`).click();

        cy.focused().click({ force: true });
        cy.contains('label', 'Kategoria').click();
        cy.focused().click();
        cy.contains('Ważna').click();
        cy.contains('Zapisz').click();

        cy.contains('Rozwalenie pokoju').should('be.visible');
    });
});
