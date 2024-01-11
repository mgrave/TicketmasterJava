package com.ticketmaster.backend.service;

import com.ticketmaster.backend.dto.TourDTO;
import com.ticketmaster.backend.entities.Tour;
import com.ticketmaster.backend.repositories.TourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TourService {

    @Autowired
    private TourRepository repository;

    @Transactional
    public Page<TourDTO> findAllTours(Pageable pageable) {
        Page<Tour> tours = repository.findAll(pageable);

        return tours.map(TourDTO::new);
    }
}
