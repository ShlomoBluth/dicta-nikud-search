/// <reference types="cypress"/>

//run basic tests on nikud search

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {

    describe('basicTests',()=>{
        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
        })
        
        it('Nikud search run',()=>{
            cy.nikudSearchRun()
            cy.get('.frame-area').should('contain','אִיש')
        })
    
    })
})
