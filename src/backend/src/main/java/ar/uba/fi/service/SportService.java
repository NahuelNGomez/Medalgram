package ar.uba.fi.service;

import ar.uba.fi.model.Sport;
import ar.uba.fi.repository.SportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class SportService {

    @Autowired
    private SportRepository sportRepository;

    public Sport createSport(Sport sport) {
        Optional<Sport> sportAdded = sportRepository.findSportByName(sport.getName());
        if (sportAdded.isPresent()) {
            throw new DataIntegrityViolationException("Sport already exists");
        }
        return sportRepository.save(sport);
    }

    public Collection<Sport> getSports() {
        return sportRepository.findAll();
    }

    public Optional<Sport> findById(int id) {
        return sportRepository.findById((long) id);
    }

}