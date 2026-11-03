package com.fertisense.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fertisense.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}