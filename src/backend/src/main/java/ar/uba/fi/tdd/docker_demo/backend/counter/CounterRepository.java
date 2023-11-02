package ar.uba.fi.tdd.docker_demo.backend.counter;

import org.springframework.stereotype.Repository;

@Repository
public class CounterRepository {

    private int currentValue = 0;

    public void countUp() {
        currentValue += 2;
    }

    public int getCurrentValue() {
        return currentValue;
    }
}
