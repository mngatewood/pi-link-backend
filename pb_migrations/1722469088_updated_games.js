/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxappryrd9x8jjv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mx2uuh19",
    "name": "clue",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": 20,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q4s6fdlu",
    "name": "stage",
    "type": "select",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "inform",
        "play",
        "vote"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxappryrd9x8jjv")

  // remove
  collection.schema.removeField("mx2uuh19")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q4s6fdlu",
    "name": "stage",
    "type": "select",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "intro",
        "inform",
        "play",
        "vote"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
