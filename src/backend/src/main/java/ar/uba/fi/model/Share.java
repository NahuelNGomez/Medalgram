package ar.uba.fi.model;

import javax.persistence.*;

@Entity
@Table(name = "Shares")
public class Share {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_runner1")
    private Long tokenRunner1;

    @Column(name = "id_runner2")
    private Long tokenRunner2;

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Long getTokenRunner1() { return tokenRunner1; }

    public void setTokenRunner1(Long idRunner1) { this.tokenRunner1 = idRunner1; }

    public Long getTokenRunner2() { return tokenRunner2; }

    public void setTokenRunner2(Long idRunner2) { this.tokenRunner2 = idRunner2; }
}