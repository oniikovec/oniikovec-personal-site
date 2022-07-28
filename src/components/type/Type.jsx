import TypeIt from "typeit-react";
import { TypeContainer } from "./Type.styles";

const typeit = (instance) => {
  instance
    .pause(2000)
    .type("a developer.")
    .pause(2000)
    .move(-11)
    .pause(1000)
    .type(" web")
    .pause(500)
    .move(11)
    .pause(8000);

  return instance;
};

const Type = () => {
  return (
    <TypeContainer>
      <TypeIt
        element="span"
        options={{
          waitUntilVisible: true,
          loop: true,
          lifeLike: true,
          speed: 100,
        }}
        getBeforeInit={typeit}
      />
    </TypeContainer>
  );
};

export default Type;
