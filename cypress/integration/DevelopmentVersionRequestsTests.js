/// <reference types="cypress"/>

//run tests on the nikud search requests

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {


  describe('DevelopmentVersionRequestsTests',()=>{

    
    beforeEach(() => {
      cy.screenSize({size:size})
      cy.visitpage({url:'/'})
    })
  
    it('Error message for api response with a delay of 2 minutes when clicking the run butten'+
    ' of nikudsearch page',()=>{
      cy.nikudSearchRequest({
        url:'/api',
        message:'הופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
        delaySeconds:60*2
      })
    })
  
    
    it('Error message for api response with status code 500 when clicking the run butten of nikudsearch page',
    ()=>{
      cy.nikudSearchRequest({
        url:'/api',
        status:500,
        message:'הופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
      })
    })
  
    // it('Error message for typeaheadapi response with a delay of 2 minutes when clicking the run butten'+
    // ' of nikudsearch page',()=>{
    //   cy.nikudSearchRequest({
    //     url:'/typeaheadapi',
    //     message:'הופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
    //     delaySeconds:60*2
    //   })
    // })
  
    
    // it('Error message for typeaheadapi response with status code 500 when clicking the run butten of nikudsearch page',
    // ()=>{
    //   cy.nikudSearchRequest({
    //     url:'/typeaheadapi',
    //     status:500,
    //     message:'הופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
    //   })
    // })
    
  
  })
})

