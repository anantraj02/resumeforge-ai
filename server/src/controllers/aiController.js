import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateResume = async (req, res) => {
  try {
    const { jobRole, skills } = req.body;

   const prompt = `
Generate professional resume content.

Job Role: ${jobRole}
Skills: ${skills}

Also analyze the generated resume and provide
3 ATS improvement suggestions.

Return ONLY valid JSON:

{
  "summary":"",
  "experience":"",
  "projects":"",
  "atsSuggestions":[]
}
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const content = completion.choices[0].message.content;

    const cleanedContent = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const resumeData = JSON.parse(cleanedContent);
    const skillList = skills
  .split(",")
  .map(skill => skill.trim().toLowerCase());

const resumeText = `
${resumeData.summary}
${resumeData.experience}
${resumeData.projects}
`.toLowerCase();

let matchedSkills = 0;

skillList.forEach((skill) => {
  if (resumeText.includes(skill)) {
    matchedSkills++;
  }
});

const atsScore = Math.round(
  (matchedSkills / skillList.length) * 100
);

resumeData.atsScore = atsScore;
    res.status(200).json(resumeData);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "AI Generation Failed",
    });
  }
};