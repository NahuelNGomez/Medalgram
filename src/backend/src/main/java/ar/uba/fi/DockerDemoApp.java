package ar.uba.fi;

import ar.uba.fi.model.Event;
import ar.uba.fi.model.Sport;
import ar.uba.fi.model.Account;
import ar.uba.fi.model.Runner;
import ar.uba.fi.model.Result;
import ar.uba.fi.service.AccountService;
import ar.uba.fi.service.EventService;
import ar.uba.fi.service.SportService;
import ar.uba.fi.service.RunnerService;
import ar.uba.fi.service.ResultService;
import ar.uba.fi.model.*;
import ar.uba.fi.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@SpringBootApplication
@EnableSwagger2
public class DockerDemoApp {

	@Autowired
	private AccountService accountService;

	@Autowired
	private SportService sportService;

	@Autowired
	private EventService eventService;

	@Autowired
	private RunnerService runnerService;

	@Autowired
	private ResultService resultService;

	@Autowired
	private CommentService commentService;

	public static void main(String[] args) {
		SpringApplication.run(DockerDemoApp.class, args);
	}

	///// Accounts

	@PostMapping("/api/accounts")
	@ResponseStatus(HttpStatus.CREATED)
	public Account createAccount(@RequestBody Account account) {
		return accountService.createAccount(account);
	}

	@GetMapping("/api/accounts")
	public Collection<Account> getAccounts() {
		return accountService.getAccounts();
	}

	@GetMapping("api/accounts/{token}")
	public ResponseEntity<Account> getAccount(@PathVariable String token) {
		Optional<Account> accountOptional = accountService.findByToken(token);
		return ResponseEntity.of(accountOptional);
	}

