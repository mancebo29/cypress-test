describe('Example Functional Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to the homepage', () => {
    cy.url().should('be.equal', 'https://www.google.com/');
  });

  it('should search something', () => {
    cy.get('textarea').first().click();
    cy.get('textarea').first().type('What is cancer?');
    cy.get('input').contains(/Search|Buscar/).click({ force: true });
    cy.get('div').contains('Enfermedad en la que células anómalas se dividen sin control y destruyen los tejidos corporales.').should('be.visible');
  });

  it('should navigate to the wikipedia article', () => {
    cy.get('textarea').first().click();
    cy.get('textarea').first().type('What is cancer?');
    cy.get('input').contains(/Search|Buscar/).click({ force: true });
    cy.get('span').contains('Wikipedia').click();
  })
});
