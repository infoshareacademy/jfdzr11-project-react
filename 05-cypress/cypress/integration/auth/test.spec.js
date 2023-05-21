describe('login validation', () => {
    it('show error if login data is invalid', () => {
        cy.visit('');
        cy.contains('label', 'Login').type('Juzek');
        cy.contains('label', 'Hasło').type('Juzek1234');
        cy.contains('Zaloguj').click();

        cy.contains('Niepoprawne dane logowania').should('be.visible');
    });

    it('if login data is valid redirect to main', () => {
        cy.visit('');
        cy.contains('label', 'Login').type('test@test.pl');
        cy.contains('label', 'Hasło').type('test1234');
        cy.contains('Zaloguj').click();

        cy.contains('Moja lista todo').should('be.visible');
    });

    it('backend is unavailable', () => {
        cy.intercept(
            {
                method: 'POST',
                url: `http://localhost:3010/login`,
            },
            {
                statusCode: 500,
                headers: { 'access-control-allow-origin': '*' },
                delayMs: 500,
            },
        );
        cy.visit('');
        cy.contains('label', 'Login').type('test@test.pl');
        cy.contains('label', 'Hasło').type('test1234');
        cy.contains('Zaloguj').click();

        cy.contains('Niespodziewany błąd serwera').should('be.visible');
    });

    it('redirect already logged user', () => {
        cy.headlessLogin();

        cy.visit('');
        cy.contains('Moja lista todo ').should('be.visible').should('have.text', 'Moja lista todo ');
    });

    it('right user name displayed', () => {
        cy.visit('');
        cy.contains('label', 'Login').type('test@test.pl');
        cy.contains('label', 'Hasło').type('test1234');
        cy.contains('Zaloguj').click();
        cy.contains('Hello Test !').should('be.visible').should('have.text', 'Hello Test !');
    });
});
