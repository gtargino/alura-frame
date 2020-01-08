var fields = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor'),
];

document.querySelector('.form').addEventListener('submit',function(event) {
  event.preventDefault();

  var tr = document.createElement('tr');
  fields.forEach(function(field) {
    var td = document.createElement('td');
    td.textContent = field.value;
    tr.appendChild(td);
  });
  
  var tdVol = document.createElement('td');
  tdVol.textContent = fields[1].value * fields[2].value;
  tr.appendChild(tdVol);

  var tBody = document.createElement('tbody');
  tBody.appendChild(tr);

  var table = document.querySelector('table');
  table.appendChild(tBody);
});