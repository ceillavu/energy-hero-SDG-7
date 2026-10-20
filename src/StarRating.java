// StarRating.java
// Generates star rating text based on score

public class StarRating 
{

    public static String getStars(int score) 
    {

        if(score >= 90)
            return "★★★★★";
        else if(score >= 70)
            return "★★★★";
        else if(score >= 50)
            return "★★★";
        else if(score >= 30)
            return "★★";
        else
            return "★";
    }
}