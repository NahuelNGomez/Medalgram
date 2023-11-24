package ar.uba.fi.model;

import javax.persistence.*;

@Entity
@Table(name = "Events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_sport", nullable = false)
    private Integer idSport;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "date", nullable = false)
    private String date;

    @Column(name = "url")
    private String url;

    @Column(name = "description")
    private String description;

    @Column(name = "edition")
    private String edition;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getIdSport() {
        return idSport;
    }

    public void setIdSport(Integer idSport) {
        this.idSport = idSport;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation(){
    	return location;
    }

    public void setLocation(String location){
    	this.location = location;
    }

    public String getDate(){
    	return date;
    }

    public void setDate(String date){
    	this.date = date;
    }

    public String getUrl(){
    	return url;
    }

    public void setUrl(String url){
    	this.url = url;
    }

    public String getDescription(){
    	return description;
    }

    public void setDescription(String description){
    	this.description = description;
    }

    public String getEdition(){
    	return edition;
    }

    public void setEdition(String edition){
    	this.edition = edition;
    }
}
