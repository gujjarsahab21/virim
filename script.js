(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            document.getElementById('successAlert').style.display = 'inline';
            setTimeout(function() {
              document.getElementById('successAlert').style.display = 'none';
            }, 3000);
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  