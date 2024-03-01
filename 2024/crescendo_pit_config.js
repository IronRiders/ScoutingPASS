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
    { "name": "Move during Auto?",
      "code": "aut_mvmt",
      "type": "bool",
      "required": "true"
    },
    { "name": "Score during Auto?",
      "code": "aut_score",
      "type": "bool",
      "required": "true"
    },
    { "name": "# of Auto Sources",
      "code": "aut_cycles",
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
    { "name": "Where are notes placed?",
      "code": "score",
      "type": "radio",
      "choices": {
        "f": "Amp<br>",
        "s": "Speaker<br>",
        "b": "Both"
      },
      "required": "true"
    },
    { "name": "Expected # of Teleop<br> cycles per match",
      "code": "autCycles",
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
    { "name": "Who is your drive coach?",
      "code": "coach",
      "type": "radio",
      "choices": {
        "s": "Student<br>",
        "m": "Mentor<br>"
      },
      "required": "true"
    },
    { "name": "How much drivepractice<br/>have you had? (hours)",
      "code": "practice",
      "type": "number",
      "required": "true"
    },
    { "name": "How does your manipulator work?",
      "code": "manipulator",
      "type": "text",
      "size": 20,
      "maxSize": 500,
      "required": "true"
    },
    { "name": "Seperate mechanism to intake?",
      "code": "seperate_intake",
      "type": "bool",
      "required": "true"
    },
    { 
      "name": "Does the manipulator extend?",
      "code": "extension",
      "type": "bool",
      "required": "true"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grasshopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "required": "true"
    },
    { "name": "What is something unique<br/>about your robot?",
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
