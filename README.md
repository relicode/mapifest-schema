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
    "themeColor": "#eef0d5",
    "userIcon": {
      "iconSize": 48
    },
    "pois": [],
    "fromTo": [
      "2024-11-20T14:22:35.335Z",
      "2024-11-23T14:22:35.335Z"
    ],
    "id": "51ebb782-f798-4df5-a850-63e40c0a23a6"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "b4cc324a-5dfa-41d8-b403-f7d502290183",
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
        "default": "7641faae-dce2-4ea5-9e5a-c5d0c0aa4aba",
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
            "max": 32768
          }
        }
      ]
    },
    "descriptionRichText": {
      "optional": true,
      "nullable": false,
      "type": "string",
      "oneOf": [],
      "notOneOf": [],
      "tests": [
        {
          "name": "max",
          "params": {
            "max": 65536
          }
        }
      ]
    },
    "fromTo": {
      "optional": false,
      "nullable": false,
      "default": [
        "2024-11-20T14:22:35.336Z",
        "2024-11-23T14:22:35.336Z"
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
          "default": "2024-11-20T14:22:35.336Z",
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
          "default": "2024-11-20T14:22:35.336Z",
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
          "id": "f9924993-39d5-477c-9f44-f58f8ac5ad7c",
          "iconSize": 48
        },
        "type": "object",
        "oneOf": [],
        "notOneOf": [],
        "tests": [],
        "fields": {
          "iconUrl": {
            "optional": false,
            "nullable": false,
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
            "default": "06949fae-d2e4-44f2-9d52-27ed870d72a4",
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
                  "max": 32768
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
            "type": "object",
            "oneOf": [],
            "notOneOf": [],
            "tests": [],
            "fields": {
              "type": {
                "optional": false,
                "nullable": false,
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
    "appIconUrl": {
      "optional": false,
      "nullable": false,
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
          "name": "matches",
          "params": {
            "regex": {}
          }
        },
        {
          "name": "required"
        }
      ]
    },
    "userIcon": {
      "optional": false,
      "nullable": false,
      "default": {
        "iconSize": 48
      },
      "type": "object",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "fields": {
        "iconUrl": {
          "optional": false,
          "nullable": false,
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
      "default": "#eef0d5",
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
    },
    "preview": {
      "optional": true,
      "nullable": false,
      "type": "object",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "fields": {
        "id": {
          "optional": false,
          "nullable": false,
          "default": "81238e29-648e-4a99-a9f1-058cda3348d1",
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
            "default": "ebd58b31-1db0-4559-a41a-ac78a1524c5f",
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
                "max": 32768
              }
            }
          ]
        },
        "descriptionRichText": {
          "optional": true,
          "nullable": false,
          "type": "string",
          "oneOf": [],
          "notOneOf": [],
          "tests": [
            {
              "name": "max",
              "params": {
                "max": 65536
              }
            }
          ]
        },
        "fromTo": {
          "optional": false,
          "nullable": false,
          "default": [
            "2024-11-20T14:22:35.336Z",
            "2024-11-23T14:22:35.336Z"
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
              "default": "2024-11-20T14:22:35.336Z",
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
              "default": "2024-11-20T14:22:35.336Z",
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
              "id": "8e4a58b6-078c-4fc3-ba51-ee3f9208f57f",
              "iconSize": 48
            },
            "type": "object",
            "oneOf": [],
            "notOneOf": [],
            "tests": [],
            "fields": {
              "iconUrl": {
                "optional": false,
                "nullable": false,
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
                "default": "2c46791a-0e0b-48a7-8e21-dbe02f43dd36",
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
                      "max": 32768
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
                "type": "object",
                "oneOf": [],
                "notOneOf": [],
                "tests": [],
                "fields": {
                  "type": {
                    "optional": false,
                    "nullable": false,
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
        "appIconUrl": {
          "optional": false,
          "nullable": false,
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
              "name": "matches",
              "params": {
                "regex": {}
              }
            },
            {
              "name": "required"
            }
          ]
        },
        "userIcon": {
          "optional": false,
          "nullable": false,
          "default": {
            "iconSize": 48
          },
          "type": "object",
          "oneOf": [],
          "notOneOf": [],
          "tests": [],
          "fields": {
            "iconUrl": {
              "optional": false,
              "nullable": false,
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
          "default": "#eef0d5",
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
  }
}
```

### poi
```json
{
  "optional": false,
  "nullable": false,
  "default": {
    "id": "5c111215-b46a-4f34-a815-d042963304b6",
    "iconSize": 48
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "iconUrl": {
      "optional": false,
      "nullable": false,
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
      "default": "d1250f71-467b-4430-9b5e-8f0c1da02aa6",
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
            "max": 32768
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
      "type": "object",
      "oneOf": [],
      "notOneOf": [],
      "tests": [],
      "fields": {
        "type": {
          "optional": false,
          "nullable": false,
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
  "default": "2024-11-20T14:22:35.337Z",
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
    "2024-11-20T14:22:35.337Z",
    "2024-11-23T14:22:35.337Z"
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
      "default": "2024-11-20T14:22:35.338Z",
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
      "default": "2024-11-20T14:22:35.338Z",
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
  "optional": true,
  "nullable": false,
  "default": {},
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "type": {
      "optional": false,
      "nullable": false,
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
  "default": "88eb40d1-0f16-4e49-9492-71fd54548279",
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
    "iconSize": 48
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "iconUrl": {
      "optional": false,
      "nullable": false,
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
    "id": "02bb71d7-1cb5-43ab-82d8-3f6da0c849a4"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "45fd35f5-c979-4546-893d-7491ad7b4c4f",
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

