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
  "body": " Units and Unit Analysis   Scientific progress is measured in units of courage, not intelligence. - Paul Dirac  Almost all numbers we encounter in day-to-day life (news reports, professional data, personal finances...) have units attached. The units of a quantity describe what the quantity measures or counts. Units tell us how to interpret numbers and give us awareness of scale.   discusses the formation of the Hawaiian Islands and the relation between their age and position with respect to their volcanic hot spot. We include all units in the description.   There are eight major volcanic Islands in Hawaiʻi: Niʻihau, Kauaʻi, Oʻahu, Molokaʻi , Lānaʻi, Maui, Kahoʻolawe and Hawaiʻi Island https:\/\/www.hvcb.org\/school-report\/eight-major-islands\/ . See   In addition, there are several atolls, and numerous smaller islets. It forms what we call an archipelago. Hawaiʻi became U.S. state on August 21, 1959 https:\/\/www.archives.gov\/legislative\/features\/hawaii , and is the only one not geographically connected to North America.    Map of the Hawaiian or Sandwich Islands, published in 1854 in Edward T. Perkins' Na Motu; or, Reef-Rovings in the South Seas.  Map of the Hawaiian ialnds in grey and white.   The formation of the Hawaiian Islands is occurring via Hot-Spot Volcanism. The fixed hot spot at the source of the Hawaiian Islands is located in the middle of the Pacific Plate, and the chain was formed as the plate drifted toward the northwest. Loihi, the youngest seamount of the chain is currently erupting from its summit at a depth of 1000 meters. In the following chart we have the age of some Hawaiian volcanoes along with their distance from Kilauea: https:\/\/pubs.usgs.gov\/pp\/1987\/1350\/pdf\/chapters\/pp1350_ch1.pdf      Volcano  Age in million years  Distance in km    Kilauea  0. 2  0    Mauna Kea  0.375  54    Kohala  0.43  100    Haleakala  0.75  182    Kahoolawe  1.03  185    West Maui  1.32  221    Lānaʻi  1.28  226    East Molokaʻi  1.76  256    West Molokaʻi  1.9  280    Koolau  2.6  339    Waianae  3.7  374    Kauaʻi  5.1  519    Niʻihau  5.89  565     This relation is an example of what we call a function which means that for each Island, given as input their age in million years we have an output in the form of their distance in km to the Hot Spot. It can be observed that from Table that the Island of Niihau is the oldest one from this list being 4.89 million years old and also the furthest one from the Hot Spot at 565 km. Koolau, Oʻahu Island, is estimated to be 2.6 million years old and at 339 km from the hot spot.   "
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
  "id": "ex-units-islands",
  "level": "2",
  "url": "sec-units.html#ex-units-islands",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": " There are eight major volcanic Islands in Hawaiʻi: Niʻihau, Kauaʻi, Oʻahu, Molokaʻi , Lānaʻi, Maui, Kahoʻolawe and Hawaiʻi Island https:\/\/www.hvcb.org\/school-report\/eight-major-islands\/ . See   In addition, there are several atolls, and numerous smaller islets. It forms what we call an archipelago. Hawaiʻi became U.S. state on August 21, 1959 https:\/\/www.archives.gov\/legislative\/features\/hawaii , and is the only one not geographically connected to North America.    Map of the Hawaiian or Sandwich Islands, published in 1854 in Edward T. Perkins' Na Motu; or, Reef-Rovings in the South Seas.  Map of the Hawaiian ialnds in grey and white.   The formation of the Hawaiian Islands is occurring via Hot-Spot Volcanism. The fixed hot spot at the source of the Hawaiian Islands is located in the middle of the Pacific Plate, and the chain was formed as the plate drifted toward the northwest. Loihi, the youngest seamount of the chain is currently erupting from its summit at a depth of 1000 meters. In the following chart we have the age of some Hawaiian volcanoes along with their distance from Kilauea: https:\/\/pubs.usgs.gov\/pp\/1987\/1350\/pdf\/chapters\/pp1350_ch1.pdf      Volcano  Age in million years  Distance in km    Kilauea  0. 2  0    Mauna Kea  0.375  54    Kohala  0.43  100    Haleakala  0.75  182    Kahoolawe  1.03  185    West Maui  1.32  221    Lānaʻi  1.28  226    East Molokaʻi  1.76  256    West Molokaʻi  1.9  280    Koolau  2.6  339    Waianae  3.7  374    Kauaʻi  5.1  519    Niʻihau  5.89  565     This relation is an example of what we call a function which means that for each Island, given as input their age in million years we have an output in the form of their distance in km to the Hot Spot. It can be observed that from Table that the Island of Niihau is the oldest one from this list being 4.89 million years old and also the furthest one from the Hot Spot at 565 km. Koolau, Oʻahu Island, is estimated to be 2.6 million years old and at 339 km from the hot spot.  "
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
