package ar.uba.fi.tdd.docker_demo.backend.counter;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class CounterServiceTest {

    @MockBean
    private CounterRepository counterRepository;

    @Autowired
    private CounterService counterService;

    @Test
    void popReturnsCurrentValue() {
        Mockito.when(counterRepository.getCurrentValue()).thenReturn(10);
        assertEquals(10, counterService.popValue());
    }

    @Test
    void popCountsUp() {
        counterService.popValue();
        Mockito.verify(counterRepository).countUp();
    }
}