import ResourceCard from "./ResourceCard";
import TestCard from "./TestCard";

import styles from "./outercomponent.module.css";
export default function OuterComponent({ apClasses }) {
  return (
    <div className={styles.container}>
      {/* <TestCard /> */}
      {apClasses.map((apClass, index) => (
        <ResourceCard key={index} name={apClass.name} Image={apClass.image} />
      ))}
    </div>
  );
}
