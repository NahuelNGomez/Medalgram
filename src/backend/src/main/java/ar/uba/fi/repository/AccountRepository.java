package ar.uba.fi.repository;

import ar.uba.fi.db.TableManager;
import ar.uba.fi.model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RepositoryRestResource
public interface AccountRepository extends CrudRepository<Account, Long> { //extends RepositorySetUp {
/*
    public AccountRepository() {
        super();
    }

 */

    Account findAccountById(Long id);

    @Override
    List<Account> findAll();
/*
    public Account save(Account account){
        String tableName = "Account";
        int accountNumber = tableManager.getRecordCount(tableName) + 1;

        Map<String, Object> cols = new HashMap<>();
        cols.put("name", "ACCOUNT" + accountNumber);

        boolean isCreated = tableManager.createRecord(tableName, cols);

        return account;
    }
    */
}
