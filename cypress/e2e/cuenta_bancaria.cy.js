describe('Pruebas de Interfaz - Zero Webapp Security', function () {
  beforeEach(() => {
    // Previene que errores de certificado o JS del sitio web detengan la prueba
    Cypress.on('uncaught:exception', () => false);
  });

  it('Validación de flujo de navegación e interacción en cuenta bancaria', function () {
    // 1. Navegación inicial
    cy.visit('http://zero.webappsecurity.com');

    // 2. Interacciones y navegación a la sección de Online Banking
    cy.get('#onlineBankingMenu > div > strong').contains('Online Banking').click();
    cy.get('#online_banking_features').should('be.visible');

    // 3. Formulario de inicio de sesión e interacción de entradas
    cy.get('#signin_button').click();
    cy.get('#user_login').should('be.visible').clear().type('username');
    cy.get('#user_password').clear().type('password');
    cy.get('[name="submit"]').click();

    // 4. Aserciones finales de validación tras la interacción
    cy.url().should('include', 'zero.webappsecurity.com');
    cy.get('body').should('be.visible');
  });
});