import React from "react";

interface User {
  title: React.ReactNode;
  pageTitle: string;
  mainTitle: string;
  theme: 'react' | 'angular' | 'vue' | 'js' | 'svelte' | null;
  description?: React.ReactNode;
}

const user: User = {
  title: "Jhon Doe",
  description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores quaerat at dolor ducimus nostrum facere id modi molestias reiciendis",
  theme: null,
  mainTitle: "Blog",
  pageTitle: " | Jhon Doe"
}

export default user;
