(function ($) {
    $(document).ready(function () {
        $("#addArticleForm").submit(function (e) {
            e.preventDefault()
            let fd = new FormData(this)
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/admin/article",
                data: fd,
                async: false, // enable or disable async (optional, but suggested as false if you need to populate data afterwards)
                processData: false, //add this
                contentType: false, //and this
                success: function (response, textStatus, jqXHR) {
                    let title = $("#ajaxModalLabel")
                    title.addClass('text-success')
                    title[0].textContent = 'موفق'
                    let icon = $("#modalIcon")
                    icon.removeAttr('class')
                    icon.addClass('fas fa-2x fa-thumbs-up text-success')
                    $("#messageModalContent")[0].innerText = response.message
                    e.target.reset()
                    $('#summernote').summernote('code', '');
                    $("#ajaxModal").modal("show")
                    $("#modalOkBtn").click(e => {
                        window.location.reload();
                    })
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    let title = $("#ajaxModalLabel")
                    title.addClass('text-danger')
                    title[0].textContent = 'ناموفق'
                    let icon = $("#modalIcon")
                    icon.removeAttr('class')
                    icon.addClass('fas fa-2x fa-thumbs-down text-danger')
                    $("#messageModalContent")[0].innerText = jqXHR.responseJSON.message
                    $("#ajaxModal").modal("show")
                    $("#modalOkBtn").click(e => {
                        $('#ajaxModal').modal('hide')
                    })
                }
            })
        })
        $("#addCategoryForm").submit(function (e) {
            e.preventDefault()
            const categoryName = $("#categoryName").val()
            $.ajax({
                url: "http://localhost:3000/admin/category",
                data: {name: categoryName},
                method: "POST",
                contentType: "application/x-www-form-urlencoded", //and this
                success: function (response, textStatus, jqXHR) {
                    let title = $("#ajaxModalLabel")
                    title.addClass('text-success')
                    title[0].textContent = 'موفق'
                    let icon = $("#modalIcon")
                    icon.removeAttr('class')
                    icon.addClass('fas fa-2x fa-thumbs-up text-success')
                    $("#category").append(createOptionElement(response.category._id, response.category.name))
                    $("#messageModalContent")[0].innerText = response.message
                    e.target.reset()
                    $("#ajaxModal").modal("show")
                    $("#modalOkBtn").click(e => {
                        $('#ajaxModal').modal('hide')
                    })
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    let title = $("#ajaxModalLabel")
                    title.addClass('text-danger')
                    title[0].textContent = 'ناموفق'
                    let icon = $("#modalIcon")
                    icon.removeAttr('class')
                    icon.addClass('fas fa-2x fa-thumbs-down text-danger')
                    console.log(jqXHR)
                    $("#messageModalContent")[0].innerText = jqXHR.responseJSON.message
                    $("#ajaxModal").modal("show")
                    $("#modalOkBtn").click(e => {
                        $('#ajaxModal').modal('hide')
                    })
                }
            })
        })
        $(".deleteCategoryBtn").click(function (e) {
            $("#deleteModal").modal('show')
            let modalMessage = $("#deleteMessageModalContent")[0]
            let categoryElement = getDeletingCategoryName(this)
            let categoryName = categoryElement.textContent, categoryId = categoryElement.getAttribute('id')
            modalMessage.innerHTML = `آیا از حذف دسته بندی <strong>${categoryName}</strong> مطمئن هستید؟`
            $("#modalOkDeleteBtn").click(function (e) {
                $('#deleteModal').modal('hide')
                $.ajax({
                    url: "http://localhost:3000/admin/category",
                    data: {id: categoryId},
                    method: "DELETE",
                    contentType: "application/x-www-form-urlencoded", //and this
                    success: function (response, textStatus, jqXHR) {
                        let title = $("#ajaxModalLabel")
                        title.addClass('text-success')
                        title[0].textContent = 'موفق'
                        let icon = $("#modalIcon")
                        icon.removeAttr('class')
                        icon.addClass('fas fa-2x fa-thumbs-up text-success')
                        $("#messageModalContent")[0].innerText = response.message
                        $("#ajaxModal").modal("show")
                        $("#modalOkBtn").click(e => {
                            $('#ajaxModal').modal('hide')
                            window.location.reload();
                        })
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        let title = $("#ajaxModalLabel")
                        title.addClass('text-danger')
                        title[0].textContent = 'ناموفق'
                        let icon = $("#modalIcon")
                        icon.removeAttr('class')
                        icon.addClass('fas fa-2x fa-thumbs-down text-danger')
                        $("#messageModalContent")[0].innerText = jqXHR.responseJSON.message
                        $("#ajaxModal").modal("show")
                        $("#modalOkBtn").click(e => {
                            $('#ajaxModal').modal('hide')
                        })
                    }
                })
            })
        })
    })

    function getDeletingCategoryName(deleteIcon) {
        return $(deleteIcon).parents()[1].firstElementChild.firstElementChild
    }

    function createOptionElement(value, textContent) {
        return $(`<option value="${value}">${textContent}</option>`)
    }
})(jQuery)