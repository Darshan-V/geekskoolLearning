const MOUNTAINS = [
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
  { name: 'Everest', height: 8848, place: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, place: 'Japan' },
  { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
  { name: 'Denali', height: 6168, place: 'United States' },
  { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
  { name: 'Mont Blanc', height: 4808, place: 'Italy/France' }
]
function buildTable (data) {
  const table = document.createElement('table')

  const fields = Object.keys(data[0])
  console.log(fields)
  const headRow = document.createElement('tr')
  fields.forEach(function (field) {
    const headCell = document.createElement('th')
    headCell.appendChild(document.createTextNode(field))
    headRow.appendChild(headCell)
  })
  table.appendChild(headRow)

  data.forEach(function (object) {
    const row = document.createElement('tr')
    fields.forEach(function (field) {
      const cell = document.createElement('td')
      cell.appendChild(document.createTextNode(object[field]))
      if (typeof object[field] === 'number') {
        cell.style.textAlign = 'right'
      }
      row.appendChild(cell)
    })
    table.appendChild(row)
  })

  return table
}

document.querySelector('#mountains')
  .appendChild(buildTable(MOUNTAINS))
