package ar.uba.fi.repository;

import ar.uba.fi.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface CommentRepository extends JpaRepository<Comment, Long> {

    Comment findCommentById(Long id);

    @Override
    List<Comment> findAll();
}
