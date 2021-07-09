import React from "react";

interface User {
  title: React.ReactNode;
  pageTitle: string;
  mainTitle: string;
  theme: 'react' | 'angular' | 'vue' | 'js' | 'svelte' | null;
  description?: React.ReactNode;
}

const user: User = {
  title: "9gu ⚡",
  description: 
    "Mi nombre empieza con 9 porque del 1 al 8 estaban ocupados. Soy Frontend Dev y cree este blog para escribir sobre cosas que me parezcan interesantes.",
  theme: "react",
  mainTitle: "Blog",
  pageTitle: " | 9gustin"
}

export default user;
