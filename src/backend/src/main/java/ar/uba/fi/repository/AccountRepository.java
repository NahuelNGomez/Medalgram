package ar.uba.fi.repository;

import ar.uba.fi.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface AccountRepository extends JpaRepository<Account, String> {

    Account findAccountByToken(String token);

    @Override
    List<Account> findAll();

    void deleteByToken(String token);
}
