describe('Example Functional Tests', () => {
  before(() => {
    cy.visit('/');
  });

  it('should navigate to the homepage', () => {
    cy.contains('Programa').should('be.visible');
    cy.url().should('be.equal', 'https://fil2023-73crka.netlify.app/');
  });

  it('should open the event details of an event', () => {
    // cy.visit('/');
    cy.get('tr > td > div > :nth-child(1)').first().click();
    cy.get('h4').contains('Evento').should('be.visible');
    cy.contains('Programa').click({ force: true, multiple: true });
    cy.get('body').click(0,0);
    cy.get('h4').contains('Evento').should('not.be.visible');
  });

  // it('should fill out the text box form', () => {
  //   cy.get(':nth-child(1) > .group-header > .header-wrapper').should('be.visible');
  //   cy.get(':nth-child(1) > .element-list > .menu-list > #item-0')
  //     .should('be.visible')
  //     .should('contain', 'Text Box')
  //     .click();
  //   cy.get('#userName').type('Test');
  //   cy.get('#userEmail').type('Test@Test.com');
  //   cy.get('#currentAddress').type('Test');
  //   cy.get('#permanentAddress').type('Test');
  //   cy.get('#submit').click();
  //
  //   cy.get('#name').should('contain', 'Test');
  //   cy.get('#email').should('contain', 'Test@Test.com');
  //   cy.get('.border > #currentAddress').should('contain', 'Test');
  //   cy.get('.border > #permanentAddress').should('contain', 'Test');
  // });
});
