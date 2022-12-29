// Тут были прекрасно одетые кавалеры и дамы,
let cavaliers;
let ladys;
cavaliers.beautifullyDressed = true;
ladys.beautifullyDressed = true;

//вызывать все функции в классе Ситуация с помощью привязки bind
// и взаимоействию между сущностями, так оценят выше

// class Situation {
//   constructor(options) {
//     this.pattern = options.pattern;

//     this.el.onclick = this.crowding.bind(this);
//     this.el.onclick = this.accompanied.bind(this);

//     this.folk = new Folk(options);
//     this.greatMogul = new GreatMogul(options);
//     this.turkishSultan = new TurkishSultan(options);
//     this.religiousProcession = new ReligiousProcession(options);
//   }
//   crowding() {
//     this.folk.areCrowding();
//   }
//   accompanied() {
//     this.greatMogul.accompaniedBy();
//   }
// }

class Folk {
  // армяне, греки, евреи, тирольцы,
  // офицеры, солдаты, пасторы, арлекины
  // — словом, всевозможный народ,
  // какой только существует на свете.
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
    console.log("folk are crowding");
    // to take a closer look
  };
}

// В одной части площади поднялся
let inPartOfThe;
// страшный гвалт:
roseTerribleHullabaloo = () => {
  console.log("terrible hullabaloo");
};
inPartOfThe.square.roseTerribleHullabaloo();
// толпы людей собрались, чтобы поближе посмотреть,
new Folk(options).areCrowding();

// как несли в паланкине великого Могола,
// how they carried the great Mogul in a palanquin
class GreatMogul {
  constructor(options) {
    this.prince = options.prince;
    this.slave = options.slave;

    this.prince.amount = 93;
    this.slave.amount = 700;
  }
  accompaniedBy = (opt, opt1) => {
    console.log("93 князя и 700 невольников");
  };
}
// сопровождаемого девяносто тремя
// подвластными ему князьями и семьюстами невольниками,
new GreatMogul(options).accompaniedBy(this.prince.amount, this.slave.amount);

// и надо же было случиться,
andItHadToHappen();

// что навстречу ему попалось
// торжественное шествие цеха рыбаков,
// в количестве пятьсот человек;
let solemnProcession;
solemnProcession.cameAcross = true;
let workshopOfFishermen = 500;

// да, кроме того, турецкий султан вздумал прогуляться по площадке
// Moreover - кроме того
class TurkishSultan {
  constructor(options) {
    this.janissaries = options.janissaries;
    //  с тремя тысячами янычар,
    this.janissaries.amount = 3000;
  }
  walkAroundTheSquare = () => {
    console.log(true);
  };
}
new TurkishSultan(options).walkAroundTheSquare();

//  к тому же туда же вмешалась религиозная процессия,
class ReligiousProcession {
  //   певшая, с музыкой и звоном,
  constructor(options) {
    //  торжественный гимн солнцу.
    this.hymn =
      options.hymn || solemnHymnToTheSun || "торжественный гимн солнцу";
    this.sing = options.sing;
    this.music = options.music;
    this.ringing = options.ringing;
  }
  intervene = () => {
    console.log(true);
  };
}
new ReligiousProcession.intervene();

// Шум, гам и давка поднялись невообразимые!
const noise = true;
const din = true;
const crowding = true;

//  Раздались жалобные крики;
const plaintiveCries = true;

//  один из рыбаков неосторожно отбил голову брамину,

// а великий Могол чуть не был сбит с ног арлекином.

// Свалка принимала все более и более опасный характер,
dump.condition = "more and more dangerous";

// и дело почти уже не доходило до драки,
situation.condition = "almost comes to a fight";
// как вдруг человек в халате, приветствовавший Щелкунчика в воротах,
const whoGreetedTheNutcrackerAtTheGate = true;
let manInBathrobe;
//  быстро влез на обелиск,

// ударил три раза в колокол
const hitCount = 3;
//и громко три раза крикнул:
const shoutCount = 3;
// «Кондитер! Кондитер! Кондитер!»
const shoutText = "Кондитер! ";
shoutText.repeat(shoutCount);

//Мигом все успокоилось;
situation.condition = "calm";

// каждый кинулся спасаться как мог;

//великий Могол вычистил испачканное платье,
// new GreatMogul.cleanedOut(staindDress)
let staindDress = true; //или уже фолс когда он его очистил
//то есть когда началась давка то staindDress = тру,тобишь оно испачкалось

// брамин снова надел свою голову,
// беспорядок утих, и прежнее веселье снова возобновилось.
