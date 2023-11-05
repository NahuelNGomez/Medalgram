package ar.uba.fi.service;

import ar.uba.fi.model.Sport;
import ar.uba.fi.repository.SportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class SportService {

    @Autowired
    private SportRepository sportRepository;

    public Sport createSport(Sport sport) {
        return sportRepository.save(sport);
    }

    public Collection<Sport> getSports() {
        return sportRepository.findAll();
    }

}
