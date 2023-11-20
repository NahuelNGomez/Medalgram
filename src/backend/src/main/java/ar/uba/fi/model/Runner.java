package ar.uba.fi.model;

import javax.persistence.*;

@Entity
@Table(name = "Runners")
public class Runner {

    @Id
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "username")
    private String username;

    @Column(name = "age")
    private Integer age;

    @Column(name = "location")
    private String location;

    public String getTokenRunner() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public Integer getAge() {
        return age;
    }

    public String getLocation() {
        return location;
    }

    public void setTokenRunner(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
