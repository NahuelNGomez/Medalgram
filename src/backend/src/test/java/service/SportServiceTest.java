package service;

import ar.uba.fi.model.Sport;
import ar.uba.fi.repository.SportRepository;
import ar.uba.fi.service.SportService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.dao.DataIntegrityViolationException;

import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class SportServiceTest {

    @InjectMocks
    SportService sportService;

    @Mock
    SportRepository sportRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testCreateSportThrowsException() {
        Sport sport = new Sport();
        sport.setId(1L);
        sport.setName("name");

        Sport existingSport = new Sport();
        existingSport.setName("name");

        when(sportRepository.findSportByName("name")).thenReturn(Optional.of(existingSport));

        assertThrows(DataIntegrityViolationException.class, () -> sportService.createSport(sport));
        verify(sportRepository, never()).save(sport);
    }

    @Test
    public void testGetSports() {
        Sport sport1 = new Sport();
        sport1.setId(1L);
        Sport sport2 = new Sport();
        sport2.setId(2L);

        when(sportRepository.findAll()).thenReturn(Arrays.asList(sport1, sport2));

        Collection<Sport> sports = sportService.getSports();

        assertEquals(2, sports.size());
        verify(sportRepository, times(1)).findAll();
    }

    @Test
    public void testFindById() {
        Sport sport = new Sport();
        sport.setId(1L);

        when(sportRepository.findById(1L)).thenReturn(java.util.Optional.of(sport));

        assertEquals(sport, sportService.findById(1).get());
        verify(sportRepository, times(1)).findById(1L);
    }
}
