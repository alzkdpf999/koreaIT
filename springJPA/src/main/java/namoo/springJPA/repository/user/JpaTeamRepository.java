package namoo.springJPA.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;

import namoo.springJPA.entity.user.Team;

public interface JpaTeamRepository extends JpaRepository<Team, Long> {

}
