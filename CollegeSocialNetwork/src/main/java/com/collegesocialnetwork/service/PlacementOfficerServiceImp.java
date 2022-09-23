package com.collegesocialnetwork.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.collegesocialnetwork.entity.PlacementOfficer;
import com.collegesocialnetwork.entity.PlacementOfficerDTO;
import com.collegesocialnetwork.exception.PlacementOfficerNotFoundException;
import com.collegesocialnetwork.repository.PlacementOfficerRepository;

@Service
public class PlacementOfficerServiceImp implements PlacementOfficerService {
	@Autowired
	private PlacementOfficerRepository placementOfficerRepo;

	@Override

	public PlacementOfficer addPlacementOfficer(PlacementOfficer placementOfficer) {
		return this.placementOfficerRepo.save(placementOfficer);
	}

	@Override
	public PlacementOfficer updatePlacementOfficer(PlacementOfficerDTO placementOfficerDTO)
			throws PlacementOfficerNotFoundException {
		Optional<PlacementOfficer> placementOfficerOpt = this.placementOfficerRepo
				.findById(placementOfficerDTO.getStudentId());
		if (placementOfficerOpt.isEmpty())
			throw new PlacementOfficerNotFoundException(" id does not Exist");

		PlacementOfficer updatePlacementOfficer = placementOfficerOpt.get();
		updatePlacementOfficer.setRequirements(placementOfficerDTO.getRequirements());
		updatePlacementOfficer.setPlaceStudent(placementOfficerDTO.getPlacedStudent());
		return this.placementOfficerRepo.save(updatePlacementOfficer);
	}

	@Override
	public PlacementOfficer deletePlacementOfficerById(Integer studentId) throws PlacementOfficerNotFoundException {
		Optional<PlacementOfficer> placementOfficerOpt = this.placementOfficerRepo.findById(studentId);
		if (placementOfficerOpt.isEmpty())
			throw new PlacementOfficerNotFoundException(" id not exist to delete");
		this.placementOfficerRepo.deleteById(studentId);
		return placementOfficerOpt.get();
	}

	public PlacementOfficer getPlacementOfficerById(Integer studentId) throws PlacementOfficerNotFoundException {
		Optional<PlacementOfficer> placementOfficerOpt = this.placementOfficerRepo.findById(studentId);
		if (placementOfficerOpt.isEmpty())
			throw new PlacementOfficerNotFoundException(" id does not Exist");
		return placementOfficerOpt.get();
	}

	@Override
	public List<PlacementOfficer> showPlacementOfficer() {
		return this.placementOfficerRepo.findAll();
	}

	@Override
	public String deletePlacementOfficerByStudentId(Integer studentId) throws PlacementOfficerNotFoundException {
		Optional<PlacementOfficer> placementOfficerOpt = this.placementOfficerRepo.findById(studentId);
		if (placementOfficerOpt.isEmpty())
			throw new PlacementOfficerNotFoundException(" id not exist to delete");
		this.placementOfficerRepo.deleteById(studentId);
		return "Deleted successfully";

	}

	

}