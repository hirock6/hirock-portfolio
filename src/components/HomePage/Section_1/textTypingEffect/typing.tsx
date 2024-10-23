"use client";
import Typewriter from "typewriter-effect";
interface Props {
  text: object | any;
}

const Typing: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <Typewriter
        options={{
          strings: [text.text1, text.text2, text.text3],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Typing;
