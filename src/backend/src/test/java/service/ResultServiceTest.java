package service;

import ar.uba.fi.model.Result;
import ar.uba.fi.repository.ResultRepository;
import ar.uba.fi.service.ResultService;
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

public class ResultServiceTest {

    @InjectMocks
    ResultService resultService;

    @Mock
    ResultRepository resultRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testCreateResult() {
        Result result = new Result();
        result.setId(1L);

        when(resultRepository.save(any(Result.class))).thenReturn(result);

        Result createdResult = resultService.createResult(result, "status");

        assertEquals(result.getId(), createdResult.getId());
        verify(resultRepository, times(1)).save(result);
    }

    @Test
    public void testGetResults() {
        Result result1 = new Result();
        result1.setId(1L);
        Result result2 = new Result();
        result2.setId(2L);

        when(resultRepository.findAll()).thenReturn(Arrays.asList(result1, result2));

        Collection<Result> results = resultService.getResults();

        assertEquals(2, results.size());
        verify(resultRepository, times(1)).findAll();
    }

    @Test
    public void testFindById() {
        Result result = new Result();
        result.setId(1L);

        when(resultRepository.findById(1L)).thenReturn(java.util.Optional.of(result));

        assertEquals(result, resultService.findById(1L).get());
        verify(resultRepository, times(1)).findById(1L);
    }

    @Test
    public void testGetResultsForRunner() {
        Result result1 = new Result();
        result1.setId(1L);
        result1.setPosition(1);
        Result result2 = new Result();
        result2.setId(2L);
        result2.setPosition(2);

        when(resultRepository.findResultByTokenRunner("token")).thenReturn(Arrays.asList(result1, result2));

        Collection<Result> results = resultService.getResultsForRunner("token");

        assertEquals(2, results.size());
        verify(resultRepository, times(1)).findResultByTokenRunner("token");
    }

    @Test
    public void testSave() {
        Result result = new Result();
        result.setId(1L);

        resultService.save(result);

        verify(resultRepository, times(1)).save(result);
    }
}
