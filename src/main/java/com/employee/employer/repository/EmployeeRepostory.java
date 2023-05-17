package com.employee.employer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.employer.model.Employee;

@Repository
public interface EmployeeRepostory extends JpaRepository<Employee, Long> {

}
