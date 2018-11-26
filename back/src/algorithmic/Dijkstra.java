package algorithmic;
import modele.*;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

public class Dijkstra {
    public static void main(String[] args) {
        Map<Integer, ArrayList<Segment>> completeMap = new HashMap<Integer, ArrayList<Segment>>();
        Intersection i0 = new Intersection(0,5,3);
        Intersection i1 = new Intersection(1,4,2);
        Intersection i2 = new Intersection(2,5,3);
        Intersection i3 = new Intersection(3,5,3);
        Segment s0 = new Segment(i0,i1,2);
        Segment s1 = new Segment(i1,i3,3);
        Segment s2 = new Segment(i0,i3,8);
        Segment s3 = new Segment(i0,i2,4);
        Segment s4 = new Segment(i2,i3,1);
    }
}