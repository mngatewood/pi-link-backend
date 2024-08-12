/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "oxappryrd9x8jjv",
    "created": "2023-11-29 07:20:15.193Z",
    "updated": "2023-11-29 07:20:15.193Z",
    "name": "games",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jvoftbcl",
        "name": "code",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 9999,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "vuff6y8c",
        "name": "players",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": 1,
          "maxSelect": 8,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "o6nzgct0",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "not-started",
            "in-progress",
            "ended"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oxappryrd9x8jjv");

  return dao.deleteCollection(collection);
})
