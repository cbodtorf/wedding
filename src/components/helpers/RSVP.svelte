<script>
  import Form from '@svelte-parts/form'
  import { onMount } from 'svelte';
  const fields = [
    { type: 'email', property: 'email', label: 'Email' },
    { type: 'text', property: 'name', label: 'Your name', minLength: 5 },
    { type: 'radio', property: 'meal', label: 'Your meal selection', options: [
      { value: 'steak', label: 'Steak' },
      { value: 'chicken', label: 'Chicken' },
      { value: 'vegetable', label: 'Vegetable' },
    ] },
    { type: 'text', property: 'guestName', label: 'Guest name', minLength: 5, notRequired: true },
    { type: 'radio', property: 'guestMeal', label: 'Guest meal selection', notRequired: true, options: [
      { value: 'steak', label: 'Steak' },
      { value: 'chicken', label: 'Chicken' },
      { value: 'vegetable', label: 'Vegetable' },
    ] },
    { type: 'checkbox', property: 'rsvp', label: 'RSVP', value: true },
  ]
  const onSubmit = data => alert(JSON.stringify(data))

  // Inspo: https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
  onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('scroll-animation');
            return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          entry.target.classList.remove('scroll-animation');
        });
      });

      observer.observe(haveAndToHold);
    }

    // RSVP
    // $('#rsvp-form').on('submit', function (e) {
    //   e.preventDefault();
    //     var data = $(this).serialize();

    //     $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

    //     if (MD5($('#invite_code').val()) !== 'b0e53b10c1f55ede516b240036b88f40'
    //         && MD5($('#invite_code').val()) !== '2ac7f43695eb0479d5846bb38eec59cc') {
    //         $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
    //     } else {
    //         $.post('https://script.google.com/macros/s/AKfycbxupWegli44D0afjLlZdfchv3ikEpYe_EWnG2EJFSi3Uf5V-iaiP5_piI2rLGO1d3N6Qw/exec', data)
    //             .done(function (data) {
    //                 console.log(data);
    //                 if (data.result === "error") {
    //                     $('#alert-wrapper').html(alert_markup('danger', data.message));
    //                 } else {
    //                     $('#alert-wrapper').html('');
    //                     $('#rsvp-modal').modal('show');
    //                 }
    //             })
    //             .fail(function (data) {
    //                 console.log(data);
    //                 $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
    //             });
    //     }
    // });
  });
</script>

<Form fields={fields} onSubmit={onSubmit}></Form>
<!-- <form on:submit|preventDefault={validate}>
    <div class="row">
        <div class="col-md-6 col-sm-6">
            <div class="form-input-group">
                <i class="fa fa-envelope"></i>
                <input type="email" name="email" class="" placeholder="Your email" required>
            </div>
        </div>
        <div class="col-md-6 col-sm-6">
            <div class="form-input-group">
                <i class="fa fa-user"></i>
                <input name="name" class="" placeholder="Your name" required>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-sm-6">
            <div class="form-input-group">
                <i class="fa fa-users"></i>
                <input type="number" name="extras" class="" min="0" max="4" placeholder="Husband/Wife or kids" required>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12" id="alert-wrapper"></div>
    </div>
    <button class="btn-fill rsvp-btn">
        Yes, that's me!
    </button>
</form> -->