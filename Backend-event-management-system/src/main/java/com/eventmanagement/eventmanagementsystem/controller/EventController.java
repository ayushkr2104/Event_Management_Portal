package com.eventmanagement.eventmanagementsystem.controller;

import com.eventmanagement.eventmanagementsystem.model.Event;
import com.eventmanagement.eventmanagementsystem.model.User;
import com.eventmanagement.eventmanagementsystem.service.EventService;
import com.eventmanagement.eventmanagementsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @Autowired
    private UserService userService;

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userService.getUserByEmail(email);
        return eventService.createEvent(event, user);
    }

    @GetMapping
    public List<Event> getEvents() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userService.getUserByEmail(email);
        return eventService.getEventsByUser(user);
    }
}