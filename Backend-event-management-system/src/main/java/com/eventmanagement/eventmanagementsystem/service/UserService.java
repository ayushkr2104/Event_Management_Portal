package com.eventmanagement.eventmanagementsystem.service;

import com.eventmanagement.eventmanagementsystem.config.JwtUtil;
import com.eventmanagement.eventmanagementsystem.dto.LoginRequest;
import com.eventmanagement.eventmanagementsystem.dto.RegisterRequest;
import com.eventmanagement.eventmanagementsystem.model.User;
import com.eventmanagement.eventmanagementsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    public User register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // Store plain text password
        return userRepository.save(user);
    }

    public String login(LoginRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
            String email = authentication.getName();
            try {
                return jwtUtil.generateToken(email);
            } catch (Exception e) {
                throw new RuntimeException("Failed to generate JWT token", e);
            }
        } catch (AuthenticationException e) {
            throw new RuntimeException("Invalid email or password", e);
        }
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with email: " + email));
    }
}