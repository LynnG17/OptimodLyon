package modele;

import java.util.ArrayList;


public class Intersection {
	private int id;
	private float latitude;
	private float longitude;
	
	/**
	 * Constructor
	 * @param anId
	 * @param aLatitude
	 * @param aLongitude
	 */
	public Intersection (int anId, float aLatitude, float aLongitude){
		id = anId;
		latitude = aLatitude;
		longitude = aLongitude;
	}

	public Intersection (){
		id=0;
		latitude=0;
		longitude=0;
	}
	/*ArrayList<Intersection> findSuccessors(ArrayList<Segment> listSegment){
		ArrayList<Intersection> listSuccessors = new ArrayList();
		return listSuccessors;
	}*/

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

