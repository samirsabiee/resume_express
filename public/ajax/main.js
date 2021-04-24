$(function ($) {
    jQuery(document).ready(function () {
        $("#contact-form").submit(function (e) {
            e.preventDefault()
            let dataObject = {}
            $("#contact-form").serializeArray().forEach(d => {
                dataObject[d.name] = d.value
            })
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/sendMail",
                data: dataObject,
                async: false, // enable or disable async (optional, but suggested as false if you need to populate data afterwards)
                success: function (response, textStatus, jqXHR) {
                    alert('Success ' + response.message)
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('ERR ' + errorThrown)
                }
            })
        })
    })
})