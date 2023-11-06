package ar.uba.fi.service;

import ar.uba.fi.model.Event;
import ar.uba.fi.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Collection<Event> getEvents() {
        return eventRepository.findAll();
    }

    public Optional<Event> findById(Long id) {
        return eventRepository.findById(id);
    }

    public Collection<Event> filterBySport(Long id) {
        // TODO: filter by sport id.
        return eventRepository.findAll().stream().filter(event -> event.getIdSport() == id).collect(Collectors.toList());
    }
}
