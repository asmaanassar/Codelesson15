/// <reference types ="Cypress"/>
describe('as Homework test', () => {
    it('calculate the total price for items have one price', () => {
        cy.visit("https://automationteststore.com/");
        //to pring the item itself so i can take the price out of it
        // cy.get('.thumbnail').as("items")
        // cy.get('@items').find('.oneprice').each((element,index,list)=>{
        //  cy.log("the" + element.text()+"is located at index"+index)   
        // }
        // )
        //////////////////////////////////////////
        //to print the item without $
        cy.get('.thumbnail').as("items")
        cy.get('@items').find('.oneprice').invoke('text').as('itemprice')
        cy.get('@itemprice').then((pricetext)=>{

           let Mylistofprices= pricetext.split("$")
           let total= 0
           for(let i=0;i<Mylistofprices.length;i++){
cy.log(Mylistofprices[i])
total+=Number(Mylistofprices[i])
           }
           cy.log("thi is the total    "+total)
        })
    });
    
});