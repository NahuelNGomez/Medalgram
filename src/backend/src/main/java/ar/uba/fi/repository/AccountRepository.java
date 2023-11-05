package ar.uba.fi.repository;

import ar.uba.fi.model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface AccountRepository extends CrudRepository<Account, Long> {

    Account findAccountById(Long id);

    @Override
    List<Account> findAll();

}
