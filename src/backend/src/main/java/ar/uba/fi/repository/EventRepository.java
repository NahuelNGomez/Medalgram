package ar.uba.fi.repository;

import ar.uba.fi.model.Event;
import ar.uba.fi.model.Sport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;
import java.util.List;

@RepositoryRestResource
public interface EventRepository extends CrudRepository<Event, Long> {

    Event findEventById(Long id);

    // Collection<Event> findBySport(Long id);

    @Override
    List<Event> findAll();
}
