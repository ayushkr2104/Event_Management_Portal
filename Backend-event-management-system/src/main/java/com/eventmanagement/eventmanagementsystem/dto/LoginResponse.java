package com.eventmanagement.eventmanagementsystem.dto;

public class LoginResponse {
    private String token;
    private String error;

    // Success response
    public LoginResponse(String token) {
        this.token = token;
        this.error = null;
    }

    // Error response
    public LoginResponse(String error, boolean isError) {
        this.token = null;
        this.error = error;
    }

    public String getToken() {
        return token;
    }

    public String getError() {
        return error;
    }
}