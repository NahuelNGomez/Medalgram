package ar.uba.fi.repository;

import ar.uba.fi.model.Sport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface SportRepository extends JpaRepository<Sport, Long> {

    Sport findSportById(Long id);

    @Override
    List<Sport> findAll();
}
