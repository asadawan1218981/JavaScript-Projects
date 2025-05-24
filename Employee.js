const employees = [
  { employeeName: "Asad rasheed", baseSalary: 90000, hoursWorked: 45, eligibleForBonus: true },
  { employeeName: "sara ali", baseSalary: 60000, hoursWorked: 38, eligibleForBonus: false },
  { employeeName: "Siddiq shah", baseSalary: 120000, hoursWorked: 50, eligibleForBonus: true }
];

function processPayroll(employees) {
  let totalPayroll = 0;

  const processed = employees.map(employee => {
    // 1. Format employee name (capitalize first letters)
    const formattedName = employee.employeeName
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // 2. Calculate overtime pay
    let overtimeHours = Math.max(0, employee.hoursWorked - 40);
    let hourlyRate = employee.baseSalary / 2080; // Assuming 2080 working hours per year
    let overtimePay = overtimeHours * hourlyRate * 1.5;

    // 3. Apply bonus using switch
    let bonus = 0;
    switch (employee.eligibleForBonus) {
      case true:
        bonus = employee.baseSalary * 0.10;
        break;
      case false:
        bonus = 0;
        break;
    }

    // 4. Total before tax
    let totalBeforeTax = employee.baseSalary + overtimePay + bonus;

    // 5. Apply tax if salary > 100,000
    let tax = 0;
    if (totalBeforeTax > 100000) {
      tax = totalBeforeTax * 0.30;
    }

    let finalSalary = totalBeforeTax - tax;

    // 6. Add to total payroll
    totalPayroll += finalSalary;

    // 7. Return formatted employee result
    return {
      name: formattedName,
      finalSalary: finalSalary.toFixed(2)
    };
  });

  // Display results
  console.log("Employee Payroll:");
  processed.forEach(emp => {
    console.log(`${emp.name}: $${emp.finalSalary}`);
  });

  console.log(`Total Payroll: $${totalPayroll.toFixed(2)}`);
}

processPayroll(employees);
