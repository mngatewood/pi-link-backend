/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxappryrd9x8jjv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4kylsgss",
    "name": "votes",
    "type": "json",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mmbqjjnd",
    "name": "votingCompleted",
    "type": "bool",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sfnklov0",
    "name": "playerOrder",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxappryrd9x8jjv")

  // remove
  collection.schema.removeField("4kylsgss")

  // remove
  collection.schema.removeField("mmbqjjnd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sfnklov0",
    "name": "playerOrder",
    "type": "json",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
