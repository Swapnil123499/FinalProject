package com.Medicare.entity.model.services.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Medicare.entity.model.Ordered;
import com.Medicare.entity.model.repo.OrderedRepository;
import com.Medicare.entity.model.services.OrderedService;
@Service
public class Orderedserviceimpl implements OrderedService {
@Autowired
private OrderedRepository repository;
	@Override
	public Ordered createordered(Ordered ordered) {
		
		return this.repository.save(ordered);
	}

	@Override
	public Ordered updateordered(Ordered ordered) {
		
		return this.repository.save(ordered);
	}

	@Override
	public Set<Ordered> getallordered() {
		
		return new LinkedHashSet<>(this.repository.findAll());
	}

	@Override
	public Ordered getorderedbyid(Long orderedid) {
		
		return this.repository.findById(orderedid).get();
	}

	@Override
	public void deleteorderedbyid(Long orderedid) {
		
   this.repository.deleteById(orderedid);
	}

}
