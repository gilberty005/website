import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import './lithum.css';
import lily1 from '../../assets/lily1.png'; 
import lily2 from '../../assets/lily2.png'; 
import lily3 from '../../assets/lily3.png'; 
import milkman1 from '../../assets/milkman1.png'
import milkman2 from '../../assets/milkman2.png'
import milkman3 from '../../assets/milkman3.png'
import lighthouse from '../../assets/lighthouse.png'
import fly from '../../assets/fly.png'


const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={
          <div className='flex justify-center items-center'>
            <img
              src={experience.date} // Using the image URL from experience data
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
        iconStyle={{
            background: experience.iconBg,
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          icon={<img src={experience.icon} alt="Timeline Icon" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%'  // This makes the icon circular
          }} />}
        style={{ marginBottom: "50px" }} // Inline style for spacing
      >
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <ul className='mt-5 list-disc ml-5 space-y-2 right-aligned-list'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
};

export function Lithum() {
  const experiences = [
    {
        date: lily1,
        icon: lighthouse,
        iconBg: "#333",
        company_name: "Chaotic Beginnings",
        title: "The Dinner Party",
        points: ["In the chaotic setting of the dinner party, Lily's perception of Mrs. Ramsay and the other guests deepens. The room's shabbiness and lack of beauty underscore the prevailing isolation among the guests, despite the inherently social nature of a dinner gathering. This irony emphasizes the almost doll-like, formulaic social norms they adhere to.",
        "There is a tension created between personal desires and social obligations where Lily reflects on the expected social obligations of men and women of the time period. Bitterly, Lily ponders a world free from such obligations. Unsatisfied, Lily finds herself struggling to make sense of both her own life and the world around her."]
    },
    {
        date: milkman1,
        icon: fly,
        iconBg: "#333",
        company_name: "Goodbyes",
        title: "Fool's Gold",
        points: ["Milkman begins as someone pulled in conflicting directions. On one side, his father pushes for him to inherit the real estate business. On the other side, his mother pushes for him to go to medical school. In response, however, Milkman rejects both directions, hoping to escape the constraints of his family and town to achieve independence.", 
        "Upon being presented an opportunity to escape — a chance to find gold, Milkman chases. Yet, despite having strong conviction and determination, Milkman still does not have a purpose. He struggles to reconcile the possibility that there may be no gold nor does he have a goal of what he would upon attaining such gold."]
    },
    {
        date: lily2,
        icon: lighthouse,
        iconBg: "#333",
        company_name: "Hello Darkness",
        title: "Death",
        points: ["Following Mrs. Ramsay’s sudden death, the summer house plunges into limbo. There is a silence and emptiness that permeates the home — a death of sorts. The imagery of darkness slowly creeping across the whole house mirrors Lily’s earlier fear of the demise of herself and her work through time.", 
        "As Lily revisits her memories of Mrs. Ramsay, she grapples with the idea of the impermanence of life and the erasure of the legacy of her work. Here it is highlighted that Lily bases her purpose on leaving a legacy — something both unsustainable and dangerous. In the dawning of reality of the impossibility of such a task, Lily begins to question the value of her artistic pursuits."]
    },
    {
        date: milkman2,
        icon: fly,
        iconBg: "#333",
        company_name: "The Transformation",
        title: "Circe",
        points: ["Upon finding no gold, Milkman is sent into inner turmoil as he struggles to find new meaning in his life. Sicken, Milkman finally realizes the consequences of allowing his fulfillment and mission to solely depend on a fool’s hunt. However, this inner turmoil begins to resolve itself as Milkman reflects on his conversation with Circe, someone who bridges the gap between his present and the mysteries of his lineage.", 
        "The name Circe, an allusion to the sorceress from Greek mythology, holds the same transformative powers, guiding Milkman away from his superficial quest of independence and freedom. Rather, the quest becomes a profound exploration of self and heritage, emphasizing how true freedom comes from self-discovery."]
    },
    {
        date: lily3,
        icon: lighthouse,
        iconBg: "#333",
        company_name: "New Beginnings",
        title: "Ten Years Later",
        points: ["In the return of the Ramsays, Lily reflects on a flood of changes and memories. While much of the setting is unchanged, the individuals present are leading to a very different atmosphere. While the long awaited visit to the lighthouse finally comes, it does not carry any climactic resolution. Instead, it serves as a reflective pause, a moment where past and present converge, emphasizing the fading past.", 
        "In Lily’s reflections and the passage of time, Lily is able to view her unfinished painting with a new perspective. She realizes that the journey to find her vision was more important than the finished product or its legacy. Able to finally let go of her tunnel vision on the idea of legacy, Lily is able to contemplate each layer of her painting as a memory, finding fulfillment."]
    },
    {
        date: milkman3,
        icon: fly,
        iconBg: "#333",
        company_name: "Hellos",
        title: "The Flight of Solomon",
        points: ["In the discovery of his family’s long heritage, Milkman finds himself connected to a new sense of identity. This revelation comes alive through the story of Solomon’s flight, a tale that speaks of escape and return. In his reflections on the legend, Milkman begins to respect the sacrifices made and the legacies left by his predecessors, feeling a new desire to love and reconnect with his roots, which once seemed distant and irrelevant.", 
        "Discovering what is truly important to him, Milkman is able to find new meaning in his life through the connections he forges with his family and heritage. Milkman is able to finally fly."]
    }
    ];

  return (
    <div className="App">
        <div className = "gradient__text">
            <h1 className="lithum_title">The Journey of Life</h1>
        </div>
      <h2 className="title_description">In this virtual art gallery, discover the journeys of characters as they search for meaning in their lives. Inspired by Virginia Woolf’s To the Lighthouse and Toni Morrison's The Song of Solomon, this exhibition explores the pivotal moments and psychological evolutions of two emblematic figures: Lily Briscoe and Milkman Dead.</h2>
      <div className="titleContainer">
        <div className="titleLeft">To the Lighthouse</div>
        <div className="titleRight">Song of Solomon</div>
      </div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      <h2 className="end_description">Thank you for visiting. Your journey does not end here. Continue to explore, reflect, and discover. What will your story be?</h2>
    </div>
  );
}
