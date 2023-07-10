package com.Medicare.entity.model.services;

import java.util.Set;

import com.Medicare.entity.model.Ordered;

public interface OrderedService {
public Ordered createordered(Ordered ordered);
public Ordered updateordered(Ordered ordered);
public Set<Ordered> getallordered();
public Ordered getorderedbyid(Long orderedid);
public void deleteorderedbyid(Long orderedid);
}
