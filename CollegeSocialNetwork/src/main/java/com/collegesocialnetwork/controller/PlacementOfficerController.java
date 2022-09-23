package com.collegesocialnetwork.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.collegesocialnetwork.entity.PlacementOfficer;
import com.collegesocialnetwork.entity.PlacementOfficerDTO;
import com.collegesocialnetwork.exception.PlacementOfficerNotFoundException;
import com.collegesocialnetwork.service.PlacementOfficerService;
@RestController
@RequestMapping("v1")
@CrossOrigin(value = "http://localhost:4200/")
public class PlacementOfficerController {
	@Autowired
	private PlacementOfficerService placementOfficerService;
	
	@PostMapping("placementOfficer")
	public PlacementOfficer addPlacementOfficer(@Valid@RequestBody PlacementOfficerDTO placementOfficerDTO) {
		PlacementOfficer placementOfficer = new PlacementOfficer(placementOfficerDTO.getStudentId(),placementOfficerDTO.getRequirements(),placementOfficerDTO.getPlacedStudent());
		return this.placementOfficerService.addPlacementOfficer(placementOfficer);
		
	}
	@PutMapping("placementOfficer")
	public PlacementOfficer updatePlacementOfficer(@RequestBody PlacementOfficer placementofficer) throws PlacementOfficerNotFoundException{
		return placementofficer;
		
	}
	@DeleteMapping("placementOfficer/{studentId}")
	public PlacementOfficer deletePlacementOfficer(@PathVariable("studentId")Integer studentId) throws PlacementOfficerNotFoundException {
		return this.placementOfficerService.deletePlacementOfficerById(studentId);
		
	}
	@GetMapping("placementofficer/{studentId}")
	public PlacementOfficer getPlacementofficerById(@PathVariable("studentId")Integer studentId) throws  PlacementOfficerNotFoundException{
		return this.placementOfficerService.getPlacementOfficerById(studentId);
		
	}
	@GetMapping("placementofficers")
	public List<PlacementOfficer> getAllPlacementofficers(){
		return this.placementOfficerService.showPlacementOfficer();
		
	}

}
