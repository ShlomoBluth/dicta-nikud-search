/// <reference types="cypress"/>

//run basic tests on nikud search

describe('basicTests',()=>{

    beforeEach(() => {
        cy.visit('https://nikudsearch.dicta.org.il/')
      })
    
    it('Nikud search run',()=>{
        cy.nikudSearchRun()
        cy.get('.frame-area').should('contain','אִמָּם')
    })

})