// EnergyHeroException.java
// Custom exception class for meaningful error handling
// Wraps audio, leaderboard, and music errors with user-friendly popups
public class EnergyHeroException extends Exception {

    public EnergyHeroException(String message) {
        super(message);
    }

    public EnergyHeroException(String message, Throwable cause) {
        super(message, cause);
    }
}