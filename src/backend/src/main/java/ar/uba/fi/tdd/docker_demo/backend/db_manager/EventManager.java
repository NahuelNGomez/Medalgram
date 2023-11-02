package ar.uba.fi.tdd.docker_demo.backend.db_manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class EventManager {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public EventManager(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void createEvent(String name, int sportId) {
        String sql = "INSERT INTO Event (name, id_sport) VALUES (?, ?)";
        jdbcTemplate.update(sql, name, sportId);
    }
}
