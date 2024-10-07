# Schemas

## Main schemas

### mapifestEvent
```json
{
  "optional": false,
  "nullable": false,
  "default": {
    "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
    "tileSchema": "https://tiles-{s}.sallamois.online/{z}/{x}/{y}.png",
    "tiles": [],
    "themeColor": "white",
    "pois": [],
    "fromTo": [
      "2024-10-07T15:54:15.039Z",
      "2024-10-10T15:54:15.039Z"
    ],
    "center": [
      0,
      0
    ],
    "bounds": [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "id": "309956b9-c72e-44e0-8e60-cd9a9e96c8dd"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "adfd1a5c-aa7f-44ab-8b28-45af3eb0f3a3",
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "uuid",
          "params": {
            "regex": {}
          }
        },
        {
          "name": "required"
        }
      ]
    },
    "adminIds": {
      "optional": false,
      "nullable": false,
      "type": "array",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "min",
          "params": {
            "min": 1
          }
        }
      ],
      "innerType": {
        "optional": false,
        "nullable": false,
        "default": "f14abf49-4968-4ce4-b1e0-2f8dc154cc27",
        "type": "string",
        "oneOf": [],
        "notOneOf": [],
        "tests": [
          {
            "name": "uuid",
            "params": {
              "regex": {}
            }
          },
          {
            "name": "required"
          }
        ]
      }
    },
    "bounds": {
      "optional": false,
      "nullable": false,
      "default": [
        [
          0,
          0
        ],
        [
          0,
          0
        ]
      ],
      "type": "tuple",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "innerType": [
        {
          "label": "first corner",
          "optional": false,
          "nullable": false,
          "type": "tuple",
          "oneOf": [],
          "notOneOf": [],
          "tests": [],
          "innerType": [
            {
              "label": "latitude",
              "optional": false,
              "nullable": false,
              "type": "number",
              "oneOf": [],
              "notOneOf": [],
              "tests": [
                {
                  "name": "min",
                  "params": {
                    "min": -90
                  }
                },
                {
                  "name": "max",
                  "params": {
                    "max": 90
                  }
                }
              ]
            },
            {
              "label": "longitude",
              "optional": false,
              "nullable": false,
              "type": "number",
              "oneOf": [],
              "notOneOf": [],
              "tests": [
                {
                  "name": "min",
                  "params": {
                    "min": -180
                  }
                },
                {
                  "name": "max",
                  "params": {
                    "max": 180
                  }
                }
              ]
            }
          ]
        },
        {
          "label": "second corner",
          "optional": false,
          "nullable": false,
          "type": "tuple",
          "oneOf": [],
          "notOneOf": [],
          "tests": [],
          "innerType": [
            {
              "label": "latitude",
              "optional": false,
              "nullable": false,
              "type": "number",
              "oneOf": [],
              "notOneOf": [],
              "tests": [
                {
                  "name": "min",
                  "params": {
                    "min": -90
                  }
                },
                {
                  "name": "max",
                  "params": {
                    "max": 90
                  }
                }
              ]
            },
            {
              "label": "longitude",
              "optional": false,
              "nullable": false,
              "type": "number",
              "oneOf": [],
              "notOneOf": [],
              "tests": [
                {
                  "name": "min",
                  "params": {
                    "min": -180
                  }
                },
                {
                  "name": "max",
                  "params": {
                    "max": 180
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "center": {
      "optional": false,
      "nullable": false,
      "default": [
        0,
        0
      ],
      "type": "tuple",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "innerType": [
        {
          "label": "latitude",
          "optional": false,
          "nullable": false,
          "type": "number",
          "oneOf": [],
          "notOneOf": [],
          "tests": [
            {
              "name": "min",
              "params": {
                "min": -90
              }
            },
            {
              "name": "max",
              "params": {
                "max": 90
              }
            }
          ]
        },
        {
          "label": "longitude",
          "optional": false,
          "nullable": false,
          "type": "number",
          "oneOf": [],
          "notOneOf": [],
          "tests": [
            {
              "name": "min",
              "params": {
                "min": -180
              }
            },
            {
              "name": "max",
              "params": {
                "max": 180
              }
            }
          ]
        }
      ]
    },
    "description": {
      "optional": true,
      "nullable": false,
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "max",
          "params": {
            "max": 16384
          }
        }
      ]
    },
    "fromTo": {
      "optional": false,
      "nullable": false,
      "default": [
        "2024-10-07T15:54:15.040Z",
        "2024-10-10T15:54:15.040Z"
      ],
      "type": "tuple",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "innerType": [
        {
          "label": "from",
          "optional": true,
          "nullable": false,
          "default": "2024-10-07T15:54:15.040Z",
          "type": "string",
          "oneOf": [],
          "notOneOf": [],
          "tests": [
            {
              "name": "datetime",
              "params": {
                "regex": {}
              }
            },
            {
              "name": "datetime_offset",
              "params": {}
            },
            {
              "name": "datetime_precision",
              "params": {}
            }
          ]
        },
        {
          "label": "to",
          "optional": true,
          "nullable": false,
          "default": "2024-10-07T15:54:15.040Z",
          "type": "string",
          "oneOf": [],
          "notOneOf": [],
          "tests": [
            {
              "name": "datetime",
              "params": {
                "regex": {}
              }
            },
            {
              "name": "datetime_offset",
              "params": {}
            },
            {
              "name": "datetime_precision",
              "params": {}
            }
          ]
        }
      ]
    },
    "name": {
      "optional": false,
      "nullable": false,
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "min",
          "params": {
            "min": 3
          }
        },
        {
          "name": "max",
          "params": {
            "max": 128
          }
        },
        {
          "name": "required"
        }
      ]
    },
    "pois": {
      "optional": false,
      "nullable": false,
      "default": [],
      "type": "array",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "innerType": {
        "optional": false,
        "nullable": false,
        "default": {
          "hero": {
            "url": "https://placehold.co/800x600.png",
            "type": "IMAGE"
          },
          "coordinates": [
            0,
            0
          ],
          "id": "a64ba751-574a-47f7-a479-a26269df4e23"
        },
        "type": "object",
        "oneOf": [],
        "notOneOf": [],
        "tests": [],
        "fields": {
          "id": {
            "optional": false,
            "nullable": false,
            "default": "5ae56eb4-95ee-46f6-9f33-03b2dc24fce2",
            "type": "string",
            "oneOf": [],
            "notOneOf": [],
            "tests": [
              {
                "name": "uuid",
                "params": {
                  "regex": {}
                }
              },
              {
                "name": "required"
              }
            ]
          },
          "coordinates": {
            "optional": false,
            "nullable": false,
            "default": [
              0,
              0
            ],
            "type": "tuple",
            "oneOf": [],
            "notOneOf": [],
            "tests": [],
            "innerType": [
              {
                "label": "latitude",
                "optional": false,
                "nullable": false,
                "type": "number",
                "oneOf": [],
                "notOneOf": [],
                "tests": [
                  {
                    "name": "min",
                    "params": {
                      "min": -90
                    }
                  },
                  {
                    "name": "max",
                    "params": {
                      "max": 90
                    }
                  }
                ]
              },
              {
                "label": "longitude",
                "optional": false,
                "nullable": false,
                "type": "number",
                "oneOf": [],
                "notOneOf": [],
                "tests": [
                  {
                    "name": "min",
                    "params": {
                      "min": -180
                    }
                  },
                  {
                    "name": "max",
                    "params": {
                      "max": 180
                    }
                  }
                ]
              }
            ]
          },
          "title": {
            "optional": false,
            "nullable": false,
            "type": "string",
            "oneOf": [],
            "notOneOf": [],
            "tests": [
              {
                "name": "min",
                "params": {
                  "min": 1
                }
              },
              {
                "name": "max",
                "params": {
                  "max": 32
                }
              },
              {
                "name": "required"
              }
            ]
          },
          "description": {
            "optional": false,
            "nullable": false,
            "type": "string",
            "oneOf": [],
            "notOneOf": [],
            "tests": [
              {
                "name": "max",
                "params": {
                  "max": 16384
                }
              },
              {
                "name": "required"
              }
            ]
          },
          "hero": {
            "optional": true,
            "nullable": false,
            "default": {
              "url": "https://placehold.co/800x600.png",
              "type": "IMAGE"
            },
            "type": "object",
            "oneOf": [],
            "notOneOf": [],
            "tests": [],
            "fields": {
              "type": {
                "optional": false,
                "nullable": false,
                "default": "IMAGE",
                "type": "string",
                "oneOf": [
                  "IMAGE",
                  "YOUTUBE"
                ],
                "notOneOf": [],
                "tests": [
                  {
                    "name": "required"
                  }
                ]
              },
              "url": {
                "optional": false,
                "nullable": false,
                "default": "https://placehold.co/800x600.png",
                "type": "string",
                "oneOf": [],
                "notOneOf": [],
                "tests": [
                  {
                    "name": "url",
                    "params": {
                      "regex": {}
                    }
                  },
                  {
                    "name": "required"
                  }
                ]
              }
            }
          }
        }
      }
    },
    "shortName": {
      "optional": true,
      "nullable": false,
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "max",
          "params": {
            "max": 32
          }
        }
      ]
    },
    "themeColor": {
      "optional": false,
      "nullable": false,
      "default": "white",
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "is-color"
        },
        {
          "name": "required"
        }
      ]
    },
    "tiles": {
      "optional": false,
      "nullable": false,
      "default": [],
      "type": "array",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "innerType": {
        "optional": false,
        "nullable": false,
        "type": "tuple",
        "oneOf": [],
        "notOneOf": [],
        "tests": [],
        "innerType": [
          {
            "label": "x",
            "optional": false,
            "nullable": false,
            "type": "number",
            "oneOf": [],
            "notOneOf": [],
            "tests": [
              {
                "name": "integer"
              },
              {
                "name": "min",
                "params": {
                  "more": 0
                }
              }
            ]
          },
          {
            "label": "y",
            "optional": false,
            "nullable": false,
            "type": "number",
            "oneOf": [],
            "notOneOf": [],
            "tests": [
              {
                "name": "integer"
              },
              {
                "name": "min",
                "params": {
                  "more": 0
                }
              }
            ]
          },
          {
            "label": "z",
            "optional": false,
            "nullable": false,
            "type": "number",
            "oneOf": [],
            "notOneOf": [],
            "tests": [
              {
                "name": "integer"
              },
              {
                "name": "min",
                "params": {
                  "more": 0
                }
              }
            ]
          }
        ]
      }
    },
    "tileSchema": {
      "optional": false,
      "nullable": false,
      "default": "https://tiles-{s}.sallamois.online/{z}/{x}/{y}.png",
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "required"
        }
      ]
    },
    "attribution": {
      "optional": false,
      "nullable": false,
      "default": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "required"
        }
      ]
    }
  }
}
```

