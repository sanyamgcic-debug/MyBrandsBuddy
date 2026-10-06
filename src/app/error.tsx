"use client";
export default function ErrorPage({ reset }: { reset: () => void }) { return <div className="empty-page"><h1>A small pause<br/>in the journey.</h1><p>This page couldn’t load. Please try again.</p><button className="button button-primary" onClick={reset}>Try again</button></div>; }
