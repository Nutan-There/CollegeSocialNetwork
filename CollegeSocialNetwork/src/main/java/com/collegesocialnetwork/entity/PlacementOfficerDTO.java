package com.collegesocialnetwork.entity;

import javax.validation.constraints.NotNull;

public class PlacementOfficerDTO {
	Integer studentId;
	String requirements;
    String placedStudent;

	public PlacementOfficerDTO() {
		super();
	}

	public PlacementOfficerDTO(Integer studentId, String requirements, String placedStudent) {
		super();
		this.studentId = studentId;
		this.requirements = requirements;
		this.placedStudent = placedStudent;
	}

	public Integer getStudentId() {
		return studentId;
	}

	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}

	public String getRequirements() {
		return requirements;
	}

	public void setRequirements(String requirements) {
		this.requirements = requirements;
	}

	public String getPlacedStudent() {
		return placedStudent;
	}

	public void setPlacedStudent(String placedStudent) {
		this.placedStudent = placedStudent;
	}

}
