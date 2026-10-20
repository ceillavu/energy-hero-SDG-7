import java.awt.*;
import java.io.File;
import javax.swing.*;

public class BackgroundPanel extends JPanel {

    private Image bg;

    public BackgroundPanel(String fileName) {

        String path = System.getProperty("user.dir")
                + File.separator + "images"
                + File.separator + fileName;

        File f = new File(path);
        if (!f.exists()) {
            f = new File("images", fileName);
        }

        ImageIcon icon = null;
        if (f.exists()) {
            icon = new ImageIcon(f.getAbsolutePath());
        } else {
            java.net.URL res = getClass().getResource("/images/" + fileName);
            if (res == null) {
                res = getClass().getClassLoader().getResource("images/" + fileName);
            }
            if (res != null) {
                icon = new ImageIcon(res);
            } else {
                icon = new ImageIcon(path);
            }
        }

        if (icon == null || icon.getIconWidth() == -1) {
            System.out.println("Background not found: " + path);
            bg = null;
        } else {
            bg = icon.getImage();
        }

        setLayout(null); // IMPORTANT for absolute positioning
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        if (bg != null) {
            g.drawImage(bg, 0, 0, getWidth(), getHeight(), this);
        }
    }
}