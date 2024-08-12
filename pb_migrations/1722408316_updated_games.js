/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxappryrd9x8jjv")

  // add
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

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oxappryrd9x8jjv")

  // remove
  collection.schema.removeField("sfnklov0")

  // remove
  collection.schema.removeField("wqp8pnzp")

  return dao.saveCollection(collection)
})
