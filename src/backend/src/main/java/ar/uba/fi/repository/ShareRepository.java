package ar.uba.fi.repository;

import ar.uba.fi.model.Share;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ShareRepository extends JpaRepository<Share, Long> {

    Share findShareById(Long id);

    @Override
    List<Share> findAll();
}
