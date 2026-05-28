public class Food {

    private int id;
    private String name;
    private double price;

    public Food(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public void displayFood() {
        System.out.println(name + " : " + price);
    }
}
