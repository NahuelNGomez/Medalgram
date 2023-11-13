package ar.uba.fi.repository;

import ar.uba.fi.model.Sport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.*;


@RepositoryRestResource
public interface SportRepository extends CrudRepository<Sport, Long> { //extends RepositorySetUp {//

    Sport findSportByName(Long id);

    @Override
    List<Sport> findAll();


    /*
    public SportRepository() {
        super();
    }

    public Sport save(Sport sport){
        String tableName = "Sports";
        int sportNumber = tableManager.getRecordCount(tableName) + 1;

        Map<String, Object> cols = new HashMap<>();
        cols.put("name", "SPORT" + sportNumber);

        boolean isCreated = tableManager.createRecord(tableName, cols);

        return sport;
    }

    public Collection<Sport> findAll(){
        String tableName = "Sports";

        //return tableManager.getAllRecords(tableName);
        return Collections.emptyList();
    }

     */

}