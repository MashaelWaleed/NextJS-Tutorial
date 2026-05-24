import Link from "next/link";

export default async function ArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams; // Default to English if no language is specified

  return (
    <main>
      <h1>Article: {articleId}</h1>
      <p>This is the content of the article page.</p>
      <p>Language: {lang} </p>

      <div className="flex space-x-4">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      </div>
    </main>
  );
}

//for client component we can not use async function and we can not use await in client component so we can use "use" to get the params and searchParams
//'use client';
//import { use } from "react";
//export default function ArticlePage({ params, searchParams }: { params: Promise<{ articleId: string }>; searchParams: Promise<{ lang?: "en" | "fr" | "es" }>; }) {
//  const { articleId } = use(params);
//  const { lang="en" } = use(searchParams);

//Note: while page.tsx has access to params and searchParams, layout.tsx only has access to params.
