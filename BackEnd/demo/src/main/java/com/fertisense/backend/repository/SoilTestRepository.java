package com.fertisense.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fertisense.backend.entity.SoilTest;

public interface SoilTestRepository extends JpaRepository<SoilTest, Long> {

}