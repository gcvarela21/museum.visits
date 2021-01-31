//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
////////////////// VANILLA JAVASCRIPT! /////////////////////////////////
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
 /////////////////////////////////////////////////////////////////////////////////////////  
 ///// update naming conventions to match our theme of musuem / visit   /////////////////
 ///////////////////////////////////////////////////////////////////////////////////////
    // UPDATE
    const changeVisitBtns = document.querySelectorAll('.change-visit');
  
    // Set up the event listener for the create button
    if (changeVisitBtns) {
      changeVisitBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newVisit = e.target.getAttribute('data-newVisit');
  
          const newVisitState = {
            visited: newVisit,
          };
  
          fetch(`/api/museums/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newVisitState),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed visit to: ${newVisit}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createMuseumBtn = document.getElementById('create-form');
  
    if (createMuseumBtn) {
      createMuseumBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Grabs the value of the textarea that goes by the name, "quote"
        const newMuseum = {
          place: document.getElementById('art').value.trim(),
          visited: document.getElementById('visited').checked,
          visited: document.getElementById('notYet').checked,
        };
  
        // Send POST request to create a new quote
        fetch('/api/museums', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newMuseum),
        }).then(() => {
          // Empty the form
          document.getElementById('art').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Created a new place to visit!');
          location.reload();
        });
      });
    }
  
    // DELETE
    const deleteMuseumBtns = document.querySelectorAll('.delete-museum');
  
    // Set up the event listeners for each delete button
    deleteMuseumBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
  
        // Send the delete request
        fetch(`/api/museums/${id}`, {
          method: 'DELETE',
        }).then((res) => {
          console.log(res);
          console.log(`Deleted Museum: ${id}`);
  
          // Reload the page
          location.reload();
        });
      });
    });
  });

/////////////////////////////////////////////
////////////////////////////////////////////
////// THIS SHIZ IS broken can't add anything
////////////////////////////////////////////
// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//   $(".change-visit").on("click", function(event) {
//     var id = $(this).data("id");
//     var newVisit = $(this).data("newvisit");

//     var newVisitState = {
//       visited: newVisit
//     };

//     // Send the PUT request.
//     $.ajax("/api/museums/" + id, {
//       type: "PUT",
//       data: newVisitState
//     }).then(
//       function() {
//         console.log("changed visit to", newVisit);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newMuseum = {
//       name: $("#art").val().trim(),
//       sleepy: $("[name=visited]:checked").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/museums", {
//       type: "POST",
//       data: newMuseum
//     }).then(
//       function() {
//         console.log("created new place to visit");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".delete-museum").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/museums/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("You've done it now, deleted a pace to visit", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });





