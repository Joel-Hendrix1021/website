import AllianceCard from "components/AllianceCard/AllianceCard";
import { Button } from "components/button";

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
      <AllianceCard />
    </div>
  );
}
