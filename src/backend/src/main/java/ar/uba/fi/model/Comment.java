package ar.uba.fi.model;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "Comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_event")
    private Integer idEvent;

    @Column(name = "id_runner")
    private String idRunner;

    @Column(name = "content")
    private String content;

    @Column(name = "date")
    private ZonedDateTime date;

    // getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getIdEvent() {
        return idEvent;
    }

    public void setIdEvent(Integer idEvent) {
        this.idEvent = idEvent;
    }

    public String getIdRunner() {
        return idRunner;
    }

    public void setIdRunner(String idRunner) {
        this.idRunner = idRunner;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public ZonedDateTime getDate() {
        return date;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }
}
