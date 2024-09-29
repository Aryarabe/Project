import React, { useState, useEffect } from "react";

function Quiz() {
  const [quiz, setQuiz] = useState({ question: "", answer: "" }); // State to hold the quiz data

  useEffect(() => {
    // Fetch data from Flask backend
    fetch("/quiz")
      .then(res => res.json()) // Parse the JSON response
      .then(data => { 
        setQuiz(data.quiz); // Set the fetched quiz data
        console.log(data.quiz); // Log it to see the response
      })
      .catch(err => console.error("Error fetching quiz:", err)); // Error handling
  }, []);

//   const boxStyle = {
//     border: "2px solid blue",
//     borderRadius: "5px",
//     padding: "20px",
//     width: "300px",
//     margin: "20px auto",
//     textAlign: "center",
//     backgroundColor: "#f0f8ff", // Light background color
//   };

  return (
    <div >
      {/* Render loading text while waiting for data */}
      {quiz === "" ? (
        <p>Loading.....</p>
      ) : (
        <>
          <p>{quiz}</p>
          {/* <p><strong>Answer:</strong> {quiz_data.answer}</p> */}
        </>
      )}
    </div>
  );
}

export default Quiz;
