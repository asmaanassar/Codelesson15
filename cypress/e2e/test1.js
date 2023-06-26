/// <reference types ="Cypress"/>
describe('my first test', () => {
    it('print the price for each item that has one price without dolar sign', () => {
        cy.visit("https://automationteststore.com/");
        /*cy.get correct but try another one*/
        /*first issue*/
       // cy.get("a[href*='product/product&produc']").contains("BeneFit Girl Meets Pearl").click()
       //cy.get("a[href*='product/category&path']").contains("Hair Care").click()
       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

       /*secound issue*/
    //    let Myitem = cy.get("a[href*='product/category&path']").contains("Books")
    //     Myitem.click()


    /* each*/
// cy .get("a[href*='product/category&path']").contains("Hair Care").click()
// cy.get(".fixed_wrapper .prdocutname").each((element,index,list)=>{
// if(element.text().includes("Seaweed")){
//     cy.wrap(element).click()
// }

// })

/////////////////////////////////////////////////////////////
/*eq spasific index & invoke & as(Alias) # do assertion*/
cy .get("a[href*='product/category&path']").contains("Hair Care").click()
cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as("Firstitemtext")
//cy.get("@Firstitemtext").its('length').should('be.gt',3) done but try another one in defferent way
cy.get("@Firstitemtext").should('include',"Pantene")
/*in ubove the assertion faild becouse the first item named Seaweed not pantean*/

    });
});
