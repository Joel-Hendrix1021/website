import { Button } from "components/button";
import IconSettings from "components/icons/IconSettings";

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
      <br />
      <IconSettings width={30} height={30} />
    </div>
  );
}
