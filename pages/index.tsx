import { Button, Htag, P } from "@/components";

export default function Home(): JSX.Element {
  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "20px",
      }}
    >
      <Htag tag="h1">Text</Htag>
      <Htag tag="h2">Text</Htag>
      <Htag tag="h3">Text</Htag>
      <Button appreance="primary" arrow="right">
        Button
      </Button>
      <Button appreance="ghost" arrow="right">
        Button
      </Button>
      <P size="l">Большой</P>
      <P size="m">Средний</P>
      <P size="s">Маленький</P>
    </div>
  );
}
