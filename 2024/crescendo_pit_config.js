var config_data = `
{
  "dataFormat": "tsv",
  "title": "Pit Scouting - FRC 4180",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Team Number",
      "code": "t",
      "type": "number",
      "required": "true"
    },
    { "name": "Leave starting zone in auto?",
      "code": "aut_mvmt",
      "type": "bool",
      "required": "true"
    },
    { "name": "Score during Auto?",
      "code": "aut_score",
      "type": "bool",
      "required": "true"
    },
    { "name": "Score a centerline note in Auto?",
      "code": "aut_centerscore",
      "type": "bool",
      "required": "true"
    },
    { "name": "Average Auto Notes Scored ",
      "code": "aut_avgscore",
      "type": "number",
      "required": "true"
    },
    { "name": "How do you intake notes?",
      "code": "pickup",
      "type": "radio",
      "choices": {
        "f": "Floor<br>",
        "s": "Source<br>",
        "b": "Both"
      },
      "required": "true"
    },
    { "name": "Where can you score notes?",
      "code": "score",
      "type": "radio",
      "choices": {
        "a": "Amp<br>",
        "s": "Speaker<br>",
        "b": "Both"
      },
      "required": "true"
    },
    { "name": "Expected(Average) # of Teleop<br/>cycles per match",
      "code": "telCycles",
      "type": "number",
      "required": "true"
    },
    { "name": "Can you climb onstage?",
      "code": "onstage",
      "type": "bool",
      "required": "true"
    },
    { "name": "Can you consistently harmonize?",
      "code": "harmony",
      "type": "bool",
      "required": "true"
    },
    { "name": "Can you score in the trap?",
      "code": "extension",
      "type": "bool",
      "required": "true"
    },
    { "name": "Drivetrain",
      "code": "dri",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "What is your robot specialized in<br/>or better then other robots at?",
      "code": "desc",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "SCOUTER ONLY:<br/>other notes about this robot:<br/> Don't forget to take a photo",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
