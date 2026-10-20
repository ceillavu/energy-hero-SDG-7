// SoundManager.java
// Audio controller: background music loops and sound effects
import java.io.File;
import javax.sound.sampled.*;
import javax.swing.JOptionPane;
import javax.swing.Timer;

public class SoundManager {

    private static Clip clip;
    private static AudioInputStream audioStream;
    private static boolean muted = false;

    private static Clip correctClip;
    private static Clip wrongClip;
    private static Clip endClip;

    private static Clip loadClip(String path) {
        try {
            File file = new File(path);
            if (!file.exists()) {
                file = new File(System.getProperty("user.dir"), path);
            }
            if (file.exists()) {
                AudioInputStream stream = AudioSystem.getAudioInputStream(file);
                Clip c = AudioSystem.getClip();
                c.open(stream);
                return c;
            }
        } catch (Exception e) {
            System.err.println("Could not load clip: " + path + " - " + e.getMessage());
        }
        return null;
    }

// ================= PLAY =================
    public static synchronized void play(String path, boolean loop) {

        try {
            stop();

            File file = new File(path);
            if (!file.exists()) {
                file = new File(System.getProperty("user.dir"), path);
            }

            if (!file.exists()) {
                throw new EnergyHeroException("Cannot find sound file: " + path);
            }

            audioStream = AudioSystem.getAudioInputStream(file);
            clip = AudioSystem.getClip();
            clip.open(audioStream);
            clip.setFramePosition(0);

            // Setup loop parameters regardless of mute state so the track structure exists
            if (loop) {
                clip.loop(Clip.LOOP_CONTINUOUSLY);
            }

            // Only call start if the user hasn't explicitly muted the game session globally
            if (!muted) {
                clip.start();
                System.out.println("Playing: " + path);
            } else {
                System.out.println("Sound loaded but held in Mute state: " + path);
            }

            // Debug checker tracker
            Timer debugTimer = new Timer(200, e -> {
                if (clip != null) {
                    System.out.println("Running: " + clip.isRunning());
                }
            });
            debugTimer.setRepeats(false);
            debugTimer.start();

        } catch (Exception e) {
            try {
                throw new EnergyHeroException("Failed to play audio: " + path, e);
            } catch (EnergyHeroException ex) {
                JOptionPane.showMessageDialog(
                    null,
                    ex.getMessage(),
                    "Audio Error",
                    JOptionPane.WARNING_MESSAGE
                );
            }
        }
    }

    // ================= STOP =================
    public static synchronized void stop() {

        try {

            if (clip != null) {

                clip.stop();
                clip.flush();
                clip.close();
                clip = null;
            }

            if (audioStream != null) {

                audioStream.close();
                audioStream = null;
            }

        } catch (Exception e) {
            try {
                throw new EnergyHeroException("Failed to stop audio playback.", e);
            } catch (EnergyHeroException ex) {
                System.err.println(ex.getMessage());
            }
        }
    }

    // ================= PLAY EFFECT (no background stop) =================
    public static synchronized void playEffect(String path) {

        if (muted) return;

        try {
            Clip sfx = null;
            if (path.contains("correct")) {
                if (correctClip == null) correctClip = loadClip("music/correct.wav");
                sfx = correctClip;
            } else if (path.contains("wrong")) {
                if (wrongClip == null) wrongClip = loadClip("music/wrong.wav");
                sfx = wrongClip;
            } else if (path.contains("endQuiz")) {
                if (endClip == null) endClip = loadClip("music/endQuiz.wav");
                sfx = endClip;
            }

            if (sfx != null) {
                sfx.setFramePosition(0);
                sfx.start();
            } else {
                File f = new File(path);
                if (!f.exists()) f = new File(System.getProperty("user.dir"), path);
                if (f.exists()) {
                    AudioInputStream s = AudioSystem.getAudioInputStream(f);
                    Clip c = AudioSystem.getClip();
                    c.open(s);
                    c.start();
                }
            }

        } catch (Exception e) {
            System.out.println("Effect error: " + e.getMessage());
        }
    }

    // ================= TOGGLE MUTE =================
    public static void toggleMute() {

        muted = !muted;

        if (clip != null) {

            if (muted) {
                clip.stop();
            } else {
                clip.setFramePosition(0);
                clip.start();
            }
        }
    }

    // ================= CHECK =================
    public static boolean isMuted() {
        return muted;
    }
}