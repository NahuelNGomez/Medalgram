package ar.uba.fi.service;

import ar.uba.fi.model.Result;
import ar.uba.fi.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import java.util.Collection;
import java.util.Optional;

@Service
public class ResultService {

    public static final String ACCEPTED = "accepted";

    @Autowired
    private ResultRepository resultRepository;

    public Result createResult(Result result, String status) {
        result.setStatus(status);

        return resultRepository.save(result);
    }

    public void save(Result result) {
        resultRepository.save(result);
    }

    public Collection<Result> getResults() {
        return resultRepository.findAll();
    }

    public Optional<Result> findById(Long id) {
        return resultRepository.findById(id);
    }

    public Collection<Result> getResultsForRunner(String tokenRunner) {
        List<Result> results = resultRepository.findResultByTokenRunner(tokenRunner);
        Collections.sort(results, Comparator.comparingInt(Result::getPosition));
        return results;
    }

    public Collection<Result> getResultsForRunnerSecured(String tokenRunner) {
        List<Result> results = resultRepository.findResultByTokenRunner(tokenRunner);
        Collections.sort(results, Comparator.comparingInt(Result::getPosition));
        results.forEach(result -> result.setTokenRunner(null));
        return results;
    }

    public Boolean isResultForRunnerForEvent(String tokenRunner, Integer idEvent) {
        Collection<Result> resultsForRunner = this.getResultsForRunner(tokenRunner);

        return resultsForRunner.stream()
                .anyMatch(result -> result.getIdEvent() == idEvent && result.getStatus().equals(ACCEPTED));
    }
}
