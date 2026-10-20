// ScoreStorage.java
// Features: Badge Records, Stars, Leaderboard, Data Persistence

public interface ScoreStorage {

    void saveScore(String playerName, int score, String difficulty);

    void loadScores();
}