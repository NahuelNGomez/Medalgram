package ar.uba.fi;

import ar.uba.fi.model.Event;
import ar.uba.fi.model.Sport;
import ar.uba.fi.model.Account;
import ar.uba.fi.model.Runner;
import ar.uba.fi.service.AccountService;
import ar.uba.fi.service.EventService;
import ar.uba.fi.service.SportService;
import ar.uba.fi.service.RunnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;
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

	@GetMapping("/accounts/{id}")
	public ResponseEntity<Account> getAccount(@PathVariable Long id) {
		Optional<Account> accountOptional = accountService.findById(id);
		return ResponseEntity.of(accountOptional);
	}

	@PutMapping("/api/accounts/{id}")
	public ResponseEntity<Account> updateAccount(@RequestBody Account account, @PathVariable Long id) {
		Optional<Account> accountOptional = accountService.findById(id);

		if (!accountOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		account.setId(id);
		accountService.save(account);

		return ResponseEntity.ok().build();
	}

	@DeleteMapping("/api/accounts/{id}")
	public void deleteAccount(@PathVariable Long id) {
		accountService.deleteById(id);
	}


	// Runner

	@PostMapping("/api/runners")
	@ResponseStatus(HttpStatus.CREATED)
	public Runner createRunner(@RequestBody Runner runner) {
		return runnerService.createRunner(runner);
	}

	@GetMapping("/api/runners/{id}")
	public ResponseEntity<Runner> getRunner(@PathVariable Long id) {
		Optional<Runner> runner = runnerService.findById(id);
		return ResponseEntity.of(runner);
	}

	///// Sports
	@GetMapping("/api/sports")
	public Collection<Sport> getSports() {
		return sportService.getSports();
	}

	@GetMapping("/api/sports/{id}/events")
	public Collection<Event> getSportEvents(@PathVariable Long id) {
		return eventService.filterBySport(id);
	}

	@PostMapping("/api/sports")
	@ResponseStatus(HttpStatus.CREATED)
	public Sport createSport(@RequestBody Sport sport) {
		return sportService.createSport(sport);
	}


	///// Events
	@GetMapping("/api/events")
	public Collection<Event> getEvents() {
		return eventService.getEvents();
	}

	@GetMapping("/api/events/{id}")
	public ResponseEntity<Event> getEvent(@PathVariable Long id) {
		Optional<Event> event = eventService.findById(id);
		return ResponseEntity.of(event);
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
