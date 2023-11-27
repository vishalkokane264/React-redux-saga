const HomePage = () => {
  let name = "vishalkokane625";

  function helloName() {
    name = "vishalsakokane";
    let abc = function hello() {
      let abc1 = function hello() {
        let abc2 = function hello2() {
          name = "kokanevishal2";
          return console.log("abc2 username", name);
        };
        console.log("abc1 username", name);
        abc2();
      };
      console.log("abc username", name);
      abc1();
    };
    abc();
  }

  helloName();

  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
};

export default HomePage;
