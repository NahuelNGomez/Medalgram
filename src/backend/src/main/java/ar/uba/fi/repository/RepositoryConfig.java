package ar.uba.fi.repository;

import ar.uba.fi.model.Account;
import ar.uba.fi.model.Sport;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {
    // @Override
    // public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
    //     config.exposeIdsFor(Account.class);
    //     config.getCorsRegistry()
    //             .addMapping("/**")
    //             .allowedOrigins("http://localhost:33000");
    // }

    // @Bean
    // public CorsFilter corsFilter() {
    //     UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    //     CorsConfiguration config = new CorsConfiguration();
    //     config.addAllowedOrigin("");
    //     config.addAllowedMethod("");
    //     config.addAllowedHeader("*");
    //     source.registerCorsConfiguration("/**", config);
    //     return new CorsFilter(source);
    // }
}
