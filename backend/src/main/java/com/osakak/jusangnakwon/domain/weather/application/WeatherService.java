package com.osakak.jusangnakwon.domain.weather.application;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.osakak.jusangnakwon.common.response.ResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
public class WeatherService {

    public ResponseEntity<ResponseDto> getWeather() throws IOException {
        ZoneId zoneId = ZoneId.of("Asia/Seoul");
        LocalDate now = LocalDate.now(zoneId);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
        String formatedNow = now.format(formatter);

        StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst"); /*URL*/
        urlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=tmM1FZJWOpdVcZJ3%2B1SYXLeOQv5s2PsQpJ%2FeD9R12YdG%2BJH0ypXmBGin94ik0MCsAaM%2FJ1pCY1pRen97u06n2g%3D%3D"); /*Service Key*/
        urlBuilder.append("&" + URLEncoder.encode("pageNo", "UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); /*페이지번호*/
        urlBuilder.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "=" + URLEncoder.encode("1000", "UTF-8")); /*한 페이지 결과 수*/
        urlBuilder.append("&" + URLEncoder.encode("dataType", "UTF-8") + "=" + URLEncoder.encode("JSON", "UTF-8")); /*요청자료형식(XML/JSON) Default: XML*/
        urlBuilder.append("&" + URLEncoder.encode("base_date", "UTF-8") + "=" + URLEncoder.encode(formatedNow, "UTF-8")); /*‘21년 6월 28일 발표*/
        urlBuilder.append("&" + URLEncoder.encode("base_time", "UTF-8") + "=" + URLEncoder.encode("0600", "UTF-8")); /*06시 발표(정시단위) */
        urlBuilder.append("&" + URLEncoder.encode("nx", "UTF-8") + "=" + URLEncoder.encode("55", "UTF-8")); /*예보지점의 X 좌표값*/
        urlBuilder.append("&" + URLEncoder.encode("ny", "UTF-8") + "=" + URLEncoder.encode("127", "UTF-8")); /*예보지점의 Y 좌표값*/
        URL url = new URL(urlBuilder.toString());
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;
        if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        rd.close();
        conn.disconnect();

        System.out.println("초단기 예보 : ");
        System.out.println(sb.toString());

        String weather = sb.toString();
        JsonObject jsonObject = JsonParser.parseString(weather).getAsJsonObject();
        JsonObject parse_response = (JsonObject) jsonObject.get("response");
        JsonObject parse_body = (JsonObject) parse_response.get("body");
        JsonObject parse_items = (JsonObject) parse_body.get("items");
        JsonArray parse_item = (JsonArray) parse_items.get("item");
        System.out.println(parse_item.get(0));


//        StringBuilder urlBuilder2 = new StringBuilder("http://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo"); /*URL*/
//        urlBuilder2.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=tmM1FZJWOpdVcZJ3%2B1SYXLeOQv5s2PsQpJ%2FeD9R12YdG%2BJH0ypXmBGin94ik0MCsAaM%2FJ1pCY1pRen97u06n2g%3D%3D"); /*Service Key*/
//        urlBuilder2.append("&" + URLEncoder.encode("returnType", "UTF-8") + "=" + URLEncoder.encode("xml", "UTF-8")); /*xml 또는 json*/
//        urlBuilder2.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "=" + URLEncoder.encode("100", "UTF-8")); /*한 페이지 결과 수*/
//        urlBuilder2.append("&" + URLEncoder.encode("pageNo", "UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); /*페이지번호*/
//        urlBuilder2.append("&" + URLEncoder.encode("year", "UTF-8") + "=" + URLEncoder.encode("2023", "UTF-8")); /*측정 연도*/
////        urlBuilder2.append("&" + URLEncoder.encode("itemCode", "UTF-8") + "=" + URLEncoder.encode("PM10", "UTF-8")); /*미세먼지 항목 구분(PM10, PM25), PM10/PM25 모두 조회할 경우 파라미터 생략*/
//        URL url2 = new URL(urlBuilder2.toString());
//        HttpURLConnection conn2 = (HttpURLConnection) url2.openConnection();
//        conn2.setRequestMethod("GET");
//        conn2.setRequestProperty("Content-type", "application/json");
//        System.out.println("Response code: " + conn2.getResponseCode());
//
//        if (conn2.getResponseCode() >= 200 && conn2.getResponseCode() <= 300) {
//            rd = new BufferedReader(new InputStreamReader(conn2.getInputStream()));
//        } else {
//            rd = new BufferedReader(new InputStreamReader(conn2.getErrorStream()));
//        }
//
//        while ((line = rd.readLine()) != null) {
//            sb.append(line);
//        }
//        rd.close();
//        conn2.disconnect();
//        System.out.println("미세먼지 : ");
//        System.out.println(sb.toString());
//        String dust = sb.toString();
        ResponseDto responseDto = ResponseDto.builder()
                .body(weather)
                .build();

        return ResponseEntity.ok(responseDto);
    }
}

