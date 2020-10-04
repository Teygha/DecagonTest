describe('Decagon Test', () => {
    it('Should Launch Decagon Homepage', () => {
      
        cy.visit('http://159.65.48.48/')
})

it('Should Login With Invalid Credentials', () => {
    cy.get('.btn-login').click();
    cy.get('[type=email]').click().type('QARECRUIT@decagonhq.com');
    cy.get('[type=password]').click().type('test');
    cy.get('[type=submit]').click();
    cy.url().should('not.include','/app/dashboard');
    cy.contains('Invalid password or email').should('be.visible');

}) 

it('Should Login With Valid Credentials', () => {
    cy.get('[type=email]').click().clear().type('QArecruit@decagonhq.com');
    cy.get('[type=password]').click().clear().type('test');
    cy.get('[type=submit]').click();
    cy.url().should('include','/app/dashboard');
    cy.wait(6000);

})

it('Should LogOut', () => {
    cy.get('.d-caret-down').click();
    cy.get('[href="/login"] > li').click();

})

it('Should Create Template', () => {
    cy.get('[type=email]').click().clear().type('QArecruit@decagonhq.com');
    cy.get('[type=password]').click().clear().type('test');
    cy.get('[type=submit]').click();
    cy.contains('Create Template').dblclick();
    cy.get('[name=title]').click().type('Tega');
    cy.get('[name=description]').click().type('This is my test');
    cy.get('[name=duration]').click().clear().type('2');
    cy.contains('Next').click();
    cy.get('[name=title]').click().type('Tega');
    cy.get('[name=description]').click().type('This is my test');
    cy.contains('Next').click();
    cy.get('[name=name]').click().type('Tegzy');
    cy.get('[name=categoryName]').click().type('Sports');
    cy.get('[name=scorePoint]').click().type('10');
    cy.contains('Next').click();
    cy.get('[name=question]').click().type('Why do you love cypress');
    cy.contains('Submit').click();

})

it('Should Create Cycle', () => {
    cy.contains('Cycle').click();
    cy.contains('Create Cycle').click();
    cy.get('[type=input').click().type('Tega');
    cy.get('.ui > .dropdown').click();
    cy.get('.selected > .text').contains('Tega').click();
    cy.contains('Submit').click();
})
    
});