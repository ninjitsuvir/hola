// 1. Mostrar tots els documents en la col·lecció Restaurants.
db.restaurants.find()

// 2. Mostrar el restaurant_id i name per tots els documents en la col·lecció Restaurants.
db.restaurants.find({}, {restaurant_id: 1, name: 1})

// 3. Mostrar el restaurant_id, name, borough i cuisine.
db.Restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// 4. Mostrar restaurant_id, name, borough i zip code.
db.Restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1})

// 5. Mostrar tots els restaurants que estan en el Bronx.
db.Restaurants.find({borough: "Bronx"})

// 6. Mostrar els primers 5 restaurants que estan en el Bronx.
db.Restaurants.find({borough: "Bronx"}).limit(5)

// 7. Mostrar el pròxims 5 restaurants després de saltar els primers 5 del Bronx.
db.Restaurants.find({borough: "Bronx"}).skip(5).limit(5)

// 8. Trobar els restaurants amb un score de més de 90.
db.Restaurants.find({"grades.score": {$gt: 90}})

// 9. Trobar els restaurants amb un score de més de 80 però menys que 100.
db.Restaurants.find({"grades.score": {$gt: 80, $lt: 100}})

// 10. Trobar els restaurants amb longitud menor que -95.754168.
db.Restaurants.find({"address.coord.0": {$lt: -95.754168}})

// 11. Trobar restaurants que no preparen 'American', amb qualificació > 70 i longitud < -65.754168.
db.Restaurants.find({
  cuisine: {$ne: "American"},
  "grades.score": {$gt: 70},
  "address.coord.0": {$lt: -65.754168}
})

// 12. El mateix que l'anterior però sense usar operador $and.
db.Restaurants.find({
  cuisine: {$ne: "American"},
  "grades.score": {$gt: 70},
  "address.coord.0": {$lt: -65.754168}
})

// 13. Trobar restaurants que no són 'American', grau 'A', i no són de Brooklyn. Ordenats per cuisine descendent.
db.Restaurants.find({
  cuisine: {$ne: "American"},
  "grades.grade": "A",
  borough: {$ne: "Brooklyn"}
}).sort({cuisine: -1})

// 14. Trobar restaurant_id, name, borough i cuisine on el nom comença amb 'Wil'.
db.Restaurants.find({name: /^Wil/}, {
  restaurant_id: 1, name: 1, borough: 1, cuisine: 1
})

// 15. Trobar restaurant_id, name, borough i cuisine on el nom acaba en 'ces'.
db.Restaurants.find({name: /ces$/}, {
  restaurant_id: 1, name: 1, borough: 1, cuisine: 1
})

// 16. Trobar restaurant_id, name, borough i cuisine on el nom conté 'Reg'.
db.Restaurants.find({name: /Reg/}, {
  restaurant_id: 1, name: 1, borough: 1, cuisine: 1
})

// 17. Trobar restaurants del Bronx que preparen cuina americana o xinesa.
db.Restaurants.find({
  borough: "Bronx",
  cuisine: {$in: ["American", "Chinese"]}
})

// 18. Trobar restaurant_id, name, borough i cuisine per a Staten Island, Queens, Bronx o Brooklyn.
db.Restaurants.find({
  borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}
}, {
  restaurant_id: 1, name: 1, borough: 1, cuisine: 1
})

// 19. Trobar restaurant_id, name, borough i cuisine per a restaurants que NO són d'aquests barris.
db.Restaurants.find({
  borough: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}
}, {
  restaurant_id: 1, name: 1, borough: 1, cuisine: 1
})

// 20. Trobar restaurant_id, name, borough i cuisine amb marcador no superior a 10.
db.Restaurants.find({
  "grades.score": {$lte: 10}
}, {
  restaurant_id: 1, name: 1, borough: 1, cuisine: 1
})

// 21. Trobar restaurants que preparen peix, no 'American' ni 'Chinees', o nom comença amb 'Wil'.
db.Restaurants.find({
  $or: [
    {cuisine: "Seafood"},
    {name: /^Wil/},
    {cuisine: {$nin: ["American", "Chinese"]}}
  ]
})

// 22. Trobar restaurant_id, name, i grades per grau "A", score 11, i data "2014-08-11T00:00:00Z".
db.Restaurants.find({
  grades: {
    $elemMatch: {
      grade: "A",
      score: 11,
      date: ISODate("2014-08-11T00:00:00Z")
    }
  }
}, {
  restaurant_id: 1, name: 1, grades: 1
})

// 23. Trobar restaurant_id, name i grades on el 2n element té grau "A", score 9 i data "2014-08-11T00:00:00Z".
db.Restaurants.find({
  "grades.1.grade": "A",
  "grades.1.score": 9,
  "grades.1.date": ISODate("2014-08-11T00:00:00Z")
}, {
  restaurant_id: 1, name: 1, grades: 1
})

// 24. Trobar el restaurant_id, name, street, zipcode i coordenades dels restaurants a menys de 5 km de [-74, 40.7].
db.Restaurants.find({
  "address.coord": {
    $near: {
      $geometry: {type: "Point", coordinates: [-74, 40.7]},
      $maxDistance: 5000
    }
  }
}, {
  restaurant_id: 1, name: 1, "address.street": 1, "address.zipcode": 1, "address.coord": 1
})

// 25. Ordenar els noms dels restaurants en ordre ascendent, mostrant totes les columnes.
db.Restaurants.find().sort({name: 1})

// 26. Ordenar els noms dels restaurants en ordre descendent, mostrant totes les columnes.
db.Restaurants.find().sort({name: -1})

// 27. Ordenar cuisine ascendent i borough descendent.
db.Restaurants.find().sort({cuisine: 1, borough: -1})

// 28. Mostrar direccions que no contenen el carrer.
db.Restaurants.find({"address.street":
