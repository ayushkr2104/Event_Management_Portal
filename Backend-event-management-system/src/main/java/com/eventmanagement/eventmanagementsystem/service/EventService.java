package com.eventmanagement.eventmanagementsystem.service;

import com.eventmanagement.eventmanagementsystem.model.Event;
import com.eventmanagement.eventmanagementsystem.model.User;
import com.eventmanagement.eventmanagementsystem.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public Event createEvent(Event event, User user) {
        event.setUser(user);
        return eventRepository.save(event);
    }

    public List<Event> getEventsByUser(User user) {
        return eventRepository.findByUserId(user.getId());
    }
}