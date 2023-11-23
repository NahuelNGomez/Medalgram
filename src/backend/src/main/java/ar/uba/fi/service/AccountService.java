package ar.uba.fi.service;

import ar.uba.fi.repository.AccountRepository;
import ar.uba.fi.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public Collection<Account> getAccounts() {
        return accountRepository.findAll();
    }

    public Optional<Account> findById(String id) {
        return accountRepository.findById(id);
    }

    public String getMode(String token) {
        Account account =  accountRepository.findAccountById(token);
        return account.getMode();
    }

    public void save(Account account) {
        accountRepository.save(account);
    }

    public void deleteById(String id) {
        accountRepository.deleteById(id);
    }

}
