let cavaliers = {
  beautifullyDressed: true,
};
let ladys = {
  beautifullyDressed: true,
};

class Folk {
  constructor(options) {
    this.armenians = options.armenians;
    this.greeks = options.greeks;
    this.jews = options.jews;
    this.tyroleans = options.tyroleans;
    this.officers = options.officers;
    this.soldiers = options.soldiers;
    this.pastors = options.pastors;
    this.harlequins = options.harlequins;
  }
  areCrowding = () => {
    console.log("to take a closer look");
  };
}

function roseTerribleHullabaloo() {
  console.log(true);
}

let inPartOfThe = {
  square: roseTerribleHullabaloo(),
};

class Context {
  constructor(options) {
    this.pattern = options.pattern;

    this.el.onclick = this.crowding.bind(this);
    this.el.onclick = this.accompanied.bind(this);
    this.el.onclick = this.walk.bind(this);
    this.el.onclick = this.intervene.bind(this);

    this.folk = new Folk(options);
    this.greatMogul = new GreatMogul(options);
    this.turkishSultan = new TurkishSultan(options);
    this.religiousProcession = new ReligiousProcession(options);
  }
  crowding() {
    this.folk.areCrowding();
  }
  accompanied() {
    this.greatMogul.accompaniedBy();
  }
  walk() {
    this.turkishSultan.walkAroundTheSquare();
  }
  intervene() {
    this.religiousProcession.intervened();
  }
}

class GreatMogul {
  constructor(options) {
    this.prince = options.prince;
    this.slave = options.slave;
    this.prince.amount = 93;
    this.slave.amount = 700;
  }
  accompaniedBy = () => {
    console.log(true);
  };
  cleanedOut = (staindDress) => {
    console.log(true);
  };
}

let andItHadToHappen = {
  galaProcession: {
    cameAcross: true,
    workshopOfFishermen: 500,
  },
};
class TurkishSultan {
  constructor(options) {
    this.janissaries = options.janissaries;
    this.janissaries.amount = 3000;
  }
  walkAroundTheSquare = () => {
    console.log(true);
  };
}

class ReligiousProcession {
  constructor(options) {
    this.hymn = options.hymn || solemnHymnToTheSun;
    this.sing = options.sing;
    this.music = options.music;
    this.ringing = options.ringing;
  }
  intervened = () => {
    console.log(true);
  };
}

let situation = {
  noise: true,
  din: true,
  crowding: true,
  plaintiveCries: true,
  condition: "dangerous",
  mess: "has begun",
  fun: "gone",
  dump: {
    condition: "dangerous",
  },
};

beatOffTheHeadOfABrahmin = () => {
  console.log(true);
};
almostGotKnockedDown = () => {
  console.log(true);
};

let oneOfFisherman = {
  inadvertently: beatOffTheHeadOfABrahmin(),
};
new GreatMogul(options).almostGotKnockedDown(byHarlequin);

situation.dump.condition = "more and more dangerous";
situation.condition = "almost comes to a fight";

climbTheObelisk = () => {
  console.log(true);
};

let manInBathrobe = {
  whoGreetedTheNutcrackerAtTheGate: climbTheObelisk(),
  shoutText: " ",
};
const hitBell = (h) => {
  if (h !== 3) {
    h++;
  }
};
const count = (n) => {
  while (n !== 3) {
    hitBell(h);
    manInBathrobe.shoutText += "Кондитер! ";
    n++;
  }
};

situation.condition = "calm";

howCould = () => {
  console.log(true);
};

let every = {
  rushedToEscape: howCould(),
  brahmin: {},
};
let staindDress = true;
new GreatMogul(options).cleanedOut(staindDress);

putHisHeadOn = () => {
  console.log(true);
};

brahmin.putHisHeadOn();

situation.mess = "subsided";
situation.fun = "resumed";
