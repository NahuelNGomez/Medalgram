package ar.uba.fi.tdd.docker_demo.backend.repository;

import ar.uba.fi.tdd.docker_demo.backend.model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface AccountRepository extends CrudRepository<Account, Long> {

    Account findAccountID(Long cbu);

    @Override
    List<Account> findAll();

}