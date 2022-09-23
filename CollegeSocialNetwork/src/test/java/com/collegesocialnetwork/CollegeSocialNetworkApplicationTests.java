package com.collegesocialnetwork;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.collegesocialnetwork.entity.PlacementOfficer;
import com.collegesocialnetwork.entity.PlacementOfficerDTO;
import com.collegesocialnetwork.exception.PlacementOfficerNotFoundException;
import com.collegesocialnetwork.service.PlacementOfficerService;

@SpringBootTest
class CollegeSocialNetworkApplicationTests {

	@Autowired
	private PlacementOfficerService placementOfficerService;

	
		
		@Test
	    void addPlacementOfficerTest() {
			PlacementOfficer placementOfficer=new PlacementOfficer( 1,"capgemini", "five" );
			PlacementOfficer testPlacementOfficer=this.placementOfficerService.addPlacementOfficer(placementOfficer);
	        assertNotNull(testPlacementOfficer);
	    }
	    
	    
	    @Test
	    void updatePlacementOfficerTest() {
	    	PlacementOfficerDTO placementOfficerDTO= new PlacementOfficerDTO(8,"google","nine");
	        
	    	
	        try {
	           PlacementOfficer updatePlacementOfficer = this.placementOfficerService.updatePlacementOfficer(placementOfficerDTO);
	           assertEquals("google",updatePlacementOfficer.getRequirements());
	        } catch (PlacementOfficerNotFoundException e) {
	        	
	            e.printStackTrace();
	        }
	        
	    }
	}


