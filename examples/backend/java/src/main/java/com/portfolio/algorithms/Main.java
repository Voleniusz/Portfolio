package com.portfolio.algorithms;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {
        System.out.println("=== Portfolio Algorithm Demo ===");
        
        // Example 1: Stream API usage
        List<String> skills = Arrays.asList("Java", "Python", "React", "Docker", "n8n");
        System.out.println("Processing skills with Stream API:");
        String result = skills.stream()
            .filter(s -> s.length() > 3)
            .map(String::toUpperCase)
            .collect(Collectors.joining(" | "));
        
        System.out.println("Filtered & Formatted: " + result);

        // Example 2: Simple Factorial Recursion
        int number = 5;
        System.out.println("\nCalculating factorial of " + number + ":");
        System.out.println("Result: " + factorial(number));
    }

    private static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
}
