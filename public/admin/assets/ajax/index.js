(function ($) {
    jQuery(document).ready(function () {
        $("#addArticleForm").submit(function (e) {
            e.preventDefault()
            let fd = new FormData(this)
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/admin/saveArticle",
                data: fd,
                async: false, // enable or disable async (optional, but suggested as false if you need to populate data afterwards)
                processData: false, //add this
                contentType: false, //and this
                success: function (response, textStatus, jqXHR) {
                    let title = $("#ajaxModalLabel")
                    title.addClass('text-success')
                    title[0].textContent = 'موفق'
                    $("#modalIcon").addClass('fas fa-2x fa-thumbs-up text-success')
                    $("#messageModalContent")[0].innerText = response.message
                    e.target.reset()
                    $('#summernote').summernote('code', '');
                    $("#ajaxModal").modal("show")
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    let title = $("#ajaxModalLabel")
                    title.addClass('text-danger')
                    title[0].textContent = 'ناموفق'
                    $("#modalIcon").addClass('fas fa-2x fa-thumbs-down text-danger')
                    $("#messageModalContent")[0].innerText = jqXHR.responseJSON.message
                    $("#ajaxModal").modal("show")
                }
            })
        })
    })
})(jQuery)