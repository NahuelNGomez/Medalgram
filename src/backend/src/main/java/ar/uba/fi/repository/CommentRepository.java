package ar.uba.fi.repository;

import ar.uba.fi.model.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface CommentRepository extends CrudRepository<Comment, Long> {

    Comment findEventById(Long id);

    @Override
    List<Comment> findAll();
}

