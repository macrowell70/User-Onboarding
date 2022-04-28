describe("Form App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    /*GETTERS*/
    const fnameInput = () => cy.get("input[name=firstName]");
    const lnameInput = () => cy.get("input[name=lastName]");
    const emailInput = () => cy.get("input[name=email]");
    const passInput = () => cy.get("input[name=password]");
    const checkbox = () => cy.get("input[type=checkbox]");
    const submitBtn = () => cy.get(`button[id="submitBtn"]`);


    it("sanity check", () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5)
    })


    it("proper elements are showing", () => {
        fnameInput().should("exist");
        lnameInput().should("exist");
        emailInput().should("exist");
        passInput().should("exist");
        checkbox().should("exist");
        submitBtn().should("exist");
    })

    describe("filling out inputs", () => {
        it("can type inputs", () => {
            fnameInput()
            .should("have.value", "")
            .type("John")
            .should("have.value", "John");
            lnameInput()
            .should("have.value", "")
            .type("Smith")
            .should("have.value", "Smith");
            emailInput()
            .should("have.value", "")
            .type("email@email.com")
            .should("have.value", "email@email.com")
            passInput()
            .should("have.value", "")
            .type("pass")
            .should("have.value", "pass");
        })

        it("can check checkbox", () => {
            checkbox()
            .should("not.be.checked")
            .click()
            .should("be.checked")
        })
    })


    



})