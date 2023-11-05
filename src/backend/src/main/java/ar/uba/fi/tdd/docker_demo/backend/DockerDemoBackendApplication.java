package ar.uba.fi.tdd.docker_demo.backend;

import ar.uba.fi.tdd.docker_demo.backend.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ar.uba.fi.tdd.docker_demo.backend.services.AccountService;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@SpringBootApplication
//@EnableSwagger2
public class DockerDemoBackendApplication {

	@Autowired
	private AccountService accountService;

	public static void main(String[] args) {
		SpringApplication.run(DockerDemoBackendApplication.class, args);
	}

	@PostMapping("/accounts")
	@ResponseStatus(HttpStatus.CREATED)
	public Account createAccount(@RequestBody Account account) {
		return accountService.createAccount(account);
	}


	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any())
				.build();
	}
}
