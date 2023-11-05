package ar.uba.fi.tdd.docker_demo.backend.db_manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class TableManager {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public TableManager(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int getRecordCount(String tableName) {
        String sql = "SELECT COUNT(*) FROM " + tableName;
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class);
        return count != null ? count : 0;
    }

    public boolean createRecord(String tableName, Map<String, Object> cols) {
        if (isRecordInDb(tableName, cols)) return false;

        String sql = createInsertSql(tableName, cols);

        try {
            jdbcTemplate.update(sql, cols.values().toArray());
        } catch (DataAccessException e) {
            return false;
        }
        return true;
    }

    public boolean deleteRecord(String tableName, Map<String, Object> cols) {
        if (!isRecordInDb(tableName, cols)) return false;

        String sql = createDeleteSql(tableName, cols);
        int rowsAffected = jdbcTemplate.update(sql, cols.values().toArray());
        return rowsAffected > 0;
    }

    public boolean isRecordInDb(String tableName, Map<String, Object> cols) {
        String sql = createSelectSql(tableName, cols);
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, cols.values().toArray());
        return count != null && count > 0;
    }

    public int getRecordID(String tableName, Map<String, Object> cols) {
        String sql = createFindSql(tableName, cols);
        Integer id = jdbcTemplate.queryForObject(sql, Integer.class, cols.values().toArray());
        return id != null ? id : -1;
    }

    private String createInsertSql(String tableName, Map<String, Object> cols) {
        StringBuilder sql = new StringBuilder("INSERT INTO " + tableName + " (");
        for (String col : cols.keySet()) {
            sql.append(col).append(", ");
        }
        // Remove the last ", "
        sql.setLength(sql.length() - 2);
        sql.append(") VALUES (");
        for (int i = 0; i < cols.size(); i++) {
            sql.append("?, ");
        }
        // Remove the last ", "
        sql.setLength(sql.length() - 2);
        sql.append(")");
        return sql.toString();
    }

    private String createDeleteSql(String tableName, Map<String, Object> cols) {
        StringBuilder sql = new StringBuilder("DELETE FROM " + tableName + " WHERE ");
        for (String col : cols.keySet()) {
            sql.append(col).append(" = ? AND ");
        }
        // Remove the last " AND "
        sql.setLength(sql.length() - 5);
        return sql.toString();
    }

    private String createSelectSql(String tableName, Map<String, Object> cols) {
        StringBuilder sql = new StringBuilder("SELECT COUNT(*) FROM " + tableName + " WHERE ");
        for (String col : cols.keySet()) {
            sql.append(col).append(" = ? AND ");
        }
        // Remove the last " AND "
        sql.setLength(sql.length() - 5);
        return sql.toString();
    }

    private String createFindSql(String tableName, Map<String, Object> cols) {
        StringBuilder sql = new StringBuilder("SELECT id FROM " + tableName + " WHERE ");
        for (String col : cols.keySet()) {
            sql.append(col).append(" = ? AND ");
        }
        // Remove the last " AND "
        sql.setLength(sql.length() - 5);
        return sql.toString();
    }
}
