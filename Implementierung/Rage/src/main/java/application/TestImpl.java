package application;

public class TestImpl extends  TestBase {
    @Override
    public void test(OtherBase b) {
        System.out.println("should not call this");

    }

    public void test(OtherImpl b) {
        System.out.println("Correct call");
    }
}
