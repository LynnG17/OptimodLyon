package modele;

public class Delivery extends Intersection{
	private double timeArrival;
	private double durationDelivery; 

	/**
	 * @return the timeArrival
	 */
	public double getTimeArrival() {
		return timeArrival;
	}

	/**
	 * @return the durationDelivery
	 */
	public double getDurationDelivery() {
		return durationDelivery;
	}

	/**
	 * @param durationDelivery the durationDelivery to set
	 */
	public void setDurationDelivery(double durationDelivery) {
		this.durationDelivery = durationDelivery;
	}

	/**
	 * @param timeArrival the timeArrival to set
	 */
	public void setTimeArrival(double timeArrival) {
		this.timeArrival = timeArrival;
	}
}
