package ar.uba.fi.repository;

import ar.uba.fi.model.Result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ResultRepository extends JpaRepository<Result, Long> {

    Result findResultById(Long id);

    List<Result> findResultByIdRunner(String id_runner);

    @Override
    List<Result> findAll();
}