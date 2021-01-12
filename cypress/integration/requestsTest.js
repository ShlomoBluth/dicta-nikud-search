/// <reference types="cypress"/>

//run tests on the nikud search requests

describe('RequestsTests',()=>{

    
  beforeEach(() => {
    cy.visit('https://nikudsearch.dicta.org.il/')
  })

  it('Error message for response with a delay of 2 minutes when clicking the run butten'+
  ' of nikudsearch page',()=>{
    cy.nikudSearchRequest({
      message:'הופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
      delaySeconds:60*2
    })
  })

  
  it('Error message for response with status code 500 when clicking the run butten of nikudsearch page',
  ()=>{
    cy.nikudSearchRequest({
      status:500,
      message:'הופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
    })
  })
  

})