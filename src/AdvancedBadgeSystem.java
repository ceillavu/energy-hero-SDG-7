// AdvancedBadgeSystem.java
// Features: Badge Records, Stars, Leaderboard, Data Persistence

public class AdvancedBadgeSystem implements GamificationInterface 
{

    @Override
    public String getReward(int score) 
    {

        if(score >= 90)
            return "Ultimate Champion Badge";
        else if(score >= 70)
            return "Elite Learner Badge";
        else
            return "Participant Badge";
    }
}