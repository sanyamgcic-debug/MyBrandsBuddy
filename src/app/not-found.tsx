import { copy } from '@/data/copy';
import { ButtonLink } from '@/components/ui';
export default function NotFound() {
  return (
    <div className="empty-page">
      <span className="eyebrow">{copy.app_not_found['404_a_little_off_course']}</span>
      <h1>
        {copy.app_not_found.lets_get_you}
        <br />
        {copy.app_not_found.back_on_track}
      </h1>
      <p>{copy.app_not_found.we_couldnt_find_that_page_your_next}</p>
      <ButtonLink href="/">{copy.app_not_found.back_to_home}</ButtonLink>
    </div>
  );
}
