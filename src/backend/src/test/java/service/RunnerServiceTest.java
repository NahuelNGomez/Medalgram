package service;

import ar.uba.fi.model.Runner;
import ar.uba.fi.repository.RunnerRepository;
import ar.uba.fi.service.RunnerService;
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

public class RunnerServiceTest {

    @InjectMocks
    RunnerService runnerService;

    @Mock
    RunnerRepository runnerRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testCreateRunner() {
        Runner runner = new Runner();
        runner.setId("1");

        when(runnerRepository.save(any(Runner.class))).thenReturn(runner);

        Runner createdRunner = runnerService.createRunner(runner);

        assertEquals(runner.getId(), createdRunner.getId());
        verify(runnerRepository, times(1)).save(runner);
    }

    @Test
    public void testFindAll() {
        Runner runner1 = new Runner();
        runner1.setId("1");
        Runner runner2 = new Runner();
        runner2.setId("2");

        when(runnerRepository.findAll()).thenReturn(Arrays.asList(runner1, runner2));

        Collection<Runner> runners = runnerService.findAll();

        assertEquals(2, runners.size());
        verify(runnerRepository, times(1)).findAll();
    }

    @Test
    public void testFindById() {
        Runner runner = new Runner();
        runner.setId("1");

        when(runnerRepository.findById("1")).thenReturn(java.util.Optional.of(runner));

        assertEquals(runner, runnerService.findById("1").get());
        verify(runnerRepository, times(1)).findById("1");
    }
}
