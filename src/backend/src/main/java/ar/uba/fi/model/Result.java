package ar.uba.fi.model;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Table(name = "Results")
public class Result {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_runner")
    private String idRunner;

    @Column(name = "id_event")
    private Integer idEvent;

    @Column(name = "status")
    private String status;

    @Column(name = "time")
    private Time time;

    public Long getId() {
        return id;
    }

    public String getIdRunner() {
        return idRunner;
    }

    public Integer getIdEvent() {
        return idEvent;
    }

    public String getStatus() {
        return status;
    }

    public Time getTime() {
        return time;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setIdRunner(String idRunner) {
        this.idRunner = idRunner;
    }

    public void setIdEvent(Integer idEvent) {
        this.idEvent = idEvent;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setTime(Time time) {
        this.time = time;
    }
}
