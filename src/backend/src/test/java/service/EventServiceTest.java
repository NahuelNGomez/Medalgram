package service;

import ar.uba.fi.model.Event;
import ar.uba.fi.repository.EventRepository;
import ar.uba.fi.service.EventService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class EventServiceTest {

    @InjectMocks
    EventService eventService;

    @Mock
    EventRepository eventRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testCreateEvent() {
        Event event = new Event();
        event.setId(1L);

        when(eventRepository.save(any(Event.class))).thenReturn(event);

        Event createdEvent = eventService.createEvent(event);

        assertEquals(event.getId(), createdEvent.getId());
        verify(eventRepository, times(1)).save(event);
    }

    @Test
    public void testGetEvents() {
        Event event1 = new Event();
        event1.setId(1L);
        Event event2 = new Event();
        event2.setId(2L);

        when(eventRepository.findAll()).thenReturn(Arrays.asList(event1, event2));

        Collection<Event> events = eventService.getEvents(0);

        assertEquals(2, events.size());
        verify(eventRepository, times(1)).findAll();
    }

    @Test
    public void testFindById() {
        Event event = new Event();
        event.setId(1L);

        when(eventRepository.findById(1L)).thenReturn(java.util.Optional.of(event));

        assertEquals(event, eventService.findById(1L).get());
        verify(eventRepository, times(1)).findById(1L);
    }

    @Test
    public void testFilterBySport() {
        Event event1 = new Event();
        event1.setId(1L);
        event1.setIdSport(1);
        Event event2 = new Event();
        event2.setId(2L);
        event2.setIdSport(2);

        when(eventRepository.findAll()).thenReturn(Arrays.asList(event1, event2));

        Collection<Event> events = eventService.filterBySport(1, 0);

        assertEquals(1, events.size());
        verify(eventRepository, times(1)).findAll();
    }

    @Test
    public void testFilterBySportWithTop() {
        Event event1 = new Event();
        event1.setId(1L);
        event1.setIdSport(1);
        Event event2 = new Event();
        event2.setId(2L);
        event2.setIdSport(2);

        when(eventRepository.findAll()).thenReturn(Arrays.asList(event1, event2));

        Collection<Event> events = eventService.filterBySport(1, 1);

        assertEquals(1, events.size());
        verify(eventRepository, times(1)).findAll();
    }
}
