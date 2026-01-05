function calculateMBTIFromAnswers(answers) {
  let scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  answers.forEach(value => {
    ["E","I","S","N","T","F","J","P"].forEach(letter => {
      if (value.includes(letter + "2")) scores[letter] += 2;
      if (value.includes(letter + "1")) scores[letter] += 1;
    });
  });

  return (
    (scores.E >= scores.I ? "E" : "I") +
    (scores.S >= scores.N ? "S" : "N") +
    (scores.T >= scores.F ? "T" : "F") +
    (scores.J >= scores.P ? "J" : "P")
  );
}
