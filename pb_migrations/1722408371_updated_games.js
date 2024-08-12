/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxappryrd9x8jjv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqp8pnzp",
    "name": "round",
    "type": "number",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxappryrd9x8jjv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqp8pnzp",
    "name": "round",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
