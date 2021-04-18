
package me.knapik;

import org.junit.Test;
import static org.junit.Assert.*;
import me.knapik.HelloWorld;

public class HelloWorldTest {
    @Test public void testAppHasAGreeting() {
        HelloWorld classUnderTest = new HelloWorld();
        assertNotNull("app should have a greeting", classUnderTest.getGreeting());
    }
}
