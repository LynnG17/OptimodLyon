package modele;

import java.util.Date;

public class Delivery extends Intersection{
	private Date timeArrival;
	private double duration; 

	/**
	 * @return the timeArrival
	 */
	public Date getTimeArrival() {
		return timeArrival;
	}

	/**
	 * @return the durationDelivery
	 */
	public double getDuration() {
		return duration;
	}

	/**
	 * @param durationDelivery the durationDelivery to set
	 */
	public void setDuration(double duration) {
		this.duration = duration;
	}

	/**
	 * @param timeArrival the timeArrival to set
	 */
	public void setTimeArrival(Date timeArrival) {
		this.timeArrival = timeArrival;
	}

}
