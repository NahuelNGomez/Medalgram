package ar.uba.fi.model;

import javax.persistence.*;

@Entity
@Table(name = "Runners")
public class Runner {

    @Id
    @Column(name = "token")
    private String token;

    @Column(name = "name")
    private String name;

    @Column(name = "username")
    private String username;

    @Column(name = "age")
    private Integer age;

    @Column(name = "location")
    private String location;

    public String getToken() {
        return token;
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

    public void setToken(String token) {
        this.token = token;
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
