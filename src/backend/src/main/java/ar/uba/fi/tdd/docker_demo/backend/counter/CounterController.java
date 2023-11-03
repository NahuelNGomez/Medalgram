package ar.uba.fi.tdd.docker_demo.backend.counter;

import ar.uba.fi.tdd.docker_demo.backend.common.NumericDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;

@RestController
@CrossOrigin(allowedHeaders = "*")
public class CounterController {

    private final CounterService service;

    @Autowired
    public CounterController(CounterService service) {
        this.service = service;
    }

    @PostMapping("/counter")
    public ResponseEntity<NumericDTO> increaseCount() {
        int result = service.popValue();
        return ResponseEntity.ok().body(new NumericDTO(BigInteger.valueOf(result)));
    }
}
