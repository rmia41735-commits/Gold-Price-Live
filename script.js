const weight = document.getElementById('weight');
const rate = document.getElementById('rate');
const total = document.getElementById('total');
const frame = document.getElementById('gold-frame');
function updateTotal(){
  const w = Math.max(0, Number(weight.value) || 0);
  const r = Math.max(0, Number(rate.value) || 0);
  total.innerHTML = (w*r).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}) + ' <small>SAR</small>';
}
weight.addEventListener('input', updateTotal);
rate.addEventListener('input', updateTotal);
document.getElementById('reload').addEventListener('click', () => {
  frame.src = 'https://www.livepriceofgold.com/saudi-arabia-gold-price.html?refresh=' + Date.now();
});
updateTotal();