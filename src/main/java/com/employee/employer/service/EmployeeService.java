package com.employee.employer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.employer.model.Employee;
import com.employee.employer.repository.EmployeeRepostory;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepostory employeeRepostory;

    // Find employee by id
    public Employee findById(Long id) {
        Optional<Employee> employee = employeeRepostory.findById(id);

        return employee.orElseThrow();
    }

    // get All the employee

    public List<Employee> getAllEmployee() {
        List<Employee> employee = employeeRepostory.findAll();

        return employee;
    }

    public Employee create(Employee employee) {

        return employeeRepostory.save(employee);
    }

    public Employee update(long id, Employee employee) {
        Employee employee2 = findById(id);

        employee2.setName(employee.getName());

        employee2.setLastName(employee.getLastName());

        employee2.setEmail(employee.getEmail());

        return employeeRepostory.save(employee2);
    }

    public void delete(long id) {
        employeeRepostory.deleteById(id);
    }
}
