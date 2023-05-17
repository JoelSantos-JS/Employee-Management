package com.employee.employer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.employer.repository.EmployeeRepostory;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepostory employeeRepostory;
}
