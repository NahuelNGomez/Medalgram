package ar.uba.fi.repository;

import ar.uba.fi.model.Runner;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.*;


@RepositoryRestResource
public interface RunnerRepository extends CrudRepository<Runner, Long> {
    Runner findSportByName(Long id);

    @Override
    List<Runner> findAll();
}
