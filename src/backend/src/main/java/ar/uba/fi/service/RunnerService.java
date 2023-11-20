package ar.uba.fi.service;

import ar.uba.fi.model.Runner;
import ar.uba.fi.repository.RunnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;


@Service
public class RunnerService {

    @Autowired
    private RunnerRepository runnerRepository;

    public Runner createRunner(Runner runner) {
        return runnerRepository.save(runner);
    }
    
    public Optional<Runner> findById(String token) {
        return runnerRepository.findById(token);
    }
}
