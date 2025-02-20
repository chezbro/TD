import React from "react";

import { defaultAuthor } from "@/lib/metadata";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center border-t py-6">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Built by @{defaultAuthor.handle}
      </p>
    </footer>
  );
};

export default Footer;
