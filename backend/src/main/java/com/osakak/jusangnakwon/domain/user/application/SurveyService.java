package com.osakak.jusangnakwon.domain.user.application;

import com.osakak.jusangnakwon.domain.user.api.request.SurveyRequest;
import com.osakak.jusangnakwon.domain.user.dao.SurveyRepository;
import com.osakak.jusangnakwon.domain.user.dto.UserResponseDto;
import com.osakak.jusangnakwon.domain.user.entity.Survey;
import com.osakak.jusangnakwon.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SurveyService {
    private SurveyRepository surveyRepository;

    /**
     * 취향설문 저장
     *
     * @param user
     * @param requestSurvey
     */
    public void saveSurvey(User user, SurveyRequest requestSurvey) {
        Survey survey = Survey.builder()
                .userId(user.getId())
                .aroma(requestSurvey.getAroma())
                .sour(requestSurvey.getSour())
                .bitter(requestSurvey.getBitter())
                .sweetness(requestSurvey.getSweetness())
                .body(requestSurvey.getBody())
                .build();
        surveyRepository.save(survey);
    }
}
