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
      "2024-11-15T14:19:32.295Z",
      "2024-11-18T14:19:32.295Z"
    ],
    "id": "cc34ad96-a9ea-4639-9cb0-dae2df43828a"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "d11b4f8c-fc7f-4eb8-be96-c383dd171657",
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
        "default": "3d3623ab-d496-46b1-b74e-7ba85e9d861d",
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
            "max": 16384
          }
        }
      ]
    },
    "fromTo": {
      "optional": false,
      "nullable": false,
      "default": [
        "2024-11-15T14:19:32.296Z",
        "2024-11-18T14:19:32.296Z"
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
          "default": "2024-11-15T14:19:32.296Z",
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
          "default": "2024-11-15T14:19:32.296Z",
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
          "id": "a6bc8362-2ab1-41f0-8e0d-b6dee53355f8",
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
            "default": "3cec9e73-0f68-4bac-810c-d971b2b1309c",
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
          "default": "5ffa2820-f1d2-4d21-8a81-c29be8e107cc",
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
            "default": "ea82c7f8-ed53-4aba-96b2-55b282d21f01",
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
                "max": 16384
              }
            }
          ]
        },
        "fromTo": {
          "optional": false,
          "nullable": false,
          "default": [
            "2024-11-15T14:19:32.297Z",
            "2024-11-18T14:19:32.297Z"
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
              "default": "2024-11-15T14:19:32.297Z",
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
              "default": "2024-11-15T14:19:32.297Z",
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
              "id": "af5e5fb7-3bed-4e04-867e-b9d1ed677868",
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
                "default": "48a888d2-a212-4856-94a5-fefecf108b8f",
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
    "id": "f8a7846e-f9a7-4fe3-9897-bbb949e856cd",
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
      "default": "8c0ea726-ee62-4c0d-b787-af23f4d4232e",
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
  "default": "2024-11-15T14:19:32.298Z",
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
    "2024-11-15T14:19:32.298Z",
    "2024-11-18T14:19:32.298Z"
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
      "default": "2024-11-15T14:19:32.298Z",
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
      "default": "2024-11-15T14:19:32.298Z",
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
  "default": "eaf35ac8-6bdb-47be-b123-aaa53438a678",
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
    "id": "2096053a-9fe7-4dca-8efc-6782ba68da08"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "11d3ab58-2b28-4798-9ea9-8ebd9f5d1ec9",
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

