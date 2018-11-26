package modele;

public class Segment {
	private Intersection start;
	private Intersection end;
	private float duration;

	/**
	 * Constructor
	 * @param aStart
	 * @param anEnd
	 * @param length
	 */
	public Segment (Intersection aStart, Intersection anEnd, float length){
		start = aStart;
		end = anEnd;
		duration = length;
	}

	public Segment () {
		start = null;
		end = null;
		duration = 0;
	}
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
