(function (fluid) {
    fluid.defaults("speakText.primarySchema", {
        gradeNames: ["fluid.uiOptions.schemas", "autoInit"],
        schema: {
            "addOrRemovePreference": {
                "type": "boolean",
                "default": false
            },
            "screenReaderTTSEnabled": {
                "type": "boolean",
                "default": false
            },
            "screenReaderSwitch": {
                "type": "boolean",
                "default": true
            },
            "speechRate": {
                "type": "number",
                "default": 130,
                "minimum": 0,
                "divisibleBy": 10
            },
            "auditoryOutLanguage": {
                "type": "string",
                "default": "English",
                "enum": ["English", "Deutsch", "Français", "Русский"]
            },
            "punctuationVerbosity": {
                "type": "string",
                "default": "none",
                "enum": ["none", "some", "most", "all"]
            },
            "announceCapitals": {
                "type": "boolean",
                "default": false
            },
            "speakTutorialMessages": {
                "type": "boolean",
                "default": false
            },
            "keyEcho": {
                "type": "boolean",
                "default": false
            },
            "wordEcho": {
                "type": "boolean",
                "default": false
            },
            "screenReaderBrailleOutput": {
                "type": "boolean",
                "default": false
            }
        }
    });

    fluid.defaults("speakText.auxSchema", {
        gradeNames: ["fluid.uiOptions.auxSchema", "autoInit"],
        auxiliarySchema: {
            "namespace": "gpii.adjusters.speakText",
            "templatePrefix": "../../src/shared/adjusters/html/",
            "messagePrefix": "../../src/shared/adjusters/messages/",
            "template": "%prefix/newestSpeakText.html",

            "screenReaderTTSEnabled": {
                "type": "screenReaderTTSEnabled",
                "panel": {
                    "type": "speakText.panels.screenReaderTTSEnabled",
                    "template": "%prefix/speakTextTemplate-screenReaderTTSEnabled.html",
                    "container": ".speakText-screenReaderTTSEnabled",
                    "message": "%prefix/speakText.json"
                }
            },

            "addOrRemovePreference": {
                "type": "addOrRemovePreference",
                "panel": {
                    "type": "speakText.panels.addOrRemovePreference",
                    "template": "%prefix/speakTextTemplate-addOrRemovePreference.html",
                    "container": ".speakText-addOrRemovePreference",
                    "message": "%prefix/speakText.json"
                }
            },

            "screenReaderSwitch": {
                "type": "screenReaderSwitch",
                "panel": {
                    "type": "speakText.panels.screenReaderSwitch",
                    "template": "%prefix/speakTextTemplate-screenReaderSwitch.html",
                    "container": ".speakText-screenReaderSwitch",
                    "message": "%prefix/speakText.json"
                }
            },

            "speechRate": {
                "type": "speechRate",
                "panel": {
                    "type": "speakText.panels.speechRate",
                    "template": "%prefix/speakTextTemplate-speechRate.html",
                    "container": ".speakText-speechRate",
                    "message": "%prefix/speakText.json"
                }
            },

            "auditoryOutLanguage": {
                "type": "auditoryOutLanguage",
                "panel": {
                    "type": "speakText.panels.auditoryOutLanguage",
                    "template": "%prefix/speakTextTemplate-auditoryOutLanguage.html",
                    "container": ".speakText-auditoryOutLanguage",
                    "message": "%prefix/speakText.json"
                }
            },

            "punctuationVerbosity": {
                "type": "punctuationVerbosity",
                "panel": {
                    "type": "speakText.panels.punctuationVerbosity",
                    "classnameMap": {"punctuationVerbosity": "@punctuationVerbosity.classes"},
                    "template": "%prefix/speakTextTemplate-punctuationVerbosity.html",
                    "container": ".speakText-punctuationVerbosity",
                    "message": "%prefix/speakText.json"
                },
                "classes": {
                    "none": "radioButton-left",
                    "some": "radioButton-middle radioButton-second",
                    "most": "radioButton-middle radioButton-third",
                    "all": "radioButton-right"
                }
            },

            "announceCapitals": {
                "type": "announceCapitals",
                "panel": {
                    "type": "speakText.panels.announceCapitals",
                    "template": "%prefix/speakTextTemplate-announceCapitals.html",
                    "container": ".speakText-announceCapitals",
                    "message": "%prefix/speakText.json"
                }
            },

            "speakTutorialMessages": {
                "type": "speakTutorialMessages",
                "panel": {
                    "type": "speakText.panels.speakTutorialMessages",
                    "template": "%prefix/speakTextTemplate-speakTutorialMessages.html",
                    "container": ".speakText-speakTutorialMessages",
                    "message": "%prefix/speakText.json"
                }
            },

            "keyEcho": {
                "type": "keyEcho",
                "panel": {
                    "type": "speakText.panels.keyEcho",
                    "template": "%prefix/speakTextTemplate-keyEcho.html",
                    "container": ".speakText-keyEcho",
                    "message": "%prefix/speakText.json"
                }
            },

            "wordEcho": {
                "type": "wordEcho",
                "panel": {
                    "type": "speakText.panels.wordEcho",
                    "template": "%prefix/speakTextTemplate-wordEcho.html",
                    "container": ".speakText-wordEcho",
                    "message": "%prefix/speakText.json"
                }
            },

            "screenReaderBrailleOutput": {
                "type": "screenReaderBrailleOutput",
                "panel": {
                    "type": "speakText.panels.screenReaderBrailleOutput",
                    "template": "%prefix/speakTextTemplate-screenReaderBrailleOutput.html",
                    "container": ".speakText-screenReaderBrailleOutput",
                    "message": "%prefix/speakText.json"
                }
            }
        }
    });

    fluid.defaults("speakText.panel", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        components: {
            screenReaderTTSEnabled: {
                type: "speakText.panels.screenReaderTTSEnabled",
                container: ".speakText-screenReaderTTSEnabled-element"
            },
            addOrRemovePreference: {
                type: "speakText.panels.addOrRemovePreference",
                container: ".speakText-addOrRemovePreference-element"
            },
            screenReaderSwitch: {
                type: "speakText.panels.screenReaderSwitch",
                container: ".speakText-screenReaderSwitch-element"
            },
            speechRate: {
                type: "speakText.panels.speechRate",
                container: ".speakText-speechRate-element"
            },
            auditoryOutLanguage: {
                type: "speakText.panels.auditoryOutLanguage",
                container: ".speakText-auditoryOutLanguage-element"
            },
            punctuationVerbosity: {
                type: "speakText.panels.punctuationVerbosity",
                container: ".speakText-punctuationVerbosity-element"
            },
            announceCapitals: {
                type: "speakText.panels.announceCapitals",
                container: ".speakText-announceCapitals-element"
            },
            speakTutorialMessages: {
                type: "speakText.panels.speakTutorialMessages",
                container: ".speakText-speakTutorialMessages-element"
            },
            wordEcho: {
                type: "speakText.panels.wordEcho",
                container: ".speakText-wordEcho-element"
            },
            keyEcho: {
                type: "speakText.panels.keyEcho",
                container: ".speakText-keyEcho-element"
            },
            screenReaderBrailleOutput: {
                type: "speakText.panels.screenReaderBrailleOutput",
                container: ".speakText-screenReaderBrailleOutput-element"
            }
        }
    });

})(fluid);
