package ar.uba.fi.service;

import ar.uba.fi.model.Result;
import ar.uba.fi.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ResultService {
    
    @Autowired
    private ResultRepository resultRepository;

    public Result createResult(Result result) {
        return resultRepository.save(result);
    }

    public Collection<Result> getResults() {
        return resultRepository.findAll();
    }
}
