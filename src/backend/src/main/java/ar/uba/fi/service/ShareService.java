package ar.uba.fi.service;

import ar.uba.fi.model.Account;
import ar.uba.fi.model.Share;
import ar.uba.fi.repository.ShareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class ShareService {

    @Autowired
    private ShareRepository shareRepository;

    @Autowired
    private RunnerService runnerService;

    public Share createShare(Share share) {
        if (this.areStatsSharedForRunnner(share.getTokenRunner1(), share.getTokenRunner2())
                || this.areStatsSharedForRunnner(share.getTokenRunner2(), share.getTokenRunner1())) {
            throw new DataIntegrityViolationException("Share already exists");
        } else {
            return shareRepository.save(share);
        }
    }

    public Collection<Pair<String, String>> getShares() {
        Collection<Share> shares = shareRepository.findAll();
        Collection<Pair<String, String>> usernames = new ArrayList<Pair<String, String>>();
        for (Share share : shares) {
            String username1 = runnerService.getUsernameById(share.getTokenRunner1());
            String username2 = runnerService.getUsernameById(share.getTokenRunner2());
            usernames.add(Pair.of(username1, username2));
        }
        return usernames;
    }

    public Boolean areStatsSharedForRunnner(String token, String tokenRunner) {
        List<Share> shareForRunner = shareRepository.findShareByTokenRunner1(tokenRunner);
        if (shareForRunner.stream().filter(share -> share.getTokenRunner2().equals(token)).count() >= 1) {
            return true;
        }
        return false;
    }
}
