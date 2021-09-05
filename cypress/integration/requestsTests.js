/// <reference types="cypress"/>

//run tests on the nikud search requests

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

  sizes.forEach((sizeValue,sizeKey) => {


    describe('requestsTests '+urlKey+' '+sizeKey,()=>{

    
      beforeEach(() => {
        cy.screenSize({size:sizeValue})
        cy.visitpage({url:urlValue})
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
})


