package modele;

public class Segment {
	private Intersection start;
	private Intersection end;
	private float duration;

	Intersection getStart() 
	{
		return start;
	}

	/**
	 * @return the duration
	 */
	public float getDuration() {
		return duration;
	}

	/**
	 * @param duration the duration to set
	 */
	public void setDuration(float duration) {
		this.duration = duration;
	}

	Intersection getEnd()
	{
		return end;
	}
	
}
