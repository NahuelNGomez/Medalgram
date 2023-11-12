package ar.uba.fi.repository;

import ar.uba.fi.model.Result;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

// import java.util.Collection;
import java.util.List;

@RepositoryRestResource
public interface ResultRepository extends CrudRepository<Result, Long>{
    
    Result findResultById(Long id);

    @Override
    List<Result> findAll();
}
