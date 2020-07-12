var aler = document.getElementById('aler');
var update = function update() {
    aler.innerHTML = `
    <div class="alert alert-warning fade show" role="alert">
        Los datos se actualizaran. <input type="submit" value="Continuar" class="btn btn-link contbtn">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    `;
};