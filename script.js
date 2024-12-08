function calculateScore() {
    // Correct answers
    const answers = {
      q1: "b",
      q2: "b",
      q3: "a",
      q4: "b",
      q5: "b",
    };
  
    let score = 0;
  
    // Loop through answers and compare with selected options
    for (const [question, answer] of Object.entries(answers)) {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === answer) {
        score++;
      }
    }
  
    // Display result
    const result = document.getElementById("result");
    result.textContent = `You scored ${score} out of 5!`;
  }
  