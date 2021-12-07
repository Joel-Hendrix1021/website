import { Button } from "components/button";
import TeamCard from "components/TeamCard/TeamCard";

export function getStaticProps() {
  return {
    props: {
      notFound: process.env.NODE_ENV === "production",
    },
  };
}

export default function Components(): JSX.Element {
  return (
    <div>
      <pre>props: {}</pre>
      <Button />
      <TeamCard
        name="Jhon Doe"
        subName="Founder"
        src="https://imgur.com/Uk4XFuO.png"
      />
    </div>
  );
}
