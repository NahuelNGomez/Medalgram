package ar.uba.fi.tdd.docker_demo.backend.db_manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class TableManager {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public TableManager(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public boolean createRecord(String tableName, Object... args) {
        if (isRecordInDb(tableName, args)) return false;

        String sql = createInsertSql(tableName, args.length);
        jdbcTemplate.update(sql, args);
        return true;
    }

    public boolean isRecordInDb(String tableName, Object... args) {
        String sql = createSelectSql(tableName, args.length);
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, args);
        return count != null && count > 0;
    }

    private String createInsertSql(String tableName, int argCount) {
        return "INSERT INTO " + tableName + " VALUES (" + "?,".repeat(argCount - 1) +
                "?)";
    }

    private String createSelectSql(String tableName, int argCount) {
        return "SELECT COUNT(*) FROM " + tableName + " WHERE " + "col = ? AND ".repeat(argCount - 1) +
                "col = ?";
    }
}
