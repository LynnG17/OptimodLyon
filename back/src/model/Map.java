package model;

import java.util.ArrayList;
import java.util.HashMap;
import java.lang.Object.*;

public class Map {
	private double height;
	private double width;
	private int nbIntersections;
	private int nbPerson;
	private HashMap<Intersection, ArrayList<Segment>> graph;

	/*	
	public HashMap<Intersection, List<Segment>> getGraph() {
		return graph;
	}
	*/

	public Pair<Intersection, Segment> addPairGraph(Intersection inter , ArrayList<Segment> segments) {
		Pair<Intersection, Segment> pair = new Pair<>(inter, segments);
		graph.add(inter, segments); //use pair instead

		return pair;
	}
}


