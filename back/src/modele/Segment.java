package modele;

public class Segment {
	private Intersection start;
	private Intersection end;
	private double duration;

	Intersection getStart() 
	{
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

	Intersection getEnd()
	{
		return end;
	}
	
}
