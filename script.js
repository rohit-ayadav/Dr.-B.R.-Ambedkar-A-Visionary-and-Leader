function search () {
  var query = document.getElementById('searchInput').value.toLowerCase()

  var results = searchContent(query)

  displayResults(results)
}

function searchContent (query) {
  var names = [
    'Dr. B.R. Ambedkar',
    'Mahatma Gandhi',
    'Jawaharlal Nehru',
    'Sardar Vallabhbhai Patel'
  ]
  var matchingResults = []

  for (var i = 0; i < names.length; i++) {
    if (names[i].toLowerCase().indexOf(query) !== -1) {
      matchingResults.push(names[i])
    }
  }

  return matchingResults
}

function displayResults (results) {
  var output = ''

  if (results.length > 0) {
    output += '<ul>'
    for (var i = 0; i < results.length; i++) {
      output += '<li>' + results[i] + '</li>'
    }
    output += '</ul>'
  } else {
    output = 'No results found.'
  }

  document.getElementById('searchResults').innerHTML = output
}

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    document.getElementById('scrollToTopBtn').style.display = 'block'
  } else {
    document.getElementById('scrollToTopBtn').style.display = 'none'
  }
})
document
  .getElementById('scrollToTopBtn')
  .addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

function closeNotice () {
  document.getElementById('notice').style.display = 'none'
}
