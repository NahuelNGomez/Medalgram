package ar.uba.fi.model;

import javax.persistence.*;

@Entity
@Table(name = "Shares")
public class Share {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_runner1")
    private String tokenRunner1;

    @Column(name = "id_runner2")
    private String tokenRunner2;

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getTokenRunner1() { return tokenRunner1; }

    public void setTokenRunner1(String idRunner1) { this.tokenRunner1 = idRunner1; }

    public String getTokenRunner2() { return tokenRunner2; }

    public void setTokenRunner2(String idRunner2) { this.tokenRunner2 = idRunner2; }
}