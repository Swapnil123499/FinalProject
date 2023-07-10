package com.Medicare.entity.model.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Medicare.entity.model.Ordered;
import com.Medicare.entity.model.services.OrderedService;

@RestController
@RequestMapping("/ordered")
public class OrderedController {
@Autowired
private OrderedService service;
@PostMapping("/")
public Ordered createorderedcontroller(@RequestBody Ordered ordered) {
	return this.service.createordered(ordered);
}
@PutMapping("/{orderid}")
public Ordered updateorderedcontroller(@PathVariable("orderid") Long orderid,@RequestBody Ordered ordered)
{ ordered.setOrderid(orderid);
	return this.service.updateordered(ordered);
}
@GetMapping("/")
public Set<Ordered> getallorderedcontroller(){
	return this.service.getallordered();
}
@GetMapping("/{orderid}")
public Ordered getorderedbyidincontroller(@PathVariable("orderid") Long orderid) {
	return this.service.getorderedbyid(orderid);
}
@DeleteMapping("/{orderid}")
public void deleteorderedbyidcontroller(@PathVariable("orderid") Long orderid)
{
	this.service.deleteorderedbyid(orderid);
}
}
