import { useEffect, useState } from "react";
import Person from "./Person";
import { list as persons } from "./data";
const App = () => {
  const [selected, setSelected] = useState(0);
  const next = () => {
    setSelected((prev) => {
      if (prev === persons.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };
  const prev = () => {
    setSelected((prev) => {
      if (prev === 0) {
        return persons.length - 1;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [selected]);

  return (
    <main>
      <button onClick={next}>next</button>
      <Person {...persons[selected]} />
      <button onClick={prev}>prev</button>
    </main>
  );
};
export default App;
