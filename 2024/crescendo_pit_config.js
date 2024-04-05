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
    { "name": "How often do you succefully leave?",
      "code": "aut_mvmt",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Score during Auto?",
      "code": "aut_score",
      "type": "bool",
      "required": "true"
    },
    { "name": "What can you do in Autonomus?",
      "code": "desc",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Max Auto Notes Scored ",
      "code": "aut_maxscore",
      "type": "number",
      "required": "true"
    },
    { "name": "How are notes aquired?",
      "code": "pickup",
      "type": "radio",
      "choices": {
        "f": "Floor<br>",
        "s": "Source<br>",
        "b": "Both"
      },
      "required": "true"
    },
    { "name": "Where are notes scored?",
      "code": "score",
      "type": "radio",
      "choices": {
        "a": "Amp<br>",
        "s": "Speaker<br>",
        "b": "Both"
      },
      "required": "true"
    },
    { "name": "Expected # of Teleop<br/>cycles per match",
      "code": "telCycles",
      "type": "number",
      "required": "true"
    },
    { "name": "Get onstage?",
      "code": "onstage",
      "type": "bool",
      "required": "true"
    },
    { "name": "Can you harmonize?",
      "code": "harmony",
      "type": "bool",
      "required": "true"
    },
    { "name": "How much drivepractice<br/>have you had? (hours)",
      "code": "practice",
      "type": "number",
      "required": "true"
    },
    { "name": "Ground Pick Up",
      "code": "bumper_intake",
      "type": "radio",
      "choices": {
        "o": "Over Bumper<br>",
        "u": "Under Bumper<br>",
        "c": "Can't"
      },
    "required": "true"
    },
    { 
      "name": "Can you score in the trap?",
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
    { "name": "What is something unique<br/>about your robot?",
      "code": "desc",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "What was your<br/>biggest issue from last comp<br/>and did you fix it?",
      "code": "desc",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "SCOUTER ONLY:<br/>other notes about this robot:",
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
