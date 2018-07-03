package hello;

import thomas.controller.JsonController;

public class Greeting {

    private final long id;
    private final String content;

    public Greeting(long id, String content) {
        this.id = id;
        this.content = content;
        try {
            Thread.sleep(5000);            
        } catch (InterruptedException e) {
            throw new RuntimeException();
        }
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
