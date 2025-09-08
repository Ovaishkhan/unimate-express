import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// POST /chat endpoint
app.post("/chat", (req, res) => {
  const { question } = req.body;
  // Dummy response for now
  if(!question || question.trim() === "") {
    return res.status(400).json({ answer: "Question cannot be empty." });
  }

  const q = question.trim().toLowerCase();

  console.log(q);
  

  if(q === "what is the fee for btech cse?") {
    return res.json({ answer: "The fee for B.Tech CSE is $10,000 per year." });
  }

  if(q === "tell me eligibility for btech cse") {
    return res.json({ answer: "The eligibility for B.Tech CSE is a minimum of 75% in 10+2 with Mathematics and Physics." });
  }

  if(q === "how many seats are there in cse?") {
    return res.json({ answer: "There are 120 seats available in B.Tech CSE." });
  }

  if(q === "will we get scholarship during btech cse?") {
    return res.json({ answer: "Yes, scholarships are available based on merit and need." });
  }

  const answer = `Sorry, I can't answer: ${question}. Please contact the Admission Cell for more details.`;
  res.json({ answer });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello, UniMate Express!" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
