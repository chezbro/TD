import { Button } from "./ui/button";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function CallToAction({ title, description, buttonText, buttonLink }: CallToActionProps) {
  return (
    <div className="my-12 rounded-lg bg-accent p-8 text-center">
      <h2 className="mb-3 text-2xl font-bold">{title}</h2>
      <p className="mb-6 text-muted-foreground">{description}</p>
      <Button size="lg" asChild>
        <a href={buttonLink}>{buttonText}</a>
      </Button>
    </div>
  );
}
