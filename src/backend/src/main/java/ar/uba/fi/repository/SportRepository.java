package ar.uba.fi.repository;

import ar.uba.fi.model.Sport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


@RepositoryRestResource
public interface SportRepository extends CrudRepository<Sport, String> {

    Sport findSportByName(String name);

    @Override
    List<Sport> findAll();
}