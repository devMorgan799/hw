import java.util.Scanner;
3. Write a Java program that takes two numbers as input and display the product of two numbers.
        https://data-flair.training/blogs/read-java-console-input/ (Links to an external site.)
        Angel prefers to use the scanner class in Java.

        Example:
        Input first number: 25
        Input second number: 5
        Expected Output: 25 x 5 = 125
        4. Write a Java program that reads a number in inches, converts it to meters.
        Note: One inch is 0.0254 meter. Example: Input a value for inch: 1000 Expected Output: 1000.0 inch is 25.4 meters

        Submission:

        Submit a github link of a single repository. The repository should have
        a screenshot of the completed lessons in code academy named codeAcademy
        A file named multiplyoutput.java that completes task number 3.
        A file named "unit conversion" that completes task 4.
        Every COMPLETED task counts as 25% (You basically get 25% for free because of task 2, since there's really no quantifiable/qualifiable way of measuring this).




public class Product {
    public static void main(String[] args) {
        Scanner in= new Scanner(System.in);
        System.out.println("Please enter a number");
        int x= in.nextInt();
        System.out.println("Please enter a second number");
        int y= in.nextInt();
        System.out.println("The first number was "+ x +"the second number was"+ y);
        System.out.println("The sum is" + (x+y));
    }
}
