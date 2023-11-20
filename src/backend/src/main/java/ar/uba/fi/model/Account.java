package ar.uba.fi.model;

import javax.persistence.*;

@Entity
@Table(name = "Accounts")
public class Account {

    @Id
    private String id;

    private String mode;

    @Column(name = "email")
    private String email;

    @Column(name = "encrypted_pass")
    private String encryptedPass;

    public String getToken() { return id; }

    public String getMode() { return mode; }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    public String setToken(String token) { return this.id = token; }

    public String setMode(String mode) { return this.mode = mode; }

    public String getEncryptedPass() { return encryptedPass; }

    public void setEncryptedPass(String encryptedPass) { this.encryptedPass = encryptedPass; }
}
