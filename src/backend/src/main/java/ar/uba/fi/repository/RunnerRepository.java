package ar.uba.fi.repository;

import ar.uba.fi.model.Runner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface RunnerRepository extends JpaRepository<Runner, String> {

    Runner findRunnerById(String id);

    Optional<Runner> findRunnerByUsername(String username);

    @Override
    List<Runner> findAll();
}
