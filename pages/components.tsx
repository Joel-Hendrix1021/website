import { Button } from "components/button";
import Input from "components/input/Input";

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
      <Input borderColor="#CDD5F0" />
    </div>
  );
}
