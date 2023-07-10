package com.Medicare.entity.model.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Medicare.entity.model.Ordered;

public interface OrderedRepository extends JpaRepository<Ordered, Long> {

}
