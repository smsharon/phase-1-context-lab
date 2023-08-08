/* Your Code Here */
// an empty array to store employee records
let employeeRecords = [];
// Function to create an employee record
function createEmployeeRecord(employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  // Function to create employee records from an array of arrays
function createEmployeeRecords(arraysOfData) {
    return arraysOfData.map(createEmployeeRecord);
  }
  // Function to create a time-in event
  function createTimeInEvent(dateStamp) {
    const [date, time] = dateStamp.split(" ");
    const hour = parseInt(time, 10);
  
    const timeInEvent = {
      type: "TimeIn",
      hour: hour,
      date: date,
    };
  
    this.timeInEvents.push(timeInEvent);
  
    return this;
  }
  
  // Function to create a time-out event
  function createTimeOutEvent(dateStamp) {
    const [date, time] = dateStamp.split(" ");
    const hour = parseInt(time, 10);
  
    const timeOutEvent = {
      type: "TimeOut",
      hour: hour,
      date: date,
    };
  
    this.timeOutEvents.push(timeOutEvent);
  
    return this;
  }
  
  // Function to calculate hours worked on a specific date
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  
    if (timeInEvent && timeOutEvent) {
      const timeInHour = parseInt(timeInEvent.hour, 10);
      const timeOutHour = parseInt(timeOutEvent.hour, 10);
  
      return (timeOutHour - timeInHour) / 100; 
    }
  
    return 0; 
  }
  
  // Function to calculate wages earned on a specific date
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const payRate = this.payPerHour;
  
    return hoursWorked * payRate;
  }
  
// Function to find an employee record by first name
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }

// Function to calculate payroll for all employees
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce(function (totalPay, employee) {
      return totalPay + allWagesFor.call(employee);
  }, 0);
}
  // Create employee records
employeeRecords = createEmployeeRecords(employeeData);

// Punch in and out for employees
createTimeInEvent(employeeRecords[0], "2023-08-06 0900");
createTimeOutEvent(employeeRecords[0], "2023-08-06 1700");
createTimeInEvent(employeeRecords[1], "2023-08-06 1000");
createTimeOutEvent(employeeRecords[1], "2023-08-06 1600");

// Calculate total wages for all employees
const totalPayroll = calculatePayroll(employeeRecords);

console.log("Total Payroll:", totalPayroll);
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function allWagesFor() {
  const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date;
  });

  const payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
  }.bind(this), 0);

  return payable;
}

