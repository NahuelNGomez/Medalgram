package ar.uba.fi.service;

import ar.uba.fi.model.Share;
import ar.uba.fi.repository.ShareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

public class ShareService {

    @Autowired
    private ShareRepository shareRepository;

    public Share createShare(Share share) {
        return shareRepository.save(share);
    }

    public Collection<Share> getShares() {
        return shareRepository.findAll();
    }
}
