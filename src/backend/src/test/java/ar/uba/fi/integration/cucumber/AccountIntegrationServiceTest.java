package ar.uba.fi.integration.cucumber;

import ar.uba.fi.DockerDemoApp;
import ar.uba.fi.model.Account;
import ar.uba.fi.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;

@ContextConfiguration(classes = DockerDemoApp.class)
@WebAppConfiguration
public class AccountIntegrationServiceTest {

    @Autowired
    AccountService accountService;

    Account createAccount(Double balance) {
        return accountService.createAccount(new Account());
    }

}
