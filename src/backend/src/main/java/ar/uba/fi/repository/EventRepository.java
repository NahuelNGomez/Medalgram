package ar.uba.fi.repository;

import ar.uba.fi.model.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface EventRepository extends CrudRepository<Event, Long> {

    Event findEventById(Long id);

    @Override
    List<Event> findAll();
}
