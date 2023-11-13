package ar.uba.fi.db;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TableManagerTest {

    private TableManager tableManager;
    private JdbcTemplate jdbcTemplate;

    @BeforeEach
    public void setUp() {
        // Replace with your actual data source
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl("jdbc:postgresql://dpg-cl21ch0p2gis73ft6kug-a.oregon-postgres.render.com:5432/dbmedalgram");
        dataSource.setUsername("dbmedalgram_user");
        dataSource.setPassword("fyghQWdDao2q9NUat6qloUEzWP1jOWwa");

        jdbcTemplate = new JdbcTemplate(dataSource);
        tableManager = new TableManager(jdbcTemplate);
    }

    @Test
    public void testCreateSport() {
        String tableName = "Sports";
        int sportNumber = tableManager.getRecordCount(tableName) + 1;
        Map<String, Object> cols = new HashMap<>();
        cols.put("name", "TEST_SPORT_" + sportNumber);

        // Create a new record
        boolean isCreated = tableManager.createRecord(tableName, cols);
        assertTrue(isCreated, "Record should be created");

        tableManager.deleteRecord(tableName, cols);
    }

    @Test
    public void testCreateAndCheckSport() {
        String tableName = "Sports";
        Map<String, Object> cols = new HashMap<>();
        cols.put("name", "TEST_SPORT_0");

        tableManager.createRecord(tableName, cols);

        // Check if the record exists
        boolean isInDb = tableManager.isRecordInDb(tableName, cols);
        assertTrue(isInDb, "Record should be in the DB");

        tableManager.deleteRecord(tableName, cols);
    }

    @Test
    public void testDeleteSport() {
        String tableName = "Sports";
        Map<String, Object> cols = new HashMap<>();
        cols.put("name", "TEST_SPORT_0");

        tableManager.createRecord(tableName, cols);

        // Delete the record
        boolean isDeleted = tableManager.deleteRecord(tableName, cols);
        assertTrue(isDeleted, "Record should be deleted");
    }

    @Test
    public void testDeleteAndCheckSport() {
        String tableName = "Sports";
        Map<String, Object> cols = new HashMap<>();
        cols.put("name", "TEST_SPORT_003");

        tableManager.createRecord(tableName, cols);

        tableManager.deleteRecord(tableName, cols);

        // Check if the record exists
        boolean isInDb = tableManager.isRecordInDb(tableName, cols);
        assertFalse(isInDb, "Record should not be in the DB");
    }

    @Test
    public void integrationTest() {
        String auxTableName = "Sports";
        Map<String, Object> auxCols = new HashMap<>();
        auxCols.put("name", "TEST_SPORT_0");

        tableManager.createRecord(auxTableName, auxCols);

        String tableName = "Events";
        int eventNumber = tableManager.getRecordCount(tableName) + 1;
        Map<String, Object> cols = new HashMap<>();
        cols.put("name", "TEST_EVENT_" + eventNumber);
        cols.put("id_sport", tableManager.getRecordID(auxTableName, auxCols));

        // Create a new record
        boolean isCreated = tableManager.createRecord(tableName, cols);
        assertTrue(isCreated, "Record should be created");

        // Check if the record exists
        boolean isInDb = tableManager.isRecordInDb(tableName, cols);
        assertTrue(isInDb, "Record should be in the DB");

        // Delete the record
        boolean isDeleted = tableManager.deleteRecord(tableName, cols);
        assertTrue(isDeleted, "Record should be deleted");

        // Check if the record exists
        isInDb = tableManager.isRecordInDb(tableName, cols);
        assertFalse(isInDb, "Record should not be in the DB");

        tableManager.deleteRecord(auxTableName, auxCols);
    }

    @Test
    public void integralTest2() {
        String auxTableName = "Sports";
        int auxTableRecords = tableManager.getRecordCount(auxTableName);

        String tableName = "Events";
        int eventNumber = tableManager.getRecordCount(tableName) + 1;
        Map<String, Object> cols = new HashMap<>();
        cols.put("name", "TEST_EVENT_" + eventNumber);
        cols.put("id_sport", auxTableRecords + 1);

        // Create a new record - should fail
        boolean isCreated = tableManager.createRecord(tableName, cols);
        assertFalse(isCreated, "Record should not be created");

        // Check if the record exists
        boolean isInDb = tableManager.isRecordInDb(tableName, cols);
        assertFalse(isInDb, "Record should not be in the DB");

        // Delete the record - should fail
        boolean isDeleted = tableManager.deleteRecord(tableName, cols);
        assertFalse(isDeleted, "Record should not be deleted");

        // Check if the record exists
        isInDb = tableManager.isRecordInDb(tableName, cols);
        assertFalse(isInDb, "Record should not be in the DB");
    }

}
