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
        if (isSportInDb(name)) return;

        String sql = "INSERT INTO Sports (name) VALUES (?)";
        jdbcTemplate.update(sql, name.toUpperCase());
    }

    public boolean isSportInDb(String sportName) {
        String sql = "SELECT COUNT(*) FROM Sports WHERE name = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, sportName.toUpperCase());
        return count != null && count > 0;
    }

}
