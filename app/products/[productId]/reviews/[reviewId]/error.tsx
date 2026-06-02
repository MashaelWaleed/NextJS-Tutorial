"use client";
//error component must be client component

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ReviewError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  //Calling reset() by itself is like
  // refreshing a webpage while your computer is
  //disconnected from the internet—it just
  // reloads the local failure page.

  //You must use router.refresh()
  // alongside reset() for Server Component errors so Next.js
  // actually goes back to the server to try your 50/50
  // lottery again!
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h1>Error Loading Review</h1>
      <p>
        Sorry, there was an error loading the review details. Please try again
        later.
      </p>
      <p>Error message: {error.message}</p>
      <button
        onClick={() => {
          console.log("Retry clicked");
          reload();
        }}
      >
        Retry
      </button>
    </div>
  );
}

{
  /** 
   - router.refresh()	
    The Server layer	
    Re-runs your server code to get fresh data or bypass a previous server failure.

    - reset()
    The Client layer	
    Clears out the visual error UI in the browser.

    - startTransition()
    The Coordinator
    Syncs the Server and Client actions together so the UI doesn't glitch or freeze while loading.
    
    */
  // An error.tsx file only catches errors that occur in the same route segment
  // or in child segments below it.
  //
  // It cannot catch errors thrown by the layout.tsx that exists in the same
  // folder, because the layout is rendered before the error boundary.
  //
  // Therefore, if a layout throws an error, the error.tsx in that same segment
  // won't handle it. You need to place an error.tsx in a parent segment
  // (higher in the route tree) to catch errors from that layout
  /** app
├─ error.tsx          ← catches errors from layout.tsx below
├─ layout.tsx
└─ products
   ├─ error.tsx
   ├─ layout.tsx
   └─ page.tsx 
   
   
   What is global-error.tsx in Next.js?

global-error.tsx is a special error boundary that catches errors 
that normal error.tsx files cannot handle, especially errors 
coming from the Root Layout.
The Root Layout is the top-level layout that wraps your entire 
application.
 -Unlike a normal error.tsx, a global error page must
 render its own HTML document:
 -global-error.tsx only works as expected in production mode.
   
   */
}
