package ar.uba.fi.tdd.docker_demo.backend.db_manager;

import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.jdbc.core.JdbcTemplate;

public class TableManagerTest {

    @InjectMocks
    private TableManager tableManager;

    @Mock
    private JdbcTemplate jdbcTemplate;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

//    TODO: Uncomment end this test and make it pass
//    @Test
//    public void testCreateRecord() {
//        String tableName = "Sports";
//        Object[] args = new Object[]{"Football"};
//        when(jdbcTemplate.queryForObject(anyString(), eq(Integer.class), any())).thenReturn(0);
//        tableManager.createRecord(tableName, args);
//        verify(jdbcTemplate, times(1)).queryForObject(anyString(), eq(Integer.class), eq(args));
//        verify(jdbcTemplate, times(1)).update(anyString(), eq(args));
//    }
//
//    @Test
//    public void testIsRecordInDb() {
//        String tableName = "Sports";
//        Object[] args = new Object[]{"Football"};
//        when(jdbcTemplate.queryForObject(anyString(), eq(Integer.class), any())).thenReturn(1);
//        tableManager.isRecordInDb(tableName, args);
//        verify(jdbcTemplate, times(1)).queryForObject(anyString(), eq(Integer.class), eq(args));
//    }
}
