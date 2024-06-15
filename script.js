document.getElementById('calcularButton').addEventListener('click', function() {
    const precios = {
        aqua: 200,
        emocion: 180,
        alegria: 160,
        frescura: 150
    };

    const juanaVentas = {
        aqua: parseInt(document.getElementById('juanaAqua').value) || 0,
        emocion: parseInt(document.getElementById('juanaEmocion').value) || 0,
        alegria: parseInt(document.getElementById('juanaAlegria').value) || 0,
        frescura: parseInt(document.getElementById('juanaFrescura').value) || 0
    };

    const pedroVentas = {
        aqua: parseInt(document.getElementById('pedroAqua').value) || 0,
        emocion: parseInt(document.getElementById('pedroEmocion').value) || 0,
        alegria: parseInt(document.getElementById('pedroAlegria').value) || 0,
        frescura: parseInt(document.getElementById('pedroFrescura').value) || 0
    };

    const juanaTotal = (juanaVentas.aqua * precios.aqua) + (juanaVentas.emocion * precios.emocion) + (juanaVentas.alegria * precios.alegria) + (juanaVentas.frescura * precios.frescura);
    const pedroTotal = (pedroVentas.aqua * precios.aqua) + (pedroVentas.emocion * precios.emocion) + (pedroVentas.alegria * precios.alegria) + (pedroVentas.frescura * precios.frescura);

    let resultado = `
        <p>Juana vendió:</p>
        <ul>
            <li>Aqua: ${juanaVentas.aqua}</li>
            <li>Emoción: ${juanaVentas.emocion}</li>
            <li>Alegría: ${juanaVentas.alegria}</li>
            <li>Frescura: ${juanaVentas.frescura}</li>
        </ul>
        <p>Total de dinero recolectado por Juana: $${juanaTotal} USD</p>
        <p>Pedro vendió:</p>
        <ul>
            <li>Aqua: ${pedroVentas.aqua}</li>
            <li>Emoción: ${pedroVentas.emocion}</li>
            <li>Alegría: ${pedroVentas.alegria}</li>
            <li>Frescura: ${pedroVentas.frescura}</li>
        </ul>
        <p>Total de dinero recolectado por Pedro: $${pedroTotal} USD</p>
    `;

    if (juanaTotal > pedroTotal) {
        resultado += `<p>El empleado del mes es: Juana</p>`;
    } else if (pedroTotal > juanaTotal) {
        resultado += `<p>El empleado del mes es: Pedro</p>`;
    } else {
        resultado += `<p>Es un empate</p>`;
    }

    document.getElementById('result').innerHTML = resultado;
});
