package ar.uba.fi.tdd.docker_demo.backend.counter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CounterService {

    CounterRepository repository;

    @Autowired
    CounterService(CounterRepository repository) {
        this.repository = repository;
    }

    public int popValue() {
        repository.countUp();
        return repository.getCurrentValue();
    }
}
