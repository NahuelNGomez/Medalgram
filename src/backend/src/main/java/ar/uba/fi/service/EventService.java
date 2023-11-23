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

    public Collection<Event> getEvents(Integer top) {
       if (top == 0) {
           return eventRepository.findAll();
       } else {
           return eventRepository.findAll().subList(0, top);
       }
    }

    public Optional<Event> findById(Long id) {
        return eventRepository.findById(id);
    }

    public Collection<Event> filterBySport(Integer id, Integer top) {
        if (top == 0) {
            return eventRepository.findAll().stream().filter(event -> event.getIdSport().equals(id)).collect(Collectors.toList());
        } else {
            return eventRepository.findAll().stream().filter(event -> event.getIdSport().equals(id)).collect(Collectors.toList()).subList(0, top);
        }
    }
}
