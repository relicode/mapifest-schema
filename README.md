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
      "2024-11-11T13:18:54.029Z",
      "2024-11-14T13:18:54.029Z"
    ],
    "center": [
      58.954053,
      26.377927
    ],
    "bounds": [
      [
        58.956344,
        26.370696
      ],
      [
        58.95184,
        26.383367
      ]
    ],
    "id": "0fd8eb82-5b11-4bd1-9b05-aa969de27b1a"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "4238861d-5d94-4b67-b337-8d64c73aaa58",
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
        "default": "7f67865f-8383-4929-8f92-40b8a121e6a5",
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
          58.956344,
          26.370696
        ],
        [
          58.95184,
          26.383367
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
        58.954053,
        26.377927
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
        "2024-11-11T13:18:54.030Z",
        "2024-11-14T13:18:54.030Z"
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
          "default": "2024-11-11T13:18:54.031Z",
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
          "default": "2024-11-11T13:18:54.031Z",
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
          "id": "4288bf99-40db-42ac-9810-e7b851642555",
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
            "default": "2f1c87cb-d21c-4097-9f1a-333100b09663",
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
          "default": "bc21fcec-ad80-4352-9477-aea760cfb4e1",
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
            "default": "f2bcc95c-6ee6-4e71-bec9-549dc363c6e1",
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
              58.956344,
              26.370696
            ],
            [
              58.95184,
              26.383367
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
            58.954053,
            26.377927
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
            "2024-11-11T13:18:54.031Z",
            "2024-11-14T13:18:54.031Z"
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
              "default": "2024-11-11T13:18:54.031Z",
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
              "default": "2024-11-11T13:18:54.031Z",
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
              "id": "8102a068-0c45-458c-870e-5ea2484698b6",
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
                "default": "d1a9a9c6-17b3-460e-a442-863afbd2a2e1",
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
    "id": "8080d90c-94d6-455c-9bdd-c569c846f1fa",
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
      "default": "27b7653b-4846-4325-9312-df7a9722d1c5",
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
  "default": "2024-11-11T13:18:54.032Z",
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
    "2024-11-11T13:18:54.032Z",
    "2024-11-14T13:18:54.032Z"
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
      "default": "2024-11-11T13:18:54.032Z",
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
      "default": "2024-11-11T13:18:54.032Z",
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
  "default": "862d9545-b085-434c-ab1e-3fdf8cc3734d",
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
    "id": "d017b5d9-15c0-4c25-9978-1dae8efa41f4"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "c64b8e09-4b2e-4cb6-8ab6-7e5160608c5f",
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

