package service;

import ar.uba.fi.model.Account;
import ar.uba.fi.repository.AccountRepository;
import ar.uba.fi.service.AccountService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class AccountServiceTest {

    @InjectMocks
    AccountService accountService;

    @Mock
    AccountRepository accountRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAccounts() {
        Account account1 = new Account();
        account1.setId("1");
        Account account2 = new Account();
        account2.setId("2");

        when(accountRepository.findAll()).thenReturn(Arrays.asList(account1, account2));

        Collection<Account> accounts = accountService.getAccounts();

        assertEquals(2, accounts.size());
        verify(accountRepository, times(1)).findAll();
    }

    @Test
    public void testFindById() {
        Account account = new Account();
        account.setId("1");

        when(accountRepository.findById("1")).thenReturn(java.util.Optional.of(account));

        assertEquals(account, accountService.findById("1").get());
        verify(accountRepository, times(1)).findById("1");
    }

    @Test
    public void testGetMode() {
        Account account = new Account();
        account.setId("1");
        account.setMode("mode");

        when(accountRepository.findAccountById("1")).thenReturn(account);

        assertEquals("mode", accountService.getMode("1"));
        verify(accountRepository, times(1)).findAccountById("1");
    }

    @Test
    public void testSave() {
        Account account = new Account();
        account.setId("1");

        accountService.save(account);

        verify(accountRepository, times(1)).save(account);
    }

    @Test
    public void testDeleteById() {
        Account account = new Account();
        account.setId("1");

        accountService.deleteById("1");

        verify(accountRepository, times(1)).deleteById("1");
    }

    @Test
    public void testCreateAccount() {
        Account account = new Account();
        account.setId("1");

        accountService.createAccount(account);

        verify(accountRepository, times(1)).save(account);
    }
}
