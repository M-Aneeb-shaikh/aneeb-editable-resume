// Bind the submit event to the resume form
$("#resume-form").on("submit", function (event) {
    event.preventDefault();
    // Serialize the form data and type it correctly as an array of name-value pairs
    var formData = $(this).serializeArray();
    // Clear the skills text before updating to prevent duplication
    $("#user-skills").text("");
    // Iterate through form data and populate corresponding elements
    formData.forEach(function (item) {
        if (item.name === "skill") {
            // Concatenate skills as a comma-separated list
            var currentSkills = $("#user-skills").text();
            $("#user-skills").text(currentSkills ? "".concat(currentSkills, ", ").concat(item.value) : item.value);
        }
        else if (item.name === "gender") {
            // Update the user avatar based on gender
            var avatarUrl = item.value === "male"
                ? "https://avatar.iran.liara.run/public/boy"
                : "https://avatar.iran.liara.run/public/girl";
            $("#userAvatar").attr("src", avatarUrl);
        }
        else {
            // Populate elements directly by ID matching form field name
            $("#".concat(item.name)).text(item.value);
        }
    });
    // Display the generated resume section
    $("#content-wrapper").hide();
    $("#generated-resume").show();
});
// Handle the print functionality with type safety
$("#print").click(function () {
    window.print();
    $("#content-wrapper").show();
    $("#generated-resume").hide();
});
