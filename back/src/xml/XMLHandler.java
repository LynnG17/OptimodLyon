package xml;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;
import model.*;

public class XMLHandler extends DefaultHandler{
    private String node = null;
    private Segment segment;
    private Intersection inter;
    private Map map;

    public void startDocument() throws SAXException {
        System.out.println("init parsing");
    }

    public void endDocument() throws SAXException {
        System.out.println("end of parsing");
    }      

    public void startElement(String namespaceURI, String lname, String qname, Attributes attrs) throws SAXException {
        System.out.println("---------------------------------------------");
        //cette variable contient le nom du nœud qui a créé l'événement
        System.out.println("qname = " + qname);
        node = qname;

        if(qname.equals("noeud")){
            inter = new Intersection();   
        }
        else if(qname.equals("troncon")){
            segment = new Segment();   
        }
        
        /*
        //Cette dernière contient la liste des attributs du nœud
        if (attrs != null) {
            for (int i = 0; i < attrs.getLength(); i++) {
                //nous récupérons le nom de l'attribut
                String aname = attrs.getLocalName(i);
                //Et nous affichons sa valeur
                System.out.println("Attribut " + aname + " valeur : " + attrs.getValue(i));
            }
        }
        */
}   


    public void endElement(String uri, String localName, String qName) {
        /*
        if(qname.equals("noeud")){
            Map.addPairGraph(inter, new ArrayList<>());
        }
        else if(qname.equals("troncon")){
            ArrayList al = new ArrayList<>();
            al.add(segment);
            Map.addPairGraph(new Intersection(), al);
        }*/
    }
}