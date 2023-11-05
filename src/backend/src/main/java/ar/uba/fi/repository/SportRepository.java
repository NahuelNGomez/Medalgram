package ar.uba.fi.repository;

import ar.uba.fi.model.Sport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


@RepositoryRestResource
public interface SportRepository extends CrudRepository<Sport, Long> {

    Sport findSportByName(Long id);

    @Override
    List<Sport> findAll();
}