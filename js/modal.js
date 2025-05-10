    document.addEventListener('DOMContentLoaded', function () {
        var certificateModal = document.getElementById('certificateModal');
        certificateModal.addEventListener('show.bs.modal', function (event) {
            var button = event.relatedTarget;
            var imgSrc = button.getAttribute('data-img');
            var modalImg = document.getElementById('modalCertificateImage');
            modalImg.src = imgSrc;
        });
    });