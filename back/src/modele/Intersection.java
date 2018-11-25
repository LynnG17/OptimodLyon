package modele;

import java.util.ArrayList;


public class Intersection {
	private int id;
	private float latitude;
	private float longitude;
	
	public boolean equals(Intersection i2){
		if(this.id == i2.id)
		{
			return true;
		} else {
			return false;
		}

	}

	public ArrayList<Intersection> findSuccessors(ArrayList<Segment> listSegment){
		ArrayList<Intersection> listSuccessors = new ArrayList();
		Intersection current;
		for(int i=0; i<listSegment.size(); i++)
		{
			current = listSegment(i).getStart();
			if(this.equals(current))
			{
				listSuccessors.add(listSegment(i).getEnd());
			}
		}
		return listSuccessors;
	}

	/**
	 * @return the latitude
	 */
	public float getLatitude() {
		return latitude;
	}

	/**
	 * @param latitude the latitude to set
	 */
	public void setLatitude(float latitude) {
		this.latitude = latitude;
	}

	/**
	 * @return the longitude
	 */
	public float getLongitude() {
		return longitude;
	}

	/**
	 * @param longitude the longitude to set
	 */
	public void setLongitude(float longitude) {
		this.longitude = longitude;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}
}

