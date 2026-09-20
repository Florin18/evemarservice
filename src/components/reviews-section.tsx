import { reviews, siteConfig } from "@/data/site";
import { Icon } from "./icon";

export function ReviewsSection() {
  return (
    <section className="section section--paper">
      <div className="shell reviews-section">
        <div className="reviews-section__intro">
          <h2>Experiențele clienților noștri</h2>
          <p>Comentarii publicate de clienți pe pagina oficială EVEMARSERVICE.</p>
        </div>
        {reviews.length > 0 ? (
          <div className="review-grid">
            {reviews.map((review) => (
              <figure key={`${review.author}-${review.quote}`}>
                <blockquote>„{review.quote}”</blockquote>
                <figcaption>
                  <strong>{review.author}</strong>
                  <a href={review.sourceUrl} target="_blank" rel="noreferrer">
                    Comentariu pe Facebook <Icon name="arrow" />
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="review-empty"><p>Recomandările verificate ale clienților sunt disponibile pe pagina oficială EVEMARSERVICE. Nu publicăm aici testimoniale până când textul și autorul lor nu sunt confirmate.</p><a className="text-link" href={siteConfig.facebook} target="_blank" rel="noreferrer">Vezi pagina de Facebook <Icon name="arrow" /></a></div>
        )}
      </div>
    </section>
  );
}
