function shuffleArray(array) {
  let arrayCopy = array.slice(0);

  for (var i = arrayCopy.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = temp;
  }
  return arrayCopy;
}

function createQuestions(countries) {
  let countryQuestion = [];
  let flagQuestion = [];

  countries.forEach((country, i) => {
    let answers = [];

    for (let i = 0; i < 3; i++) {
      let randomCountryName =
        countries[Math.floor(Math.random() * countries.length)].name;

      if (
        randomCountryName !== country.name &&
        !answers.includes(randomCountryName)
      ) {
        answers.push(randomCountryName);
      } else {
        --i;
      }
    }

    answers.push(country.name);

    let countryAnswers = shuffleArray(answers);
    let flagAnswers = shuffleArray(answers);

    let countryObj = {
      id: i,
      question: country.capital ? `${country.capital} is the capital of` : 'Which country does not have a capital?',
      correctAnswer: country.name,
      answers: countryAnswers,
    };

    let flagObj = {
      id: i,
      flag: country.flag,
      question: "Which country does this flag belong to?",
      correctAnswer: country.name,
      answers: flagAnswers,
    };

    countryQuestion.push(countryObj);
    flagQuestion.push(flagObj);
  });

  return shuffleArray([...countryQuestion, ...flagQuestion]);
}

export function fetchData(setQuestion, setLoading, setError) {
  const url = "https://restcountries.eu/rest/v2/all?fields=name;capital;flag";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setQuestion(createQuestions(data));
      setLoading(false);
    })
    .catch(() => {
      setError(true);
    });
}