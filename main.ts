radio.onReceivedString(function (receivedString) {
    if (receivedString == "Stop") {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
    if (receivedString == "U") {
        DFRobotMaqueenPlus.servoRun(Servos.S3, 10)
    }
    if (receivedString == "D") {
        DFRobotMaqueenPlus.servoRun(Servos.S3, 180)
    }
    if (receivedString == "Both") {
        DFRobotMaqueenPlus.servoRun(Servos.S3, 90)
        basic.pause(100)
        DFRobotMaqueenPlus.servoRun(Servos.S3, 7)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "A1") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, Math.map(value, 550, 1024, 10, 200))
    } else if (name == "A2") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, Math.map(value, 1, 450, 200, 10))
    } else if (name == "A3") {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 60)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, Math.map(value, 1, 450, 120, 40))
    } else if (name == "A4") {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, Math.map(value, 550, 1024, 40, 120))
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 60)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
radio.setGroup(201)
