package com.fertisense.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class SoilTest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String crop;
    private double nitrogen;
    private double phosphorus;
    private double potassium;
    private double ph;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCrop() {
        return crop;
    }

    public void setCrop(String crop) {
        this.crop = crop;
    }

    public double getNitrogen() {
        return nitrogen;
    }

    public void setNitrogen(double nitrogen) {
        this.nitrogen = nitrogen;
    }

    public double getPhosphorus() {
        return phosphorus;
    }

    public void setPhosphorus(double phosphorus) {
        this.phosphorus = phosphorus;
    }

    public double getPotassium() {
        return potassium;
    }

    public void setPotassium(double potassium) {
        this.potassium = potassium;
    }

    public double getPh() {
        return ph;
    }

    public void setPh(double ph) {
        this.ph = ph;
    }
}