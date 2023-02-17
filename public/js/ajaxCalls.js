$(document).ready(function () {

    if ($('#user_id').val().length === 24) {
        a($('#user_id').val());
    }

    $('#user_id').on('keyup', function () {
        if ($(this).val().length === 24) {
            a($(this).val());
        } else {
            $('.cards').empty();
            $("#nom").val('');
            $('.cards').append(`
                <div
                    class="text"
                    style="
                        color: #6dc9c9;
                        font-size: 3em;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translateX(-50%) rotate(45deg);
                    ">
                    no item found
                </div>
            `);
        }
    });


    function a(id) {
        $.ajax({
            url: 'users/absence/show',
            type: 'POST',
            data: {
                id: id
            },
            success: function (response) {
                const user = response.user;
                $("#nom").val(user.full_name);

                const absences = response.absences;
                $('.cards').empty();

                absences.forEach(a => {
                    $('.cards').append(`
                    <div class="card">
                        <div class="card-content">
                          <div class="date-time">
                            <div class="date"><strong>date : </strong>${formatDate(a.date)}</div> <br />  <br />
                            <div class="hours"><strong>hours : </strong>${a.hours}</div>
                          </div>
                          <div class="motif">
                          <strong>Motif : </strong>   <p>${a.motif}</p>
                          </div>
                        </div>
                    </div>
                `);
                });

            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    }


    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        return date.toLocaleDateString('en-GB', options);
    }

});