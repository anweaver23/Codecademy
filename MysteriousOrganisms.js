// Returns a random DNA base
const randBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(randBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimemNum: num,
    dna: arr,
    complementStrand() {
      return this.dna.map((base) => {
        switch (base) {
          case "A":
            return "T";
          case "T":
            return "A";
          case "C":
            return "G";
          case "G":
            return "C";
          default:
            return "";
        }
      });
    },
    mutate() {
      //gen new random base
      let newBase = randBase();
      //find first base in dna that !== new base
      let oldBase = this.dna.find((base) => base !== newBase);
      this.dna = this.dna.map((base) => (base === oldBase ? newBase : base));
      return this.dna;
    },
    compareDna(compareSpecimen) {
      let matchingIndexes = [];
      for (let i = 0; i < 15; i++) {
        //starting from index 0 compare the values at each index of both dna and push if matching
        if (this.dna[i] === compareSpecimen.dna[i]) {
          matchingIndexes.push(i);
        }
      }
      return matchingIndexes.length / 15;
    },
    willLikelySurvive() {
      return (
        this.dna.filter((base) => base === "C" || base === "G").length / 15 >
        0.6
      );
    },
  };
};

const createPrimSpecimens = (desiredNum) => {
  let primeSpecimens = [];
  let testSpecimen = {};
  for (i = 0; i <= desiredNum; i = primeSpecimens.length) {
    //each iteration set i to length of primeSpecimens to ensure unique specimen # and to keep iterating until desired number of specimens have been found
    testSpecimen = pAequorFactory(i, mockUpStrand());
    if (testSpecimen.willLikelySurvive()) {
      primeSpecimens.push(testSpecimen);
    }
  }
  return primeSpecimens;
};

const primeSpecimens = createPrimSpecimens(30);

primeSpecimens.forEach((spec) =>
  console.log(
    `Specimen #: ${
      spec.specimemNum
    }\nSurvival Likely: ${spec.willLikelySurvive()}\n`
  )
);
