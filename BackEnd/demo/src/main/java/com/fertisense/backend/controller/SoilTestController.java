package com.fertisense.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.fertisense.backend.entity.SoilTest;
import com.fertisense.backend.repository.SoilTestRepository;

@RestController
@RequestMapping("/api/soil-tests")
@CrossOrigin(origins = "*")
public class SoilTestController {

    @Autowired
    private SoilTestRepository soilTestRepository;

    @PostMapping
    public SoilTest saveSoilTest(@RequestBody SoilTest soilTest) {

        return soilTestRepository.save(soilTest);
    }
}