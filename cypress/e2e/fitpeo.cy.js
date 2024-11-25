describe("Fitpeo Assignment",()=>{
    it("FItpeo Website ",()=>{
    // visiting the fitpeowebsite
        cy.visit("https://fitpeo.com")
    // Navigating to revenue calculator    
        cy.get('a[href*="/revenue-calculator"]').click({force: true})
        cy.url().should("includes","revenue-calculator")
        // Viewing the revenue calculator
        cy.get('.MuiBox-root.css-79elbk').scrollIntoView()
        
        const numberInputSelector = 'input[type="number"]' 
        const sliderSelector = '.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.css-1sfugkh' 
        const value = 820

        cy.setAndVerifySlider(numberInputSelector, sliderSelector,value)
        // adding the codes mentioned as per requirement
        cy.get('.MuiBox-root.css-1eynrej').each(($code)=>{
            if($code.text().includes('CPT-99091')){
                cy.wrap($code).find('input[type="checkbox"]').check()
                            
            }
            if($code.text().includes('CPT-99453')){
                cy.wrap($code).find('input[type="checkbox"]').check()
            }
            if($code.text().includes('CPT-99454')){
                cy.wrap($code).find('input[type="checkbox"]').check()
            }
            if($code.text().includes('CPT-99474')){
                cy.wrap($code).find('input[type="checkbox"]').check()
            }
        })
        //to make the header visible 
        cy.viewport(1286,730)
        cy.scrollTo(0,600)
        //asserting whether the header is visible or not 
        cy.get('header.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation4.MuiAppBar-root.MuiAppBar-colorDefault.MuiAppBar-positionFixed.mui-fixed.css-nq2yav').should("be.visible")
        //asserting the value matches as per the requirment
        cy.get('.MuiTypography-root.MuiTypography-body1.inter.css-1bl0tdj').eq(3).should("have.text","$110700")
    })
})