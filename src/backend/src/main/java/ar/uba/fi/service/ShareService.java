package ar.uba.fi.service;

import ar.uba.fi.model.Share;
import ar.uba.fi.repository.ShareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class ShareService {

    @Autowired
    private ShareRepository shareRepository;

    public Share createShare(Share share) {
        return shareRepository.save(share);
    }

    public Collection<Share> getShares() {
        return shareRepository.findAll();
    }

    public Boolean areStatsSharedForRunnner(String token, String tokenRunner) {
        List<Share> shareForRunner = shareRepository.findShareByTokenRunner1(tokenRunner);
        if (shareForRunner.stream().filter(share -> share.getTokenRunner2() == token).count() ==  1) {
            return true;
        };

        return false;
    }
}
