package ar.uba.fi.model;

import javax.persistence.*;

@Entity
@Table(name = "Shares")
public class Share {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_runner1")
    private Long id_runner1;

    @Column(name = "id_runner2")
    private Long id_runner2;

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Long getId_runner1() { return id_runner1; }

    public void setId_runner1(Long id_runner1) { this.id_runner1 = id_runner1; }

    public Long getId_runner2() { return id_runner2; }

    public void setId_runner2(Long id_runner2) { this.id_runner2 = id_runner2; }
}