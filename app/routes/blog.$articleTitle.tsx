import type { LoaderFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog page" },
    { name: "description", content: "Welcome to mon blog!" },
  ];
};

export const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  console.log(params);
  // Make your request / find here
  

  // update the return object with the data you want to pass to the component
  return {
    article: params.articleTitle,
  }
};

export default function BlogArticle() {
  const { article } = useLoaderData<{ article: string }>(); // it wont be a string in real life
  return (
    <div>
      <h1>{article}</h1>
    </div>
  );
}
