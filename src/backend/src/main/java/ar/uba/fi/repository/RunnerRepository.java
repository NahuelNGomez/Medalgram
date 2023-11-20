package ar.uba.fi.repository;

import ar.uba.fi.model.Runner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface RunnerRepository extends JpaRepository<Runner, String> {

    Runner findRunnerById(String tokenRunner);

    @Override
    List<Runner> findAll();
}
