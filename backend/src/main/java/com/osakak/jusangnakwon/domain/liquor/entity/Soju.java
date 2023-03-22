package com.osakak.jusangnakwon.domain.liquor.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "soju")
public class Soju {
    @Id
    @GeneratedValue
    private Long id;
    private String name;


}
