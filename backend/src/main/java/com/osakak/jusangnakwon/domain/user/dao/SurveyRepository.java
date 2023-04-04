package com.osakak.jusangnakwon.domain.user.dao;

import com.osakak.jusangnakwon.domain.user.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurveyRepository extends JpaRepository<Survey,Long> {

    Survey findByUserId(Long id);
}
