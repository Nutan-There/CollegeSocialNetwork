package com.collegesocialnetwork.service;

import java.util.List;

import javax.validation.Valid;

import com.collegesocialnetwork.entity.PlacementOfficer;
import com.collegesocialnetwork.entity.PlacementOfficerDTO;
import com.collegesocialnetwork.exception.PlacementOfficerNotFoundException;



public interface PlacementOfficerService {
	public PlacementOfficer addPlacementOfficer(PlacementOfficer placementOfficer);
	
	public PlacementOfficer updatePlacementOfficer(PlacementOfficerDTO placementOfficerDTO) throws PlacementOfficerNotFoundException;
	
	public String deletePlacementOfficerByStudentId(Integer studentId) throws PlacementOfficerNotFoundException;
	
	public PlacementOfficer getPlacementOfficerById(@Valid Integer studentId) throws PlacementOfficerNotFoundException;
	
	public List<PlacementOfficer> showPlacementOfficer();

	PlacementOfficer deletePlacementOfficerById(Integer studentId) throws PlacementOfficerNotFoundException;

	
	
	

}
