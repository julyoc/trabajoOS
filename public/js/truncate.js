var aler = document.getElementById('aler');
var deleted = function deleted() {
    aler.innerHTML = `
    <div class="alert alert-danger fade show" role="alert">
        Se eliminaran todos los datos. <a href="/truncate"><b>Continuar</b></a>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    `;
};