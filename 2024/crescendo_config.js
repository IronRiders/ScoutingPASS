var config_data = `
{
  "dataFormat": "tsv",
  "title": "Match Scouting - FRC 4180",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024wagg",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999,
      "required":"true"
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 2 12 14 13 24 36 38 50 26 25 36 37 48 49 60 61 72 11 23 35 47 59 71",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "ass",
      "type": "counter"
    },
    { "name": "Auto Note Position",
      "code": "anp",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "dimensions": "9 5",
      "toggleClick": "true",
      "clickRestriction": "onePerBox",
      "allowableResponses": "2 5 8 11 14 17 20 23 26 32 41",
      "shape": "circle 8 black DarkOrange true"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Amplified Scores",
      "code": "tta",
      "type": "counter"
    },
    { "name": "Passed Note Count",
      "code": "tfc",
      "type": "counter"
    },
    { "name": "Was Passed<br>Game Pieces",
      "code": "wf",
      "type": "bool"
    },
    { "name": "Was Defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Who Defended this bot",
      "code": "who",
      "type": "text",
      "maxSize": 20
    },
    { "name": "Coopertition Bonus",
      "code": "coop",
      "type": "bool"
    },
    { "name": "Melody Bonus",
      "code": "melody",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Climbing Timer",
      "code": "ct",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "o": "Onstage<br>",
        "s": "Onstage (Spotlit)<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Harmony",
      "code": "hmy",
      "type": "bool"
    },
    { "name": "Note in Trap",
      "code": "nit",
      "type": "bool"
    },
    { "name": "Ensemble Bonus",
      "code": "ensemble",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Had a Note Stuck",
      "code": "nst",
      "type": "bool"
    },
    { "name": "Stuggled to Intake<br>or didn't",
      "code": "brk",
      "type": "bool"
    },
    { "name": "Stuggled to Score<br>or didn't",
      "code": "brk",
      "type": "bool"
    },
    { "name": "Broke<br> Something isn't working",
      "code": "brk",
      "type": "bool"
    },
    { "name": "Died/Immobilized<br>(Stoped moving for a while)",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 75
    }
  ]
}`;
