package service;

import ar.uba.fi.model.Comment;
import ar.uba.fi.repository.CommentRepository;
import ar.uba.fi.service.CommentService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class CommentServiceTest {

    @InjectMocks
    CommentService commentService;

    @Mock
    CommentRepository commentRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testCreateComment() {
        Comment comment = new Comment();
        comment.setId(1L);

        when(commentRepository.save(any(Comment.class))).thenReturn(comment);

        Comment createdComment = commentService.createComment(comment);

        assertEquals(comment.getId(), createdComment.getId());
        verify(commentRepository, times(1)).save(comment);
    }

    @Test
    public void testGetComments() {
        Comment comment1 = new Comment();
        comment1.setId(1L);
        Comment comment2 = new Comment();
        comment2.setId(2L);

        when(commentRepository.findAll()).thenReturn(Arrays.asList(comment1, comment2));

        commentService.getComments();

        verify(commentRepository, times(1)).findAll();
    }

    @Test
    public void testFindById() {
        Comment comment = new Comment();
        comment.setId(1L);

        when(commentRepository.findById(1L)).thenReturn(java.util.Optional.of(comment));

        assertEquals(comment, commentService.findById(1L).get());
        verify(commentRepository, times(1)).findById(1L);
    }

    @Test
    public void testDeleteById() {
        Comment comment = new Comment();
        comment.setId(1L);

        commentService.deleteById(1L);

        verify(commentRepository, times(1)).deleteById(1L);
    }

    @Test
    public void testGetEventComments() {
        Comment comment1 = new Comment();
        comment1.setId(1L);
        comment1.setIdEvent(1);
        Comment comment2 = new Comment();
        comment2.setId(2L);
        comment2.setIdEvent(2);

        when(commentRepository.findAll()).thenReturn(Arrays.asList(comment1, comment2));

        Collection<Comment> comments = commentService.getEventComments(1L);

        assertEquals(1, comments.size());
        verify(commentRepository, times(1)).findAll();
    }
}
