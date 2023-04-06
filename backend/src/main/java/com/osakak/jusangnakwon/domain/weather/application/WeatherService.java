package com.osakak.jusangnakwon.domain.weather.application;

import com.osakak.jusangnakwon.common.aophandler.LogHandler;
import com.osakak.jusangnakwon.domain.weather.api.response.WeatherResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilderFactory;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
public class WeatherService {

    private static final Logger logger = LoggerFactory.getLogger(LogHandler.class);
    static String[] weathers = {"맑음", "흐림", "비", "눈"};

    public WeatherResponse getWeather() throws IOException {

        String[] v = new String[5];
        String s = get(61, 125, v); // 서울시 강남구 역삼1동

        if (s == null) { // ok!
            logger.info("got weather information");
        } else {
            logger.debug("Error : " + s);
        }
        String message = null;
        String type = null;
        int temperature = Integer.parseInt(v[3]);
        if (v[2].equals("맑음")) {
            if (temperature < 0) {
                message = "호달달 너무 춥네요/n 위스키 한잔으로 뜨거워져봐요?";
                type = "e";
            } else if (temperature >= 0 && temperature < 26) {
                message = "봄바람 맞으며/n 피크닉 치맥 어떠세요?";
                type = "d";
            } else {
                message = "푹찌는 여름엔/n 살얼음 동동 생맥주 한잔~!";
                type = "b";
            }
        } else if (v[2].equals("비")) {
            message = "꿀꿀한 비 오는 날/n 파전에 막걸리 어떠세요?";
            type = "a";
        } else if (v[2].equals("눈")) {
            message = "분위기 있게/n 스테이크와 레드와인/n 어때요?";
            type = "f";
        } else if (v[2].equals("흐림")) {
            message = "흐린 날엔 역시,/n 삼겹살에 쏘주로 텐션 업!";
            type = "c";
        } else {
            message = "어떤 날씨든 술과 함께라면 행복할거야";
            type = "g";
        }

        WeatherResponse weatherResponse = WeatherResponse.builder()
                .message(message)
                .temperature(Integer.parseInt(v[3]))
                .type(type)
                .build();

        return weatherResponse;
    }

    public static String get(int x, int y, String[] v) {
        HttpURLConnection con = null;
        String s = null;

        try {

            ZoneId zoneId = ZoneId.of("Asia/Seoul");
            ZonedDateTime zonedDateTime = ZonedDateTime.now(zoneId).minusMinutes(30);

            URL url = new URL(
                    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst"
                            + "?ServiceKey=tmM1FZJWOpdVcZJ3%2B1SYXLeOQv5s2PsQpJ%2FeD9R12YdG%2BJH0ypXmBGin94ik0MCsAaM%2FJ1pCY1pRen97u06n2g%3D%3D"
                            + "&numOfRows=60"
                            + "&base_date=" + zonedDateTime.format(DateTimeFormatter.ofPattern("yyyyMMdd"))
                            + "&base_time=" + zonedDateTime.format(DateTimeFormatter.ofPattern("HHmm"))
                            + "&nx=" + x
                            + "&ny=" + y
            );

            con = (HttpURLConnection) url.openConnection();
            Document doc = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(con.getInputStream());

            boolean ok = false;

            Element e;
            NodeList ns = doc.getElementsByTagName("header");
            if (ns.getLength() > 0) {
                e = (Element) ns.item(0);
                if ("00".equals(e.getElementsByTagName("resultCode").item(0).getTextContent()))
                    ok = true;
                else
                    s = e.getElementsByTagName("resultMsg").item(0).getTextContent();
            }

            if (ok) {
                String fd = null, ft = null;
                String pty = null;
                String sky = null;
                String cat;
                String val;

                ns = doc.getElementsByTagName("item");
                for (int i = 0; i < ns.getLength(); i++) {
                    e = (Element) ns.item(i);

                    if (ft == null) {
                        fd = e.getElementsByTagName("fcstDate").item(0).getTextContent();
                        ft = e.getElementsByTagName("fcstTime").item(0).getTextContent();
                    } else if (!fd.equals(e.getElementsByTagName("fcstDate").item(0).getTextContent()) ||
                            !ft.equals(e.getElementsByTagName("fcstTime").item(0).getTextContent()))
                        continue;

                    cat = e.getElementsByTagName("category").item(0).getTextContent();
                    val = e.getElementsByTagName("fcstValue").item(0).getTextContent();

                    if ("PTY".equals(cat)) pty = val;
                    else if ("SKY".equals(cat)) sky = val;
                    else if ("T1H".equals(cat)) v[3] = val;
                    else if ("REH".equals(cat)) v[4] = val;
                }

                v[0] = fd;
                v[1] = ft;

                if ("0".equals(pty)) {
                    if ("1".equals(sky)) v[2] = weathers[0];
                    else if ("3".equals(sky)) v[2] = weathers[1];
                    else if ("4".equals(sky)) v[2] = weathers[1];
                } else if ("1".equals(pty)) v[2] = weathers[2];
                else if ("2".equals(pty)) v[2] = weathers[2];
                else if ("3".equals(pty)) v[2] = weathers[3];
                else if ("5".equals(pty)) v[2] = weathers[2];
                else if ("6".equals(pty)) v[2] = weathers[2];
                else if ("7".equals(pty)) v[2] = weathers[3];
            }
        } catch (Exception e) {
            s = e.getMessage();
        }

        if (con != null)
            con.disconnect();

        return s;
    }
}

