/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxappryrd9x8jjv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q4s6fdlu",
    "name": "stage",
    "type": "select",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "inform",
        "play",
        "defense",
        "vote",
        "results",
        "end"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxappryrd9x8jjv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q4s6fdlu",
    "name": "stage",
    "type": "select",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "inform",
        "play",
        "defense",
        "vote",
        "results"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