### poi
```json
{
  "optional": false,
  "nullable": false,
  "default": {
    "hero": {
      "url": "https://placehold.co/800x600.png",
      "type": "IMAGE"
    },
    "coordinates": [
      0,
      0
    ],
    "id": "8e10429e-c4cf-4160-905e-b080aff29524"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "ea3d2636-60d7-470f-8eb2-dfce8c6e12bd",
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "uuid",
          "params": {
            "regex": {}
          }
        },
        {
          "name": "required"
        }
      ]
    },
    "coordinates": {
      "optional": false,
      "nullable": false,
      "default": [
        0,
        0
      ],
      "type": "tuple",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "innerType": [
        {
          "label": "latitude",
          "optional": false,
          "nullable": false,
          "type": "number",
          "oneOf": [],
          "notOneOf": [],
          "tests": [
            {
              "name": "min",
              "params": {
                "min": -90
              }
            },
            {
              "name": "max",
              "params": {
                "max": 90
              }
            }
          ]
        },
        {
          "label": "longitude",
          "optional": false,
          "nullable": false,
          "type": "number",
          "oneOf": [],
          "notOneOf": [],
          "tests": [
            {
              "name": "min",
              "params": {
                "min": -180
              }
            },
            {
              "name": "max",
              "params": {
                "max": 180
              }
            }
          ]
        }
      ]
    },
    "title": {
      "optional": false,
      "nullable": false,
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "min",
          "params": {
            "min": 1
          }
        },
        {
          "name": "max",
          "params": {
            "max": 32
          }
        },
        {
          "name": "required"
        }
      ]
    },
    "description": {
      "optional": false,
      "nullable": false,
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "max",
          "params": {
            "max": 16384
          }
        },
        {
          "name": "required"
        }
      ]
    },
    "hero": {
      "optional": true,
      "nullable": false,
      "default": {
        "url": "https://placehold.co/800x600.png",
        "type": "IMAGE"
      },
      "type": "object",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "fields": {
        "type": {
          "optional": false,
          "nullable": false,
          "default": "IMAGE",
          "type": "string",
          "oneOf": [
            "IMAGE",
            "YOUTUBE"
          ],
          "notOneOf": [],
          "tests": [
            {
              "name": "required"
            }
          ]
        },
        "url": {
          "optional": false,
          "nullable": false,
          "default": "https://placehold.co/800x600.png",
          "type": "string",
          "oneOf": [],
          "notOneOf": [],
          "tests": [
            {
              "name": "url",
              "params": {
                "regex": {}
              }
            },
            {
              "name": "required"
            }
          ]
        }
      }
    }
  }
}
```

