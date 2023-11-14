package ar.uba.fi.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_event")
    private Integer idEvent;

    @Column(name = "id_runner")
    private Integer idRunner;

    @Column(name = "content")
    private String content;

    @Column(name = "date")
    private Date date;

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

    public Integer getIdRunner() {
        return idRunner;
    }

    public void setIdRunner(Integer idRunner) {
        this.idRunner = idRunner;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
