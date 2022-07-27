import TypeIt from "typeit-react";

const typeit = (instance) => {
  instance
    .pause(1000)
    .type("a developer.")
    .pause(2000)
    .move(-11)
    .pause(1000)
    .type(" web")
    .pause(500)
    .move(11)
    .pause(9000);

  return instance;
};

const Type = () => {
  return (
    <div className="">
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
    </div>
  );
};

export default Type;
