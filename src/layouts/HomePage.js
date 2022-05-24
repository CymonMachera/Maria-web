import React from "react";
import image from "../assets/images/woman.png";

export default function HomePage() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "inherit",
      }}
      class="h-screen flex  items-center pl-[5vw]"
    >
      <div>
        <h1 >Small Chats for big feelings</h1>
        <p class="w-2/5">
          Meet Maria, your personal mental health ally that helps you get back
          to feeling like yourself. Grounded in clinical research and powered by
          AI, Maria is easy to talk to and fits right into your life, whenever
          you want to chat. There's no such thing as appointments or waiting
          rooms here.
        </p>
      </div>
    </div>
  );
}
