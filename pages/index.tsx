import { Button, Htag, P, Tag } from "@/components";

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
      <Tag size="s">S Ghost</Tag>
      <Tag size="m" color="red">
        M Red
      </Tag>
      <Tag size="s" color="green">
        S Green
      </Tag>
      <Tag size="m" color="primary">
        M Primary
      </Tag>
      <Tag size="s" color="grey">
        S Grey
      </Tag>
    </div>
  );
}
