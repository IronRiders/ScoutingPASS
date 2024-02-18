var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
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
    { "name": "Longest Side<br>Including Bumpers",
      "code": "lng",
      "type": "number",
      "defaultValue": "0",
      "required": "true"
    },
    { "name": "Shortest Side<br>Including Bumpers",
      "code": "srt",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0",
      "required": "true"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o",
      "required": "true"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "L1 (8.14:1)<br>",
        "2": "L2 (6.75:1)<br>",
        "3": "L3 (6.12:1)<br>",
        "4": "L4 (5.14:1)<br>",
        "o": "Other ratio (put in comments)<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"x"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "k": "Kraken<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"n",
      "required": "true"
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Ground pickup for notes",
      "code": "fpu",
      "type": "bool",
      "required": "true"
    },
    { "name": "Expected # of Auto<br> cycles per match",
      "code": "autCycles",
      "type": "number",
      "required": "true"
    },
    { "name": "Auto scoring",
      "code": "aut",
      "type": "radio",
      "choices": {
        "a": "Amp<br>",
        "s": "Speaker<br>",
        "b": "Both"
      },
      "required": "true"
    },
    { "name": "Expected # of Teleop<br> cycles per match",
      "code": "teleopCycles",
      "type": "number",
      "required": "true"
    },
    { "name": "Telop scoring",
      "code": "teleopScore",
      "type": "radio",
      "choices": {
        "a": "Amp<br>",
        "s": "Speaker<br>",
        "b": "Both"
      },
      "required": "true"
    },
    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250,
      "required": "true"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  { "name": "Comments new page",
      "code": "co2",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
