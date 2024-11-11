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
      "2024-11-11T08:55:03.957Z",
      "2024-11-14T08:55:03.957Z"
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
    "id": "a1315883-68f8-4107-9ebb-f033203ed377"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "9969b710-8fe0-40c5-a42e-011bfb054146",
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
        "default": "b10fd7d1-3900-4922-a9be-fd56acad819d",
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
        "2024-11-11T08:55:03.958Z",
        "2024-11-14T08:55:03.958Z"
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
          "default": "2024-11-11T08:55:03.958Z",
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
          "default": "2024-11-11T08:55:03.958Z",
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
          "id": "ca2f4d8a-eebc-47b1-ae54-44144e2d2218",
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
            "default": "2475dcc5-646a-4590-93b7-c3ce56cf9400",
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
          "default": "d7646b7d-bcc1-4380-9d33-50f99b3ef7a5",
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
            "default": "dd0b413e-cdff-4248-912f-60347cc3a7cd",
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
            "2024-11-11T08:55:03.958Z",
            "2024-11-14T08:55:03.958Z"
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
              "default": "2024-11-11T08:55:03.958Z",
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
              "default": "2024-11-11T08:55:03.958Z",
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
              "id": "d2426b3d-ef34-4549-9900-e01e860ea603",
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
                "default": "a81d021f-4935-426a-8e39-29c5392fd311",
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
    "id": "39738310-9c3d-48af-b229-2219e4c4697f",
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
      "default": "ccd1690c-2bf7-41db-9ea1-01de8d18eb50",
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
  "default": "2024-11-11T08:55:03.960Z",
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
    "2024-11-11T08:55:03.960Z",
    "2024-11-14T08:55:03.960Z"
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
      "default": "2024-11-11T08:55:03.960Z",
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
      "default": "2024-11-11T08:55:03.960Z",
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
  "default": "6d327c0e-065e-471b-8ba9-82451cd09092",
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
    "id": "3cdc4b2f-fb15-4a88-a206-e95997c54c5d"
  },
  "type": "object",
  "oneOf": [],
  "notOneOf": [],
  "tests": [],
  "fields": {
    "id": {
      "optional": false,
      "nullable": false,
      "default": "74b0c3c9-9c5d-43aa-b859-9015098e2a10",
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

