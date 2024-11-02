package com.PhD_UAE.PhD.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class PhotoService {


    private final String UPLOAD_DIR = "Photo/";

    public String savePhoto(MultipartFile photoFile) throws IOException {
        // Ensure the directory exists, create it if not
        File directory = new File(UPLOAD_DIR);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        // Get the original filename and create a unique file path
        String originalFilename = photoFile.getOriginalFilename();
        Path filePath = Paths.get(UPLOAD_DIR + originalFilename);

        // Save the file in the defined directory
        Files.copy(photoFile.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        // Return the file name, which you will store in the database
        return originalFilename;
    }

    public byte[] loadPhoto(String fileName) throws IOException {
        // Load the photo file from the server
        Path filePath = Paths.get(UPLOAD_DIR + fileName);
        return Files.readAllBytes(filePath);
    }
}
