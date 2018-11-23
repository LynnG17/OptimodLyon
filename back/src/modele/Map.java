package modele;

import java.util.ArrayList;


public class Map {
	private double height;
	private double width;
	private int nbIntersections;
	private int nbPerson;
	///File xml map
	//File XML livraison
	private ArrayList<Intersection> listIntersection;

	/**
	 * @return the height
	 */
	public double getHeight() {
		return height;
	}

	/**
	 * @return the listIntersection
	 */
	public ArrayList<Intersection> getListIntersection() {
		return listIntersection;
	}

	/**
	 * @param listIntersection the listIntersection to set
	 */
	public void setListIntersection(ArrayList<Intersection> listIntersection) {
		this.listIntersection = listIntersection;
	}

	/**
	 * @return the nbPerson
	 */
	public int getNbPerson() {
		return nbPerson;
	}

	/**
	 * @param nbPerson the nbPerson to set
	 */
	public void setNbPerson(int nbPerson) {
		this.nbPerson = nbPerson;
	}

	/**
	 * @return the nbIntersections
	 */
	public int getNbIntersections() {
		return nbIntersections;
	}

	/**
	 * @param nbIntersections the nbIntersections to set
	 */
	public void setNbIntersections(int nbIntersections) {
		this.nbIntersections = nbIntersections;
	}

	/**
	 * @return the width
	 */
	public double getWidth() {
		return width;
	}

	/**
	 * @param width the width to set
	 */
	public void setWidth(double width) {
		this.width = width;
	}

	/**
	 * @param height the height to set
	 */
	public void setHeight(double height) {
		this.height = height;
	}
	
}


