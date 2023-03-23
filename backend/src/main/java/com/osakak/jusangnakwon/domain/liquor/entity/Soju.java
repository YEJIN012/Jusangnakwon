package com.osakak.jusangnakwon.domain.liquor.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "soju")
@ToString
public class Soju {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @OneToOne(mappedBy = "soju")
    private SimilarLiquor similarLiquor;
}
