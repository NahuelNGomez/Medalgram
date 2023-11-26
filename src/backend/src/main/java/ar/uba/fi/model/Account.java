package ar.uba.fi.model;

import javax.persistence.*;

@Entity
@Table(name = "Accounts")
public class Account {

    @Id
    private String id;

    @Column(name = "mode")
    private String mode;

    @Column(name = "email")
    private String email;

    @Column(name = "encrypted_pass")
    private String encryptedPass;

    @Column(name = "image")
    private String avatar;

    public String getId() {
        return id;
    }

    public String getAvatar() {
        return avatar;
    }

    public String getMode() {
        return mode;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String setId(String token) {
        return this.id = token;
    }

    public String setMode(String mode) {
        return this.mode = mode;
    }

    public String getEncryptedPass() {
        return encryptedPass;
    }

    public void setEncryptedPass(String encryptedPass) {
        this.encryptedPass = encryptedPass;
    }
}
