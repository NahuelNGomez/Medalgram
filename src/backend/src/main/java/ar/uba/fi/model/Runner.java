package ar.uba.fi.model;

import javax.persistence.*;

@Entity
@Table(name = "Runners")
public class Runner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "encrypted_pass")
    private String encryptedPass;

    @Column(name = "name")
    private String name;

    @Column(name = "username")
    private String username;

    @Column(name = "age")
    private Integer age;

    @Column(name = "location")
    private String location;

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getEncryptedPass() {
        return encryptedPass;
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

    public void setId(Long id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setEncryptedPass(String encryptedPass) {
        this.encryptedPass = encryptedPass;
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
