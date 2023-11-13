package ar.uba.fi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comment {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;
        private Long id_runner;
        private Long id_event;
        private String content;
        private String date;

        public Comment(){
        }

        public Long getId() {
            return this.id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public Long getIdRunner() {
            return this.id_runner;
        }

        public void setIdRunner(Long id_runner) {
            this.id_runner = id_runner;
        }

        public Long getIdEvent() {
            return this.id_event;
        }

        public void setIdEvent(Long id_event) {
            this.id_event = id_event;
        }

        public String getContent() {
            return this.content;
        }

        public void setContent(String content) {
            this.content = content;
        }

        public String getDate() {
            return this.date;
        }

        public void setDate(String date) {
            this.date = date;
        }
}
