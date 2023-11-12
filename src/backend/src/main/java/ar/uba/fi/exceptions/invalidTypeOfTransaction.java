package ar.uba.fi.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class invalidTypeOfTransaction extends RuntimeException {

    public invalidTypeOfTransaction(String message) {
        super(message);
    }
}
