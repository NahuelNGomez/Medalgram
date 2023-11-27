package ar.uba.fi;

import ar.uba.fi.model.*;
import ar.uba.fi.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
// import org.springframework.web.filter.CorsFilter;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.time.ZonedDateTime;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@SpringBootApplication
@EnableSwagger2
public class DockerDemoApp {

	public static final String ADMIN = "ADMIN";

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

	@Autowired
	private ShareService shareService;

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
	public ResponseEntity<Collection<Account>> getAccounts(@RequestHeader String token) {
		Optional<Account> account = accountService.findById(token);
		if (account.isPresent() && accountService.getMode(token).equals(ADMIN)) {
			return ResponseEntity.ok(accountService.getAccounts());
		}

		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}

	@GetMapping("api/accounts/{token}")
	public ResponseEntity<Account> getAccount(@PathVariable String token) {
		Optional<Account> accountOptional = accountService.findById(token);
		return ResponseEntity.of(accountOptional);
	}

	@PutMapping("/api/accounts/{token}")
	public ResponseEntity<Account> updateAccount(@RequestBody Account account, @PathVariable String token) {
		Optional<Account> accountOptional = accountService.findById(token);

		if (accountOptional.isPresent()) {
			account.setId(token);
			accountService.save(account);

			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();
	}

	@DeleteMapping("/api/accounts/{token}")
	public void deleteAccount(@PathVariable String token) {
		accountService.deleteById(token);
	}

	// Results
	@GetMapping("/api/results")
	public ResponseEntity<Collection<Result>> getResults(@RequestHeader String token) {
		Optional<Account> account = accountService.findById(token);
		if (account.isPresent() && accountService.getMode(token).equals(ADMIN)) {
			return ResponseEntity.ok(resultService.getResults());
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}

	@PostMapping("/api/results")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Result> createResultAdmin(@RequestHeader String token, @RequestBody Result result) {
		Optional<Account> account = accountService.findById(token);
		if (account.isPresent() && accountService.getMode(token).equals(ADMIN)) {
			return ResponseEntity.ok(resultService.createResult(result, "pendingForUser"));
		}
		return ResponseEntity.notFound().build();
	}

	@PutMapping("/api/results/{id_result}")
	public ResponseEntity<Result> createResultAdmin(@RequestHeader String token, @PathVariable int id_result,
			@RequestBody String status) {
		Optional<Account> account = accountService.findById(token);
		Optional<Result> optionalResult = resultService.findById((long) id_result);

		if (optionalResult.isPresent() && account.isPresent() && accountService.getMode(token).equals(ADMIN)) {
			Result result = optionalResult.get();
			result.setStatus(status);

			resultService.save(result);
			return ResponseEntity.ok(result);
		}
		return ResponseEntity.notFound().build();
	}

	@PutMapping("/api/me/results/{id_result}")
	public ResponseEntity<Result> updateResultUser(@RequestHeader String token, @PathVariable int id_result,
			@RequestBody String status) {
		Optional<Account> account = accountService.findById(token);
		Optional<Result> optionalResult = resultService.findById((long) id_result);

		if (optionalResult.isPresent() && account.isPresent() && account.get().getId().equals(token)) {
			Result result = optionalResult.get();
			result.setStatus(status);
			resultService.save(result);
			return ResponseEntity.ok(result);
		}
		return ResponseEntity.notFound().build();
	}

	// Runner

	@GetMapping("/api/runners/")
	public ResponseEntity<Collection<Pair<String, String>>> getAllRunner() {
		Collection<Runner> runners = runnerService.findAll();
		Collection<Pair<String, String>> runnersData = new ArrayList<Pair<String, String>>();
	
		runners.forEach(runner ->
			{
				runnersData.add(Pair.of(runner.getUsername(), runner.getAvatar()));
			}	
		);

		return ResponseEntity.ok(runnersData);
	}

	@PostMapping("/api/runners")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Runner> createRunner(@RequestHeader String token, @RequestBody Runner runner) {
		Optional<Account> account = accountService.findById(token);
		if (account.isPresent()) {
			runner.setId(token);
			return ResponseEntity.ok(runnerService.createRunner(runner));
		}
		return ResponseEntity.notFound().build();
	}

	// api/runners?top=5

	@GetMapping("/api/runners/{token}")
	public ResponseEntity<Runner> getRunner(@PathVariable String token, @RequestHeader String adminToken) {
		Optional<Account> account = accountService.findById(adminToken);
		if (account.isPresent() && account.get().getMode().equals(ADMIN)) {
			Optional<Runner> runner = runnerService.findById(token);
			return ResponseEntity.of(runner);
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}

	// api/runners/{id_runner}/stats muestra el medallero compartido con un runner.
	@GetMapping("/api/runners/{token}/stats")
	public Collection<Result> getRunnerStats(@RequestHeader String token, @PathVariable String tokenRunner) {
		if (!shareService.areStatsSharedForRunnner(token, tokenRunner)
				&& !shareService.areStatsSharedForRunnner(tokenRunner, token)) {
			throw new ResourceNotFoundException("Runner hasn't shared its profile");
		}
		Collection<Result> results = resultService.getResultsForRunner(tokenRunner);
		return results;
	}

	///// Me

	// GET api/me /*Muestra datos del runner*/
	@GetMapping("/api/me")
	public ResponseEntity<Pair<Account, Runner>> getMe(@RequestHeader String token) {
		Optional<Runner> runner = runnerService.findById(token);
		Optional<Account> account = accountService.findById(token);
		if (runner.isPresent() && account.isPresent()) {
			return ResponseEntity.ok(Pair.of(account.get(), runner.get()));
		}
		return ResponseEntity.notFound().build();
	}

	// GET api/me/results/ /*Muestra resultados (checked & pending) del runner*/
	@GetMapping("/api/me/results")
	public ResponseEntity<Collection<Result>> getMeResults(@RequestHeader String token) {
		Optional<Runner> runner = runnerService.findById(token);
		if (runner.isPresent()) {
			return ResponseEntity.ok(resultService.getResultsForRunner(token));
		}

		return ResponseEntity.notFound().build();
	}

	// PUT api/me *editar datos runner*
	@PutMapping("/api/me")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Runner> editRunner(@RequestBody Runner runner, @RequestHeader String token) {
		Optional<Account> optionalAccount = accountService.findById(token);
		Optional<Runner> optionalRunner = runnerService.findById(token);

		if (optionalAccount.isPresent() && optionalRunner.isPresent()) {
			Runner runnerToEdit = optionalRunner.get();

			if (runner.getName() != null) {
				runnerToEdit.setName(runner.getName());
			}

			if (runner.getUsername() != null) {
				runnerToEdit.setUsername(runner.getUsername());
			}

			if (runner.getAge() != null) {
				runnerToEdit.setAge(runner.getAge());
			}

			if (runner.getLocation() != null) {
				runnerToEdit.setLocation(runner.getLocation());
			}

			if (runner.getAvatar() != null) {
				runnerToEdit.setAvatar(runner.getAvatar());
			}

			runnerService.save(runnerToEdit);
			return ResponseEntity.ok(runnerToEdit);
		}
		return ResponseEntity.notFound().build();
	}

	// POST api/me/results/ /*permite subir resultados*/
	@PostMapping("/api/me/results")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Result> createResult(@RequestBody Result result, @RequestHeader String token) {
		Optional<Account> account = accountService.findById(token);
		if (account.isPresent()) {
			result.setTokenRunner(token);
			return ResponseEntity.ok(resultService.createResult(result, "pendingForAdmin"));
		}
		return ResponseEntity.notFound().build();
	}

	///// Sports

	@GetMapping("/api/sports")
	public Collection<Sport> getSports() {
		return sportService.getSports();
	}

	// api/sports/{id_sport}/events?top=10

	@GetMapping("/api/sports/{id}/events")
	public Collection<Event> getSportEvents(@PathVariable Integer id, @RequestParam(required = false) Integer top) {
		if (top == null) {
			top = 0;
		}
		return eventService.filterBySport(id, top);
	}

	@PostMapping("/api/sports")
	@ResponseStatus(HttpStatus.CREATED)
	public Sport createSport(@RequestBody Sport sport) {
		return sportService.createSport(sport);
	}

	///// Shares

	@GetMapping("/api/shares")
	public Collection<Pair<String, String>> getShares() {
		return shareService.getShares();
	}

	@PostMapping("/api/shares")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity createShare(@RequestHeader String token, @RequestBody String username) {
		Optional<Runner> runner = runnerService.findById(token);
		Optional<Runner> runnerToShare = runnerService.findByUsername(username);
		if (runnerToShare.isPresent() && runner.isPresent()) {
			Share share = new Share();
			Runner runnerToShareFound = runnerToShare.get();
			share.setTokenRunner1(token);
			share.setTokenRunner2(runnerToShareFound.getId());
			shareService.createShare(share);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();
	}

	///// Events
	@GetMapping("/api/events")
	public Collection<Event> getEvents(@RequestParam(required = false) Integer top) {
		if (top == null) {
			top = 0;
		}
		return eventService.getEvents(top);
	}
	// api/events?top=5

	@GetMapping("/api/events/{id}")
	public ResponseEntity<Event> getEvent(@PathVariable Long id) {
		Optional<Event> event = eventService.findById(id);

		if (!event.isPresent()) {
			throw new ResourceNotFoundException("Event not found");
		}

		return ResponseEntity.of(event);
	}

	@PostMapping("/api/events")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Event> createEvent(@RequestHeader String token, @RequestBody Event event) {
		Optional<Account> account = accountService.findById(token);
		Optional<Sport> sport = sportService.findById(event.getIdSport());

		if (account.isPresent() && accountService.getMode(token).equals(ADMIN)) {
			if (sport.isPresent()) {
				return ResponseEntity.ok(eventService.createEvent(event));
			}
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}

	@GetMapping("/api/events/{id_event}/comments")
	public ResponseEntity<Collection<Pair<Comment, String>>> getEventComments(@PathVariable Long id_event) {
		Optional<Event> event = eventService.findById(id_event);
		Collection<Pair<Comment, String>> collection = new ArrayList<Pair<Comment, String>>();
		if (event.isPresent()) {
			Collection<Comment> eventComments = commentService.getEventComments(id_event);
			eventComments.forEach(comment -> {
				Optional<Runner> eventRunner = runnerService.findById(comment.getIdRunner());
				comment.setIdRunner(null);
				collection.add(Pair.of(comment, eventRunner.get().getUsername()));
			});
			return ResponseEntity.ok(collection);
		}
		return ResponseEntity.notFound().build();
	}

	@PostMapping("/api/events/{id_event}/comments")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Pair<Runner, Comment>> createComment(@RequestHeader String token,
			@RequestBody Comment comment, @PathVariable Integer id_event) {

		Optional<Runner> runner = runnerService.findById(token);
		Optional<Event> event = eventService.findById((long) id_event);

		if (runner.isPresent() && event.isPresent()) {
			comment.setIdEvent(id_event);
			comment.setIdRunner(token);

			ZonedDateTime eventDate = event.get().getDate();
			ZonedDateTime commentDate = ZonedDateTime.now();

			if (commentDate.isBefore(eventDate)
					|| (commentDate.isAfter(eventDate) && resultService.isResultForRunnerForEvent(token, id_event))) {
				comment.setDate(commentDate);

				return ResponseEntity.ok(Pair.of(runner.get(), commentService.createComment(comment)));
			} else {
				ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
			}
		}
		return ResponseEntity.notFound().build();
	}

	@Bean
	public Docket apiDocket() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any())
				.build();
	}
}
