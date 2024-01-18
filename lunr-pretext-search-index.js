var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-units",
  "level": "1",
  "url": "sec-units.html",
  "type": "Section",
  "number": "1.1",
  "title": "Units and Unit Analysis",
  "body": " Units and Unit Analysis   Scientific progress is measured in units of courage, not intelligence. - Paul Dirac  Almost all numbers we encounter in day-to-day life (news reports, professional data, personal finances...) have units attached. The units of a quantity describe what the quantity measures or counts. Units tell us how to interpret numbers and give us awareness of scale.   "
},
{
  "id": "sec-units-3",
  "level": "2",
  "url": "sec-units.html#sec-units-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "units units "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
