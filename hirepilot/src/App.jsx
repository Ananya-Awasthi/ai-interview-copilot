// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Problem from "./components/Problem";
// import HowItWorks from "./components/HowItWorks";
// import Features from "./components/Features";
// import Who from "./components/Who";
// import Impact from "./components/Impact";
// import  Tech from "./components/Tech";
// import CTA from "./components/CTA";
// import chatButton from "./components/ChatButton";
// import ChatButton from "./components/ChatButton";
// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Problem  />
//       <HowItWorks />
//       <Features />
//       <Who />
//       <Impact />
//       <Tech />
//       <CTA />
//       <ChatButton />
//     </>
//   );
// }
import React, { useState } from "react";
import Chatbot from "./Chatbot"; // adjust path if needed

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Who from "./components/Who";
import Impact from "./components/Impact";
import Tech from "./components/Tech";
import CTA from "./components/CTA";
import ChatButton from "./components/ChatButton";

export default function App() {

  // 🔥 CONTROL CHATBOT HERE
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Who />
      <Impact />
      <Tech />
      <CTA />

      {/* 👇 CONNECT BUTTON */}
      <ChatButton openChat={() => setChatOpen(true)} />

      {/* 👇 CHATBOT */}
      <Chatbot open={chatOpen} setOpen={setChatOpen} />
    </>
  );
}