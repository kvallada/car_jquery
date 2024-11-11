$(document).ready(function() {
    // Car Showcase Section Interactivity

    // Highlight card on hover
    $('.car-card').hover(function() {
        $(this).css('background-color', '#e0f7fa');
    }, function() {
        $(this).css('background-color', '#fff');
    });

    // Show price on click
    $('.car-card').click(function() {
        const price = $(this).data('price');
        $(this).find('.price-info').remove(); // Remove any existing price info
        $(this).append(`<p class="price-info">Price: ${price}</p>`);
    });

    // Car Customizer Section Interactivity

    // Generate car description
    $('#generateDescription').click(function() {
        const model = $('#carModel').val();
        const specs = $('#carSpecs').val();
        
        if (model && specs) {
            $('#descriptionOutput').html(`<p><strong>${model}</strong>: ${specs}</p>`);
        } else {
            $('#descriptionOutput').html('<p>Please fill out both fields to generate a description.</p>');
        }
    });
});
