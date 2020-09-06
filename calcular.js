function Simular() {
    var vol = window.document.getElementById('vol')
    var pos = window.document.getElementById('pos')
    var plv = window.document.getElementById('plv')
    var res = window.document.getElementById('res')
    var volume = Number(vol.value)/100
    var positivacao = Number(pos.value)/100
    var plv = Number(plv.value)/100
    var simulador = ((0.7 * volume) + (0.2 * plv) + (0.1 * positivacao))
    res.innerText = `${Math.round(simulador*100)}%`
}