package modele;

import java.util.ArrayList;


public class Path {
	private double duration;
	private ArrayList<Segment> listSegment;
	
	Delivery getStartDelivery()
	{
		Delivery start = (listSegment.get(0)).getStart();
		return start;
	}

	/**
	 * @return the duration
	 */
	public double getDuration() {
		return duration;
	}

	/**
	 * @param duration the duration to set
	 */
	public void setDuration(double duration) {
		this.duration = duration;
	}

	Delivery getEndDelivery()
	{
		Delivery end = (listSegment.get(listSegment.size()-1)).getStart();
		return end;
	}
}
