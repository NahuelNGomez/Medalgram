package ar.uba.fi.service;

import ar.uba.fi.model.Comment;
import ar.uba.fi.repository.AccountRepository;
import ar.uba.fi.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

import java.util.Collection;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public void getComments(){
        commentRepository.findAll();
    }

    public Optional<Comment> findById(Long id) {
        return commentRepository.findById(id);
    }

    public void deleteById(Long id) {
        commentRepository.deleteById(id);
    }

    public Collection<Comment> getEventComments(Long id_event) {
        return commentRepository.findAll().stream().filter(comment -> comment.getIdEvent().longValue() == id_event).collect(java.util.stream.Collectors.toList());
    }
}
