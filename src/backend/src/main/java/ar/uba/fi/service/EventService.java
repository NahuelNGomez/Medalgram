package ar.uba.fi.service;

import ar.uba.fi.model.Event;
import ar.uba.fi.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

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
        // return eventRepository.findBySport(id);
        return Collections.emptyList();
    }
}
