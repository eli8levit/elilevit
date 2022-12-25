import React from "react";
import Tree from "~/sources/images/tree.png";

export default function About() {
  return (
    <main className="content-container font-butler">
      <h1 className="mb-32 h-[120px] w-full w-max bg-blueBg bg-[length:100%_100px] bg-left-bottom bg-no-repeat text-8xl font-black text-primaryText">
        Little bit about this place
      </h1>
      <div className="mx-auto mb-24 flex flex-row items-center gap-x-24">
        <img src={Tree} height="500px" className="h-[500px]" />
        <div>
          <p className="p-8 text-3xl text-primaryText">
            Hello and welcome to my personal blog! I'm from Israel 🇮🇱 and I love
            sharing my hobbies, interests, and projects with others. On this
            blog, you'll find a mix of art, design, coding, and more. Some of my
            passions include biking, music, and photography (all of the photos
            you see here are taken by me). I also enjoy sharing my personal
            biking and lifestyle blog with readers. Feel free to browse and
            explore my art and projects. If you have any questions or just want
            to connect, don't hesitate to reach out. Thanks for visiting!
          </p>
          <p className="px-8 text-lg text-gray-700">
            <i>
              Thanks for{" "}
              <a
                target="blank"
                rel="noopener noreferrer"
                className="text-casualBlue underline"
                href="https://chat.openai.com/chat"
              >
                ChatGPD
              </a>{" "}
              that helped me to finetune this text 😁
            </i>
          </p>
        </div>
      </div>
    </main>
  );
}
