import { Button, Htag, P, Rating, Tag } from "@/components";
import { withLayout } from "@/layout/Layout";
import { useState } from "react";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  return (
    <div>
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
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <Rating rating={2} isEditable={false} />
    </div>
  );
}

export default withLayout(Home);