## Utility schemas

### bounds
```json
{
  "optional": false,
  "nullable": false,
  "type": "tuple",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "innerType": [
    {
      "label": "first corner",
      "optional": false,
      "nullable": false,
      "type": "tuple",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "innerType": [
        {
          "label": "latitude",
          "optional": false,
          "nullable": false,
          "type": "number",
          "oneOf": [],
          "notOneOf": [],
          "tests": [
            {
              "name": "min",
              "params": {
                "min": -90
              }
            },
            {
              "name": "max",
              "params": {
                "max": 90
              }
            }
          ]
        },
        {
          "label": "longitude",
          "optional": false,
          "nullable": false,
          "type": "number",
          "oneOf": [],
          "notOneOf": [],
          "tests": [
            {
              "name": "min",
              "params": {
                "min": -180
              }
            },
            {
              "name": "max",
              "params": {
                "max": 180
              }
            }
          ]
        }
      ]
    },
    {
      "label": "second corner",
      "optional": false,
      "nullable": false,
      "type": "tuple",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "innerType": [
        {
          "label": "latitude",
          "optional": false,
          "nullable": false,
          "type": "number",
          "oneOf": [],
          "notOneOf": [],
          "tests": [
            {
              "name": "min",
              "params": {
                "min": -90
              }
            },
            {
              "name": "max",
              "params": {
                "max": 90
              }
            }
          ]
        },
        {
          "label": "longitude",
          "optional": false,
          "nullable": false,
          "type": "number",
          "oneOf": [],
          "notOneOf": [],
          "tests": [
            {
              "name": "min",
              "params": {
                "min": -180
              }
            },
            {
              "name": "max",
              "params": {
                "max": 180
              }
            }
          ]
        }
      ]
    }
  ]
}
```

