import { Typewriter } from "react-simple-typewriter";

export default function AnimatedText() {
  return (
    <div className="text-lg lg:text-2xl text-secondary font-montserrat font-[500]">
      I am a{" "}
      <span className="text-acent">
        <Typewriter
          words={[
            "React Js Developer",
            "Next Js Developer",
            "TypeScript Developer",
            "Tailwind Css Expert",
          ]}
          loop={0} // Infinite Loop
          cursor
          cursorStyle="|"
          typeSpeed={150} // Typing Speed
          deleteSpeed={50} // Deleting Speed
          delaySpeed={1000} // Delay before retyping
        />
      </span>
    </div>
  );
}