	@PutMapping("/api/accounts/{token}")
	public ResponseEntity<Account> updateAccount(@RequestBody Account account, @PathVariable String token) {
		Optional<Account> accountOptional = accountService.findByToken(token);

		//if (!accountOptional.isPresent()) {
		if (accountOptional.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		account.setToken(token);
		accountService.save(account);

		return ResponseEntity.ok().build();
	}
	
	// Results
	@GetMapping("/api/results")
	public Collection<Result> getResults() {
		return resultService.getResults();
	}

	// TO DO: Put for /api/results


	// Runner

	@PostMapping("/api/runners")
	@ResponseStatus(HttpStatus.CREATED)
	public Runner createRunner(@RequestBody Runner runner) {
		return runnerService.createRunner(runner);
	}

	// api/runners?top=5

	@GetMapping("/api/runners/{token}")
	public ResponseEntity<Runner> getRunner(@PathVariable String token) {
		Optional<Runner> runner = runnerService.findByToken(token);
		return ResponseEntity.of(runner);
	}

	// api/runners/{id_runner}/stats  muestra el medallero compartido con un runner.
	@GetMapping("/api/runners/{token}/stats")
	public Collection<Result> getRunnerStats(@PathVariable String token, @RequestHeader Integer _token) {
		// Fijarse si el id runner me compartio el medallero a mi
		// comparando el token con la tabla de shared
        return resultService.getResultsForRunner(token);
	}

	///// Me

	//  GET api/me/stats /* Muestra el medallero del runner logueado. */
	@GetMapping("/api/me/stats")
	public Collection<Result> getMeStats(@RequestHeader String token) {
		// logica para obtener el id con el token
        return resultService.getResultsForRunner(token);
	}

	// GET api/me  /*Muestra datos del runner*/
	@GetMapping("/api/me")
	public ResponseEntity<Runner> getMe(@RequestHeader String token) {
		// Hay que hacer la conversion de token a id
		Optional<Runner> runner = runnerService.findByToken(token);
		return ResponseEntity.of(runner);
	}
	
    // GET api/me/results/     /*Muestra resultados (checked & pending) del runner*/
	@GetMapping("/api/me/results")
	public Collection<Result> getMeResults(@RequestHeader String token) {
		// Hay que hacer la conversion de token a id
		// Pedirle a account el id del runner segun token
        return resultService.getResultsForRunner(token);
	}


	// PUT api/me *editar datos runner*

	// POST api/me/results/     /*permite subir resultados*/
	/* @PostMapping("/api/me/results")
	@ResponseStatus(HttpStatus.CREATED)
	public Result createResult(@RequestBody Result result,  @RequestHeader String token) {
		// Segun el token me fijo si es admin o no y creo un resultado
		// No verificado o verificado segun corresponda
		// mapear token -> modo : admin o runner
		String mode = accountService.getMode(token);
		return resultService.createResult(result, mode);
	} */


	///// Sports

	@GetMapping("/api/sports")
	public Collection<Sport> getSports() {
		return sportService.getSports();
	}

	// api/sports/{id_sport}/events?top=10

	@GetMapping("/api/sports/{id}/events")
	public Collection<Event> getSportEvents(@PathVariable Long id, @RequestParam(required = false) Integer top) {
		return eventService.filterBySport(id, top);
	}

	@PostMapping("/api/sports")
	@ResponseStatus(HttpStatus.CREATED)
	public Sport createSport(@RequestBody Sport sport) {
		return sportService.createSport(sport);
	}


	///// Events
	@GetMapping("/api/events")
	public Collection<Event> getEvents(@RequestParam(required = false) Integer top) {
		return eventService.getEvents(top);
	}
	// api/events?top=5

	@GetMapping("/api/events/{id}")
	public ResponseEntity<Event> getEvent(@PathVariable Long id) {
		Optional<Event> event = eventService.findById(id);
		return ResponseEntity.of(event);
	}

	@PostMapping("/api/events")
	@ResponseStatus(HttpStatus.CREATED)
	public Event createEvent(@RequestBody Event event) {
		return eventService.createEvent(event);
	}

	@GetMapping("/api/events/{id_event}/comments")
	public Collection<Comment> getEventComments(@PathVariable Long id_event) {
		return commentService.getEventComments(id_event);
	}

	@PostMapping("/api/events/{id_event}/comments")
	@ResponseStatus(HttpStatus.CREATED)
	public Comment createComment(@RequestBody Comment comment, @PathVariable Integer id_event) {
		comment.setIdEvent(id_event);
		return commentService.createComment(comment);
	}



	/*
	@PutMapping("/accounts/{id}/withdraw")
	public Transaction withdraw(@PathVariable Long cbu, @RequestParam Double sum) {
		Transaction transaction = new Transaction("withdraw", sum, cbu);
		accountService.withdraw(cbu, transaction.getAmount());
		return transactionService.withdraw(transaction);
	}

	@PutMapping("/accounts/{cbu}/deposit")
	public Transaction deposit(@PathVariable Long cbu, @RequestParam Double sum) {
		Transaction transaction = new Transaction("deposit", sum, cbu);
		accountService.deposit(cbu, transaction.getAmount());
		return transactionService.deposit(transaction);
	}

	 @PostMapping("/transactions")
	 @ResponseStatus(HttpStatus.CREATED)
	 public Transaction createTransaction(@RequestBody Transaction transaction) {

		if(transaction.getType().equals("deposit")) {
			accountService.deposit(transaction.getCbu(), transaction.getAmount());
			return transactionService.deposit(transaction);
		} else if (transaction.getType().equals("withdraw")) {
			accountService.withdraw(transaction.getCbu(), transaction.getAmount());
			return transactionService.withdraw(transaction);
		}

		throw new invalidTypeOfTransaction("Invalid type of transaction");

	 }

	 @GetMapping("/accounts/transactions")
	 public List<Transaction> getTransactions(@RequestParam Long cbu) {
		return transactionService.getTransactionsByCbu(cbu);
	 }

	@GetMapping("/transactions/{transactionID}")
	public Transaction getTransaction(@PathVariable Long transactionID) {
		return transactionService.findTransactionByID(transactionID);

	}

	@DeleteMapping("/transactions/{transactionID}")
	public void deleteTransaction(@PathVariable Long transactionID) {
		Transaction transaction = transactionService.findTransactionByID(transactionID);

		if (transaction == null) {
			throw new invalidIdTransaction("Invalid ID of the transaction");
		}
		transactionService.deleteTransaction(transaction);
	}
*/
	@Bean
	public Docket apiDocket() {
		return new Docket(DocumentationType.SWAGGER_2)
			.select()
			.apis(RequestHandlerSelectors.any())
			.paths(PathSelectors.any())
			.build();
	}
}