### color
```json
{
  "optional": false,
  "nullable": false,
  "default": "white",
  "type": "string",
  "oneOf": [],
  "notOneOf": [],
  "tests": [
    {
      "name": "is-color"
    },
    {
      "name": "required"
    }
  ]
}
```

### coordinates
```json
{
  "optional": false,
  "nullable": false,
  "type": "tuple",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "innerType": [
    {
      "label": "latitude",
      "optional": false,
      "nullable": false,
      "type": "number",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "min",
          "params": {
            "min": -90
          }
        },
        {
          "name": "max",
          "params": {
            "max": 90
          }
        }
      ]
    },
    {
      "label": "longitude",
      "optional": false,
      "nullable": false,
      "type": "number",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "min",
          "params": {
            "min": -180
          }
        },
        {
          "name": "max",
          "params": {
            "max": 180
          }
        }
      ]
    }
  ]
}
```

### datetime
```json
{
  "optional": true,
  "nullable": false,
  "default": "2024-10-07T15:54:15.042Z",
  "type": "string",
  "oneOf": [],
  "notOneOf": [],
  "tests": [
    {
      "name": "datetime",
      "params": {
        "regex": {}
      }
    },
    {
      "name": "datetime_offset",
      "params": {}
    },
    {
      "name": "datetime_precision",
      "params": {}
    }
  ]
}
```

