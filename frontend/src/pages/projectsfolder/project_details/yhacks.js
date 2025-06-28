import React from "react";
import yhacks from "./../../../assets/yhacks.png"
import "./project.css"

export function YHacks() {
  return (
    <div className="Blog">
      <div className="header-image">
        <img
          src={yhacks}
          alt="Example Produced AI Script"
        />
      </div>
      <div className="gradient__text">
        <h1 className="title_blog">Grasp.ai: A Video and Lesson Plan Generator</h1>
      </div>
      <div className="blog_content">
        <h2 className="subtitle">Motive</h2>
        Teachers invest significant time and effort in crafting lesson plans. The process is demanding and complex, often involving repetitive tasks as they reuse and adapt existing materials. Additionally, many students who lack access to high-quality educational resources struggle to fully understand concepts when relying solely on textbooks. To address these challenges, Grasp.ai is proposed as a comprehensive solution—a versatile app capable of generating lesson plans, video scripts, and complete educational videos.
        <h2 className="subtitle">Overview</h2>
        <p>
            Grasp.ai’s functionality is divided into three key steps. First, the app generates a custom lesson plan based on the user’s input, including the age group and the topic or subject. After the lesson plan is created, the user can modify it as desired before proceeding to the next step. Alternatively, the user can bypass this step by directly inputting their own lesson plan. Next, Grasp.ai generates a video script from the lesson plan, complete with stage directions. The user can again make adjustments to the script before moving to the final step. Lastly, Grasp.ai produces a complete video, including both visuals and audio.
        </p>
        <br />
        <p>
            My role in the team was primarily as the product manager, ensuring compatibility between the different parts of the app and maintaining a cohesive vision. Additionally, I served as a backend developer, where I developed the Flask backend and scripts to interact with the ChatGPT, Whisper, and DALLE APIs.
        </p>
        <h2 className="subtitle">Difficulities</h2>
        <ul className="difficulties-list">
            <li>
                Hallucinations are a common issue with AI systems. During early testing, the system generated a lesson plan that incorrectly attempted to prove that the sum of angles in a triangle is 360°. This is particularly concerning for an educational app designed for children. To address this, we combined the AI component of the app with a research-driven approach. By using web scraping technology through Beautiful Soup, the information provided to the ChatGPT API is derived from the top 100 Google search results on a given topic. The ChatGPT API is then tasked with summarizing this information, tailored to the appropriate age group.          
            </li>
        </ul>
      </div>
    </div>
  );
}

export default YHacks;