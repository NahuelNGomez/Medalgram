package ar.uba.fi.tdd.docker_demo.backend.db_manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class SportManager {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public SportManager(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void createSport(String name) {
        String sql = "INSERT INTO Sports (name) VALUES (?)";
        jdbcTemplate.update(sql, name);
    }
}
