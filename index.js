$(document).ready(function () {
      $("#submit-form").submit(function (e) {
        e.preventDefault();
        // Get the form data
        var formData = {
          name: $("#name").val(),
          email: $("#email").val(),
          subject: $("#subject").val(),
          message: $("#message").val(),
        };
        const regex = /^[A-Za-z]+$/;
        // Validate name
        if (formData.name == "") {
          alert("Please enter a name");
          return;
        }
    
        if(!regex.test(formData.name)){
          alert("Name contains non alphebetic characters");
          return
        }
        
        // Validate name length
        if (formData.name.length < 3) {
          alert("Name should be at least 3 characters long.");
          return;
        }
        $(document).ready(function () {
            $("#submit-form").submit(function (e) {
              e.preventDefault();
              // Get the form data
              var formData = {
                name: $("#name").val(),
                email: $("#email").val(),
                subject: $("#subject").val(),
                message: $("#message").val(),
              };
              const regex = /^[A-Za-z]+$/;
              // Validate name
              if (formData.name == "") {
                alert("Please enter a name");
                return;
              }
          
              if(!regex.test(formData.name)){
                alert("Name contains non alphebetic characters");
                return
              }
              
              // Validate name length
              if (formData.name.length < 3) {
                alert("Name should be at least 3 characters long.");
                return;
              }
          
              // Simple email format validation
              var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailPattern.test(formData.email)) {
                alert("Please enter a valid email address.");
                return;
              }
          
              // Validate subject
              if (formData.subject == "") {
                alert("Please enter a subject");
                return;
              }
          
              // Validate message
              if (formData.message == "") {
                alert("Please enter a message");
                return;
              }
          
              // Submit the form
              console.log(formData);
              submit(formData);
              $("#submit-form")[0].reset();
            });
          });
          
          function submit(data) {
            $.ajax({
              url: "https://script.google.com/macros/s/AKfycbxugz2lfZbVg4m5mRiEVJSzeD8-ccmokfhdAC0PNQ6fAXh_PQnhMabK41KzABZRO5dA/exec",
              data: data,
              method: "post",
              success: function (response) {
                alert("Form submitted successfully");
                window.location.reload();
              },
              error: function (err) {
                alert("Something Error");
              },
            });
          }
        // Simple email format validation
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
          alert("Please enter a valid email address.");
          return;
        }
    
        // Validate subject
        if (formData.subject == "") {
          alert("Please enter a subject");
          return;
        }
    
        // Validate message
        if (formData.message == "") {
          alert("Please enter a message");
          return;
        }
    
        // Submit the form
        console.log(formData);
        submit(formData);
        $("#submit-form")[0].reset();
      });
    });
    
    function submit(data) {
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxv6p37_i3kjp6Kqka53T6iURzM7YTI5mkEkNu-aovVTO5jjjsWGtxlrpI_vx6kERrQ/exec",
        data: data,
        method: "post",
        success: function (response) {
          alert("Form submitted successfully");
          window.location.reload();
        },
        error: function (err) {
          alert("Something Error");
        },
      });
    }