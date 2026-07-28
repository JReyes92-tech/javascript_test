let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
        accessLevel = "Full access granted";
        } else if (userRole === "manager") {
            accessLevel = "Limited access granted";
            } else {
                accessLevel = "No access granted";
                }
console.log("Access Level:", accessLevel);
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
    break;
    case "manager":
        userCategory = "Manager";
    break;
    case "subscriber":
        userCategory = "Subscriber";
    break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status:", authenticationStatus);

let TypeofPerson = "Employee";
let Services;

switch(TypeofPerson){
    case "Employee":
        Services = "Dietary Services";
    break;
    case "Enrolled Member":
        Services = "Dietary Services and one-on-one interaction with a dietician";
    break;
    case "Subscriber":
        Services = "Partial Access to Dietary Services"
    break;
    default :
        Services = "Need to enroll or at leats suscribe first to avail this facility";
}
console.log("User has access to:", Services);

