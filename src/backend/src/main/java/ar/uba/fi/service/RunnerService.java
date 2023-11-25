package ar.uba.fi.service;

import ar.uba.fi.model.Runner;
import ar.uba.fi.repository.RunnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.Collection;

@Service
public class RunnerService {

    @Autowired
    private RunnerRepository runnerRepository;

    public Runner createRunner(Runner runner) {
        return runnerRepository.save(runner);
    }

    public void save(Runner runner) {
        runnerRepository.save(runner);
    }

    public Optional<Runner> findById(String id) {
        return runnerRepository.findById(id);
    }

    public Collection<Runner> findAll() {
        return runnerRepository.findAll();
    }

    public Optional<Runner> findByUsername(String username) {
        return runnerRepository.findRunnerByUsername(username);
    }
}
