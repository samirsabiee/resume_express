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
                    let title = $("#ajaxModalLabel")
                    title.addClass('text-success')
                    title[0].textContent = 'موفق'
                    $("#modalIcon").addClass('fas fa-thumbs-up text-success')
                    $("#messageModalContent")[0].innerText = response.message
                    $("#ajaxModal").modal("show")
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    let title = $("#ajaxModalLabel")
                    title.addClass('text-danger')
                    title[0].textContent = 'ناموفق'
                    $("#modalIcon").addClass('fas fa-thumbs-down text-danger')
                    $("#messageModalContent")[0].innerText = 'ارسال ایمیل با شکست مواجه شد لطفا بعدا تلاش نمایید'
                    $("#ajaxModal").modal("show")
                }
            })
        })
    })
})