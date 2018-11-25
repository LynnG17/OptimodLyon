package modele;

import java.util.ArrayList;


public class Map {
	private float height;
	private float width;
	///File xml map
	//File XML livraison
	private ArrayList<Segment> listSegment;
	private ArrayList<Delivery> listDelivery;

	/**
	 * @return the height
	 */
	public float getHeight() {
		return height;
	}

	/**
	 * @return the listDelivery
	 */
	public ArrayList<Delivery> getListDelivery() {
		return listDelivery;
	}

	/**
	 * @param listDelivery the listDelivery to set
	 */
	public void setListDelivery(ArrayList<Delivery> listDelivery) {
		this.listDelivery = listDelivery;
	}

	/**
	 * @return the listSegment
	 */
	public ArrayList<Segment> getListSegment() {
		return listSegment;
	}

	/**
	 * @param listSegment the listSegment to set
	 */
	public void setListSegment(ArrayList<Segment> listSegment) {
		this.listSegment = listSegment;
	}


	/**
	 * @return the width
	 */
	public float getWidth() {
		return width;
	}

	/**
	 * @param width the width to set
	 */
	public void setWidth(float width) {
		this.width = width;
	}

	/**
	 * @param height the height to set
	 */
	public void setHeight(float height) {
		this.height = height;
	}
	
}


