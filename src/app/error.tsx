'use client';
import { copy } from '@/data/copy';
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="empty-page">
      <h1>
        {copy.app_error.a_small_pause}
        <br />
        {copy.app_error.in_the_journey}
      </h1>
      <p>{copy.app_error.this_page_couldnt_load_please_try_again}</p>
      <button className="button button-primary" onClick={reset}>
        {copy.app_error.try_again}
      </button>
    </div>
  );
}
