package ar.uba.fi.integration.cucumber;

import ar.uba.fi.exceptions.DepositNegativeSumException;
import ar.uba.fi.exceptions.InsufficientFundsException;
import ar.uba.fi.model.Account;
import ar.uba.fi.DockerDemoApp;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.springframework.http.ResponseEntity;

public class AccountOperationsTest extends AccountIntegrationServiceTest {

    private Account account;
    private InsufficientFundsException ife;
    private DepositNegativeSumException dnse;
    private DockerDemoApp app;

    @Before
    public void setup() {
        System.out.println("Before any test execution");
        app = new DockerDemoApp();
    }

    @Given("^Account with a balance of (\\d+)$")
    public void account_with_a_balance_of(int balance) {
        Account account2 = app.createAccount(new Account());
        account = createAccount(Double.valueOf(balance));
    }

    /*
     * @When("^Trying to withdraw (\\d+)$")
     * public void trying_to_withdraw(int sum) {
     * try {
     * runnerSerice.createRunner()
     * account = withdraw(account, Double.valueOf(sum));
     * } catch (InsufficientFundsException ife) {
     * this.ife = ife;
     * }
     * }
     * 
     * @When("^Trying to deposit (.*)$")
     * public void trying_to_deposit(int sum) {
     * try {
     * account = deposit(account, Double.valueOf(sum));
     * } catch (DepositNegativeSumException dnse) {
     * this.dnse = dnse;
     * }
     * }
     * 
     * @Then("^Account balance should be (\\d+)$")
     * public void account_balance_should_be(int balance) {
     * assertEquals(Double.valueOf(balance), account.getBalance());
     * }
     * 
     * @Then("^Operation should be denied due to insufficient funds$")
     * public void operation_should_be_denied_due_to_insufficient_funds() {
     * assertNotNull(ife);
     * }
     * 
     * @Then("^Operation should be denied due to negative sum$")
     * public void operation_should_be_denied_due_to_negative_sum() {
     * assertNotNull(dnse);
     * }
     * 
     * @And("^Account balance should remain (\\d+)$")
     * public void account_balance_should_remain(int balance) {
     * assertEquals(Double.valueOf(balance), account.getBalance());
     * }
     */
    @After
    public void tearDown() {
        System.out.println("After all test execution");
    }
}
