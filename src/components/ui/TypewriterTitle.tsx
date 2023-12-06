"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(" Poupe seu tempo, aumente a sua criatividade.")
          .pauseFor(1000)
          .deleteAll()
          .typeString(" Tudo na palma das suas mãos.")
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
