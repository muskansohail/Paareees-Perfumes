$(document).ready(function () {
  $(".increment").click(function () {
    let input = $(this).siblings(".quantity-input");
    let currentValue = parseInt(input.val());
    input.val(currentValue + 1);
  });

  $(".decrement").click(function () {
    let input = $(this).siblings(".quantity-input");
    let currentValue = parseInt(input.val());
    if (currentValue > parseInt(input.attr("min"))) {
      input.val(currentValue - 1);
    }
  });
});

// cart button

document.addEventListener("DOMContentLoaded", function () {
  let selectedCount = 0;

  // Select all the buttons with class 'add-cart-btn'
  const addCartButtons = document.querySelectorAll(".add-cart-btn");

  addCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Toggle selection state
      const isSelected = button.classList.toggle("selected");

      // Update the selected count
      if (isSelected) {
        selectedCount++;
      } else {
        selectedCount--;
      }

      // Update the cart button's count display
      document.getElementById("selected-count").textContent = selectedCount;
    });
  });
});

//form
// Function to validate name (letters only)
function validateName(name) {
  const namePattern = /^[A-Za-z\s]+$/;
  return namePattern.test(name);
}

// Handle form submission
document
  .getElementById("buyNowForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const addressField = document.getElementById("address");

    // Validate Name (letters only)
    if (!validateName(nameField.value)) {
      nameField.classList.add("is-invalid");
      return;
    } else {
      nameField.classList.remove("is-invalid");
    }

    // Email is automatically validated by HTML5 input[type="email"]

    // Validate Address (normal text)
    if (addressField.value.trim() === "") {
      addressField.classList.add("is-invalid");
      return;
    } else {
      addressField.classList.remove("is-invalid");
    }

    // Show thank you message inside modal
    document.getElementById("thankYouMessage").style.display = "block";

    // Hide form
    document.getElementById("buyNowForm").style.display = "none";

    // Optionally close modal after a few seconds (optional)
    setTimeout(() => {
      var modal = bootstrap.Modal.getInstance(
        document.getElementById("buyNowModal")
      );
      modal.hide();

      // Reset form and hide thank you message for future submissions
      document.getElementById("buyNowForm").reset();
      document.getElementById("thankYouMessage").style.display = "none";
      document.getElementById("buyNowForm").style.display = "block";
    }, 3000); // 3 seconds delay
  });
