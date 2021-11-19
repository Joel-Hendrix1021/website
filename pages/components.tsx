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
      <Input label={"Label"} />
      <Input type={"email"} />
    </div>
  );
}

//event: actived, error, focused inactive o default
