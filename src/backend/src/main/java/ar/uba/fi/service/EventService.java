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
        if (top != 0 && top != null) {
            //return first {top} results
            if (top > eventRepository.count()) {
                return eventRepository.findAll().subList(0, (int) eventRepository.count());
            }
            return eventRepository.findAll().subList(0, top);
        } else {
            return eventRepository.findAll();
        }
        
    }

    public Optional<Event> findById(Long id) {
        return eventRepository.findById(id);
    }

    public Collection<Event> filterBySport(Long id, Integer top) {
        if (top != 0 && top != null) {
            //return first {top} results
            if (top > eventRepository.count()) {
                return eventRepository.findAll().stream().filter(event -> event.getIdSport().longValue() == id).collect(Collectors.toList()).subList(0, (int) eventRepository.count());
            }
            return eventRepository.findAll().stream().filter(event -> event.getIdSport().longValue() == id).collect(Collectors.toList()).subList(0, top);
        } else {
            return eventRepository.findAll().stream().filter(event -> event.getIdSport().longValue() == id).collect(Collectors.toList());
            //return eventRepository.findByIdSport(id);
        }
    }
}
