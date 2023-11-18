package ar.uba.fi.repository;

import ar.uba.fi.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface AccountRepository extends JpaRepository<Account, Long> {

    Account findAccountById(Long id);

    Account findByToken(String token);

    @Override
    List<Account> findAll();
}
