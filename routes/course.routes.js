module.exports = app => {
    const courses = require("../controllers/course.controller.js");
  
    // Create a new Course
    app.post("/courses", courses.create);
  
    // Retrieve all Courses
    app.get("/courses", courses.findSome);

    // Retrieve some Courses
    //app.get("/courses?", courses.findSome);
  
    // Retrieve a single Course with courseID
    app.get("/courses/:courseID", courses.findOne);
  
    // Update a Course with courseID
    app.put("/courses/:courseID", courses.update);
  
    // Delete a Course with courseID
    app.delete("/courses/:courseID", courses.delete);
  
    // Create a new Course
    app.delete("/courses", courses.deleteAll);
  };