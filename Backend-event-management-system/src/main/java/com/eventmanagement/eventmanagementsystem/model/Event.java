package com.eventmanagement.eventmanagementsystem.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "events")
@Data
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String description;

    @Column(nullable = false)
    private String date;

    @Column(nullable = false)
    private String location;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}