### fromTo
```json
{
  "optional": false,
  "nullable": false,
  "default": [
    "2024-10-07T15:54:15.042Z",
    "2024-10-10T15:54:15.042Z"
  ],
  "type": "tuple",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "innerType": [
    {
      "label": "from",
      "optional": true,
      "nullable": false,
      "default": "2024-10-07T15:54:15.042Z",
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "datetime",
          "params": {
            "regex": {}
          }
        },
        {
          "name": "datetime_offset",
          "params": {}
        },
        {
          "name": "datetime_precision",
          "params": {}
        }
      ]
    },
    {
      "label": "to",
      "optional": true,
      "nullable": false,
      "default": "2024-10-07T15:54:15.042Z",
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "datetime",
          "params": {
            "regex": {}
          }
        },
        {
          "name": "datetime_offset",
          "params": {}
        },
        {
          "name": "datetime_precision",
          "params": {}
        }
      ]
    }
  ]
}
```

### hero
```json
{
  "optional": false,
  "nullable": false,
  "default": {
    "url": "https://placehold.co/800x600.png",
    "type": "IMAGE"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "type": {
      "optional": false,
      "nullable": false,
      "default": "IMAGE",
      "type": "string",
      "oneOf": [
        "IMAGE",
        "YOUTUBE"
      ],
      "notOneOf": [],
      "tests": [
        {
          "name": "required"
        }
      ]
    },
    "url": {
      "optional": false,
      "nullable": false,
      "default": "https://placehold.co/800x600.png",
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "url",
          "params": {
            "regex": {}
          }
        },
        {
          "name": "required"
        }
      ]
    }
  }
}
```

### id
```json
{
  "optional": false,
  "nullable": false,
  "default": "8f6a2cc4-07f4-47e9-8d57-745eccdac8c0",
  "type": "string",
  "oneOf": [],
  "notOneOf": [],
  "tests": [
    {
      "name": "uuid",
      "params": {
        "regex": {}
      }
    },
    {
      "name": "required"
    }
  ]
}
```

### objectWithId
```json
{
  "optional": false,
  "nullable": false,
  "default": {
    "id": "0807eb60-9d14-4e03-9ae9-404725f113ca"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "ee8bf37c-7409-4168-8819-964425f6f990",
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "uuid",
          "params": {
            "regex": {}
          }
        },
        {
          "name": "required"
        }
      ]
    }
  }
}
```

### tile
```json
{
  "optional": false,
  "nullable": false,
  "type": "tuple",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "innerType": [
    {
      "label": "x",
      "optional": false,
      "nullable": false,
      "type": "number",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "integer"
        },
        {
          "name": "min",
          "params": {
            "more": 0
          }
        }
      ]
    },
    {
      "label": "y",
      "optional": false,
      "nullable": false,
      "type": "number",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "integer"
        },
        {
          "name": "min",
          "params": {
            "more": 0
          }
        }
      ]
    },
    {
      "label": "z",
      "optional": false,
      "nullable": false,
      "type": "number",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "integer"
        },
        {
          "name": "min",
          "params": {
            "more": 0
          }
        }
      ]
    }
  ]
}
```

