export type MegaMenuColumnLink = {
  href: string;
  label: string;
};

export type MegaMenuData = {
  title: string;
  kicker: string;
  description: string;
  links: MegaMenuColumnLink[];
  cardTitle: string;
  cardText: string;
  cardCta: string;
  cardHref: string;
};

export default function MegaMenu({ menu }: { menu: MegaMenuData }) {
  return (
    <div className="mega">
      <div className="mega-grid">
        <div className="mega-intro">
          <div className="mega-kicker">{menu.kicker}</div>
          <h3>{menu.title}</h3>
          <p>{menu.description}</p>
        </div>

        <div className="mega-list">
          {menu.links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label} <span aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="mega-card">
          <div>
            <strong>{menu.cardTitle}</strong>
            <small>{menu.cardText}</small>
          </div>
          <a href={menu.cardHref} className="btn mega-card-cta">
            {menu.cardCta}
          </a>
        </div>
      </div>
    </div>
  );
}
