Game.Run = function (game) {

    "use strict";

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    this.trial = 0
    this.problem = [0,0,0]
    this.buttonPressed = 'none'
    this.numGraded = 0
    this.points = 0
    this.streak = 0
    this.reps = 0
    this.usedLocs = []
    this.threeTries = false
    this.nextTrialTime = 0

};

Game.Run.prototype = {

  init: function(week, problem_set) {
    this.week = week
    this.problem_set = problem_set
  },

  create: function() {
    this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);



    problems = problemGen(this.week, this.problem_set)
    reProblems = problemGen(this.week, this.problem_set) //repeat problem set in SPT
    this.op1s = problems[1].concat(reProblems[1])
    this.op2s = problems[2].concat(reProblems[2])
    this.problem_ids = problems[3].concat(reProblems[3])

    //task info
    this.task = 'VS_verification'
    task_type = 'VS'
    //initializing subject for this game

    //this.results = set_up_subject(this.task)
    //user = this.results[0]
    //session = this.results[1]
    //play = this.results[2]
    //this.subject = new Subject(user, this.task, task_type, this.problem_set, session, play)

    equivalenceGen(true)
    this.equivalence = equivalence

    this.game.world.setBounds(0, 0, 600, 800)
    //background = this.game.add.sprite(0,0,'chalkboard')
    //background.width = this.game.width
    //background.height = this.game.height

    d = new Date()
    this.startTime = d.getTime()

    //this.makeButtons()

    this.nextTrial()

  },

  makeButtons: function () {
    d = new Date()
    this.start_time = d.getTime()

    this.equal = this.game.add.button(540, 540, 'equalB')
    this.equal.scale.x = 0.3
    this.equal.scale.y = 0.3
    this.equal.onInputDown.add(function() {
      this.buttonPressed = 'equal'
      newd = new Date()
      this.RT = newd.getTime() - this.start_time
      //check to see if they are correct
      this.grade(this.start_time)
    }, this)

    this.unequal = this.game.add.button(315, 540, 'unequalB')
    this.unequal.scale.x = .3
    this.unequal.scale.y = .3
    this.unequal.onInputDown.add(function() {
      this.buttonPressed = 'unequal'
      newd = new Date()
      this.RT = newd.getTime() - this.start_time
      //check to see if they are correct
      this.grade(this.start_time)
    }, this)
  },

  nextTrial: function () {

    // var d = new Date()
    // this.start_time = d.getTime()
    //

    if (this.op1s[this.trial] <= 9) {
        op1 = '  ' + this.op1s[this.trial];
    } else { op1 = this.op1s[this.trial];}

    if (this.op2s[this.trial] <= 9) {
        op2 = '  ' + this.op2s[this.trial];
    } else { op2 = this.op2s[this.trial];}

    this.problem[0] = +op1;
    this.problem[1] = +op2;
    this.problem[2] = +op1 + +op2;

    console.log('op 1:')
    console.log(op1)
    console.log('op 2:')
    console.log(op2)
    //
    // this.trial++
    // this.progress = this.game.add.text(860, 560, this.trial + ' out of ' + this.op1s.length, {font:'30px Arial', fill:'#FFFFFF', align:'center'})
    // this.progress.anchor.x = 0.5
    //
    // this.pointDisplay = this.game.add.text(85, 560, 'Coins: ' + this.points, {font:'30px Arial', fill:'#FFFFFF', align:'center'})
    // this.pointDisplay.anchor.x = 0.5
    //
    this.makeProb()
    // this.equal.visible = true
    // this.unequal.visible = true


  },

  makeProb: function() {
    trialNum = this.trial-1
    if (this.equivalence[trialNum] == 1) {
      this.equalVal = true
    } else {
      this.equalVal = false
    }

    // this.presentedNum = unequalGen(this.equalVal, this.problem[2], this.problem[0], this.problem[1])
    //
    // this.probText = this.game.add.group()
    // this.game.add.text(376.5,this.game.height/2-75,'+',{font:'80px Arial', fill:'#FFFFFF', align:'center'}, this.probText)
    // this.game.add.text(790,this.game.height/2-75,'=',{font:'80px Arial', fill:'#FFFFFF', align:'center'}, this.probText)
    // this.game.add.text(850,this.game.height/2-75,this.presentedNum,{font:'80px Arial', fill:'#FFFFFF', align:'center'}, this.probText)

    this.circle_group = this.game.add.group()

    this.op1_circs = this.circleGen(this.problem[0],1)
    this.op2_circs = this.circleGen(this.problem[1],2)

    this.op1_box = this.boxGen(1)
    //this.op2_box = this.boxGen(2)

    // this.answerText = [this.problem[0],' + ',this.problem[1], ' = ',this.presentedNum]
    // this.answerText = this.answerText.join('')

    // if (this.equalVal) {
    //   numFeedbackText = this.answerText
    // } else {
    //   numFeedbackText = [this.problem[0],' + ',this.problem[1], ' ≠ ',this.presentedNum]
    //   numFeedbackText = numFeedbackText.join('')
    // }
    // this.numFeedback = this.game.add.text(this.game.width/2, this.game.height/2-100, numFeedbackText, {font:'80px Arial', fill:'#FFFFFF', align:'center'})
    // this.numFeedback.anchor.x = 0.5
    // this.numFeedback.visible = false

  },

  boxGen: function(op) {
    graphics = this.game.add.graphics(0,0)
    if (op == 1) {
      x = 460
    } else if (op == 3) {
      x = 300
      graphics.drawRect(x, 50, 340, 10);
    }else {
      x = 530
    }
    graphics.lineStyle(6, 0xffffff, 1);
    graphics.drawRect(x, 50, 3, 500);
    this.circle_group.add(graphics)



    return graphics
  },

  circleGen: function(numCircs,op) {
    //numCircs = 19
    // if ((this.reps == 0 && typeof(this.answer) == 'undefined') || (this.reps == 1 && this.answer == 'incorrect') || this.answer == 'correct') {
      this.circVals = []

      if (op == 1) {
        graphics = this.game.add.graphics(80,50)
        //color = 0xff6262
      } else {
        graphics = this.game.add.graphics(550,50)
        //color = 0x65c5f0
      }
      color = 0xffffff

      y = 50
      coords = []
      for (j = 0; j < 5; j++) {
        x = 50
        for (i = 0; i < 4; i++) {
          x = x + 50 + 30
          coords.push([x,y])
        }
        y = y + 50 + 50
      }

      this.usedLocs = []
      for (i = 0; i < numCircs; i++) {
        rProb = this.getRandom(0,1)
        if (rProb <= 0.6) {
          r = this.getRandom(20,30)
        } else if (rProb <= 0.85) {
          r = this.getRandom(31,40)
        } else {
          r = this.getRandom(61,85)
        }
        loc = Math.floor(this.getRandom(0,coords.length))
        for (c = 0; c < 1000; c++) {
          if (this.usedLocs.indexOf(loc) >= 0) {
            loc = Math.floor(this.getRandom(0,coords.length))
          }
        }
        if (r <= 20) { //slightly increase y offset for all
          yOffset = this.getRandom(0,35)
          xOffset = this.getRandom(0,35)
        } if (r <= 30) {
          yOffset = this.getRandom(0,25)
          xOffset = this.getRandom(0,25)
        } else if (r <= 60) {
          yOffset = this.getRandom(0,10)
          xOffset = this.getRandom(0,10)
        } else if (r <= 80) {
          yOffset = this.getRandom(0,1)
          xOffset = this.getRandom(0,1)
        } else if (r <= 90) {
          yOffset = 0
          xOffset = 0
        } else {
          offsetAmount = 0
          yOffset = 0
          xOffset = 0
        }
        offsetDirection = this.getRandom(0,1)
        if (offsetDirection >= 0.5) {
          xOffset = -xOffset
        } else {
          yOffset = -yOffset
        }
        //r = 10
        //r = 90 //80
        //xOffset = 0
        //yOffset = 0

        graphics.lineStyle(0)
        graphics.beginFill(color, 1)
        graphics.drawCircle(coords[loc][0]-100+xOffset,coords[loc][1]+yOffset,r)
        graphics.endFill()

        this.circle_group.add(graphics)

        this.usedLocs.push(loc)

        this.circVals.push([coords[loc][0]-100+xOffset,coords[loc][1]+yOffset,r])
        }
    // } else {
    //   if (op == 1) {
    //     this.graphics = this.game.add.graphics(50,20)
    //     this.circVals = this.op1_circs
    //     color = 0xff6262
    //   } else {
    //     this.graphics = this.game.add.graphics(440,20)
    //     this.circVals = this.op2_circs
    //     color = 0x65c5f0
    //   }
    //   for (i=0; i < numCircs; i++) {
    //     this.graphics.lineStyle(0)
    //     this.graphics.beginFill(color, 1)
    //     this.graphics.drawCircle(this.circVals[i][0],this.circVals[i][1],this.circVals[i][2])
    //     this.graphics.endFill()
    //   }
    // }
    return this.circVals

  },

  getRandom: function(min, max) {
    return Math.random() * (max - min) + min;
  },

  grade: function(time_stamp) {
    this.numGraded += 1
    if (this.buttonPressed == 'equal' && this.equivalence[this.trial-1] == 1) { //it is equal and they are correct
      this.answer = 'correct'
    } else if (this.buttonPressed == 'equal' && this.equivalence[this.trial-1] == 2) { //it is equal and they are incorrect
      this.answer = 'incorrect'
    } else if (this.buttonPressed == 'unequal') {
      if (this.equivalence[this.trial-1] == 2) { //it is unequal and they are correct
        this.answer = 'correct'
      } else  { //it is unequal and they are incorrect
        this.answer = 'incorrect'
      }
    }


    if (this.trial-1 >= 24) {
      if (this.presentedNum == this.problem[0] + this.problem[1]) {
        if (this.buttonPressed == 'equal') {
          this.answer = 'correct'
        } else {
          this.answer = 'incorrect'
        }
      } else {
        if (this.buttonPressed == 'equal') {
          this.answer = 'incorrect'
        } else {
          this.answer = 'correct'
        }
      }
    }

    if (this.answer == 'correct') {
      this.points+= 1
      if (this.reps == 0) {
        this.streak += 1
      }
      this.reps = 0
    } else if (this.answer = 'incorrect') {
      this.streak = 0
      this.reps += 1
      if (this.points == 0) {
        this.points = 0
      } else {
        this.points -= 1
      }
    }

    if (this.streak == 3 || this.streak == 7 || this.streak == 15 || this.streak == 24) {
      this.points += 1
    }

    this.onSubmit()

    //this.save()


  },

  save: function() {
    if (this.buttonPressed == 'equal') {
      inputData('answer', 0)
    } else {
      inputData('answer', 1)
    }
    inputData('problem', [this.problem[0],' + ',this.problem[1],' = ',this.presentedNum].join(""))
    inputData('RT', this.RT/1000)
    inputData('n1', this.op1s[this.trial-1])
    inputData('n2', this.op2s[this.trial-1])
    inputData('points', this.points)
    inputData('problem_id', this.problem_ids[this.trial-1])
    inputData('solution', this.op1s[this.trial-1] + this.op2s[this.trial-1])

    if (this.answer == 'correct') {
      inputData('ACC', 1)
    } else {
      inputData('ACC',0)
    }

    if (this.trial >= this.op1s.length && this.answer == 'correct') {
      inputData('finished', 1)
    } else {
      inputData('finished', 0)
    }

    sendData(this.numGraded)

  },

  onSubmit: function () {
      this.endTrial();
  },

  endTrial: function () {

    // this.graphics.lineStyle(0)
    // this.graphics.beginFill(0x000000, 1)
    // this.graphics.drawRect(-600, 0, 1200, 500);
    // this.graphics.endFill()

    this.circle_group.destroy()
    this.probText.destroy()

    if (this.streak == 3) {
      corrFeedback = '3 in a row! Extra coin!'
      disp_col = '#3CF948'
    } else if (this.streak == 7) {
      corrFeedback = '7 in a row! Extra coin!'
      disp_col = '#3CF948'
    } else if (this.streak == 15) {
      corrFeedback = '15 in a row! Extra coin!'
      disp_col = '#3CF948'
    } else if (this.streak == 24) {
      corrFeedback = 'Perfect Score! Extra coin!'
      disp_col = '#3CF948'
    } else {
      correct_feedback = ['Way to go!','Awesome!','You Rock!','Correct!','Fantastic!','Nice!']
      feedbackIndex = Math.floor(Math.random() * correct_feedback.length) + 0
      corrFeedback = correct_feedback[feedbackIndex]
      disp_col = '#FFFFFF'
    }

    this.equal.visible = false
    this.unequal.visible = false
    if (this.trial >= this.op1s.length && this.answer == "correct") {
      this.feedback = this.game.add.text(this.game.width/2, 50, corrFeedback, {font:'80px Arial', fill:disp_col, align:'center'})
      this.feedback.anchor.x = 0.5
      this.numFeedback.visible = true
      this.game.world.remove(this.progress)
      this.game.world.remove(this.pointDisplay)
      setTimeout(function() {
        that.game.world.remove(that.feedback)
        that.numFeedback.visible = false
        that.quitGame()
      }, 1000)
    } else {
      that = this
      if (this.answer == "incorrect") {
        this.feedback = this.game.add.text(this.game.width/2, 50, "Sorry, that's incorrect :(", {font:'80px Arial', fill:disp_col, align:'center'})
        this.feedback.anchor.x = 0.5
        this.numFeedback.visible = true
        this.game.world.remove(this.progress)
        this.game.world.remove(this.pointDisplay)

        setTimeout(function() {
          if (that.reps == 1) {
            that.threeTries = true
            that.game.world.remove(that.feedback)
            that.numFeedback.visible = false
            that.op1s.push(that.op1s[that.trial-1])
            that.op2s.push(that.op2s[that.trial-1])
            that.nextTrial()
          } else {
            that.game.world.remove(that.feedback)
            that.numFeedback.visible = false
            that.numFeedback.visible = false
            that.op1s.push(that.op1s[that.trial-1])
            that.op2s.push(that.op2s[that.trial-1])
            that.nextTrial()
            // that.makeProb()
            // that.makeButtons()
            // that.progress = that.game.add.text(860, 560, that.trial + ' out of ' + that.op1s.length, {font:'30px Arial', fill:'#FFFFFF', align:'center'})
            // that.progress.anchor.x = 0.5
            //
            // that.pointDisplay = that.game.add.text(85, 560, 'Coins: ' + that.points, {font:'30px Arial', fill:'#FFFFFF', align:'center'})
            // that.pointDisplay.anchor.x = 0.5
          }
          if (that.equalVal == true) {
            that.equivalence.push(1)
          } else {
            that.equivalence.push(0)
          }

        }, 1000)

      } else {
        this.feedback = this.game.add.text(this.game.width/2, 50, corrFeedback, {font:'80px Arial', fill:disp_col, align:'center'})
        this.feedback.anchor.x = 0.5
        this.game.world.bringToTop(this.numFeedback)
        this.numFeedback.visible = true
        this.game.world.remove(this.progress)
        this.game.world.remove(this.pointDisplay)
        setTimeout(function() {
          that.game.world.remove(that.feedback)
          that.numFeedback.visible = false
          that.nextTrial()
        }, 1000)
      }
    }
  },

  update: function() {

    if (this.leftKey.isDown)
    {
      if (this.game.time.now > this.nextTrialTime) {
          this.circle_group.destroy()
          this.nextTrial()
          this.nextTrialTime = this.game.time.now + 250
        this.trial++
      }
    }

    if (this.spaceKey.isDown)
    {
      if (this.game.time.now > this.nextTrialTime) {
        this.circle_group.destroy()
        this.nextTrial()
        this.nextTrialTime = this.game.time.now + 250
      }
    }

  },

  quitGame: function () {
    d = new Date()
    endTime = d.getTime()

    this.trial = 0
    this.numGraded = 0

    //this.subject.inputData('endGameStats', [this.startTime, endTime, 'completed'])
    //nextTask(this.results[0], this.task)

      //Let them know it's done...
      this.game.time.events.add(Phaser.Timer.SECOND, function () {
        endText = this.game.add.text(this.game.width/2, 200, 'All done!', {font:'96px Arial', fill:'#FFFFFF', align:'center'});
        endText.anchor.x = 0.5
        finalPoints = this.game.add.text(this.game.width/2, 400, 'You got ' + this.points + ' points', {font:'76px Arial', fill:'#FFFFFF', align:'center'});
        finalPoints.anchor.x = 0.5
        totalPoints = this.points
        this.points = 0
                //  Then let's go back to the main menu.
        //this.game.time.events.add(Phaser.Timer.SECOND * 2, function() {this.state.start('Menu', true, false, this.problem_set);}, this);
      }, this);
  }

};
