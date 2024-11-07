# Schemas

## Main schemas

### mapifestEvent
```json
{
  "optional": false,
  "nullable": false,
  "default": {
    "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
    "tileSchema": "https://tiles-ee-{s}.sallamois.online/tile/{z}/{x}/{y}.png",
    "tiles": [],
    "themeColor": "#ecece8",
    "userIcon": {
      "iconSize": 48,
      "icon": "http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg"
    },
    "pois": [],
    "fromTo": [
      "2024-11-07T10:39:14.668Z",
      "2024-11-10T10:39:14.668Z"
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
    "id": "3b3c6c10-40f3-4539-950f-cc2d22a43968"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "8e365bda-e454-47ee-b135-e336574677da",
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
        "default": "7d75b22c-7577-4323-a4e7-2715c7816e3c",
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
        "2024-11-07T10:39:14.668Z",
        "2024-11-10T10:39:14.668Z"
      ],
      "type": "tuple",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "innerType": [
        {
          "label": "from",
          "optional": false,
          "nullable": false,
          "default": "2024-11-07T10:39:14.669Z",
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
            },
            {
              "name": "required"
            }
          ]
        },
        {
          "label": "to",
          "optional": false,
          "nullable": false,
          "default": "2024-11-07T10:39:14.669Z",
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
            },
            {
              "name": "required"
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
          "id": "f6b0070c-5550-4ab1-a438-8f55cab5fb7e",
          "iconSize": 48,
          "icon": "http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg"
        },
        "type": "object",
        "oneOf": [],
        "notOneOf": [],
        "tests": [],
        "fields": {
          "icon": {
            "optional": false,
            "nullable": false,
            "default": "http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg",
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
          },
          "iconSize": {
            "optional": false,
            "nullable": false,
            "default": 48,
            "type": "number",
            "oneOf": [
              32,
              48,
              64
            ],
            "notOneOf": [],
            "tests": []
          },
          "id": {
            "optional": false,
            "nullable": false,
            "default": "ffce2f0a-50f4-46aa-bb06-ddf20c72b27e",
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
    "userIcon": {
      "optional": false,
      "nullable": false,
      "default": {
        "iconSize": 48,
        "icon": "http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg"
      },
      "type": "object",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "fields": {
        "icon": {
          "optional": false,
          "nullable": false,
          "default": "http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg",
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
        },
        "iconSize": {
          "optional": false,
          "nullable": false,
          "default": 48,
          "type": "number",
          "oneOf": [
            32,
            48,
            64
          ],
          "notOneOf": [],
          "tests": []
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
      "default": "#ecece8",
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
      "default": "https://tiles-ee-{s}.sallamois.online/tile/{z}/{x}/{y}.png",
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
    "id": "6a098845-ce4d-4c4b-a626-6cf980e7f582",
    "iconSize": 48,
    "icon": "http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "icon": {
      "optional": false,
      "nullable": false,
      "default": "http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg",
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
    },
    "iconSize": {
      "optional": false,
      "nullable": false,
      "default": 48,
      "type": "number",
      "oneOf": [
        32,
        48,
        64
      ],
      "notOneOf": [],
      "tests": []
    },
    "id": {
      "optional": false,
      "nullable": false,
      "default": "ca79a1b4-f7df-4ecc-9079-493f84b2a5c8",
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
  "optional": false,
  "nullable": false,
  "default": "2024-11-07T10:39:14.670Z",
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
    },
    {
      "name": "required"
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
    "2024-11-07T10:39:14.670Z",
    "2024-11-10T10:39:14.670Z"
  ],
  "type": "tuple",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "innerType": [
    {
      "label": "from",
      "optional": false,
      "nullable": false,
      "default": "2024-11-07T10:39:14.670Z",
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
        },
        {
          "name": "required"
        }
      ]
    },
    {
      "label": "to",
      "optional": false,
      "nullable": false,
      "default": "2024-11-07T10:39:14.670Z",
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
        },
        {
          "name": "required"
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
  "default": "f5ed297b-4167-4556-a45a-3dfb079a3c65",
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

### objectWithIcon
```json
{
  "optional": false,
  "nullable": false,
  "default": {
    "iconSize": 48,
    "icon": "http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "icon": {
      "optional": false,
      "nullable": false,
      "default": "http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg",
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
    },
    "iconSize": {
      "optional": false,
      "nullable": false,
      "default": 48,
      "type": "number",
      "oneOf": [
        32,
        48,
        64
      ],
      "notOneOf": [],
      "tests": []
    }
  }
}
```

### objectWithId
```json
{
  "optional": false,
  "nullable": false,
  "default": {
    "id": "590cc8f2-8092-44e5-94c2-21a8331c6923"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "59248742-f61e-4255-86c2-ace8b8d9e517",
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

