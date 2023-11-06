package ar.uba.fi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;


@Entity
public class Result {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long id_runner;
    private Long id_event;
    private int status;
    private LocalDateTime race_time;

    public Result(){
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdRunner() {
        return this.id_runner;
    }

    public void setIdRunner(Long id_runner) {
        this.id_runner = id_runner;
    }

    public Long getIdEvent() {
        return this.id_event;
    }
    
    public void setIdEvent(Long id_event) {
        this.id_event = id_event;
    }

    public int getStatus() {
        return this.status;
    }
    
    public void setStatus(int status) {
        this.status = status;
    }

    public LocalDateTime getRaceTime() {
        return this.race_time;
    }
    
    public void setRaceTime(LocalDateTime race_time) {
        this.race_time = race_time;
    }


}


