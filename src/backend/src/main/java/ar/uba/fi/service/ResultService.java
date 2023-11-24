package ar.uba.fi.service;

import ar.uba.fi.model.Result;
import ar.uba.fi.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import java.util.Collection;

@Service
public class ResultService {

    @Autowired
    private ResultRepository resultRepository;

    public Result createResult(Result result, String mode) {
        if (mode.equals("Admin")) {
            result.setStatus("Confirmed");
        } else {
            result.setStatus("Pending");
        }
        return resultRepository.save(result);
    }

    public Collection<Result> getResults() {
        return resultRepository.findAll();
    }

    public Collection<Result> getResultsForRunner(String tokenRunner) {
        List<Result> results = resultRepository.findResultByTokenRunner(tokenRunner);
        Collections.sort(results, Comparator.comparingInt(Result::getPosition));
        return results;
    }
}
