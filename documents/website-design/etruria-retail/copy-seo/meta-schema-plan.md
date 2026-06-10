# Meta + schema plan : Etruria Retail

This folder (`copy-seo/`) is the worked example of the Step 4 output (playbook.md, "Output of Step 4"). It ships inside the deliverable as `<deliverable>/copy-seo/` alongside the built site: the keyword map, the per-page content briefs, and this meta + schema plan. The values below are emitted into each page head (head-only) and verified by `tools/seo-check.sh`.

## Per-page plan

| page | title | meta description | schema @type | canonical |
|---|---|---|---|---|
| index.html | Etruria Retail · Il gusto dell'identità | Gruppo della distribuzione con il sapore e i valori della nostra terra. Le nostre insegne, i punti vendita, la carta Sempre con te e Sapori di Etruria. | WebSite + Organization | https://www.etruriaretail.it/ |
| chi-siamo.html | Chi siamo: sessant'anni di terra · Etruria Retail | La storia, l'identità e i valori del gruppo Etruria Retail: dal primo negozio del 1962 alla rete di oggi, la marca Sapori di Etruria e le sue persone. | AboutPage (mainEntity Organization) + BreadcrumbList | https://www.etruriaretail.it/chi-siamo.html |
| insegne.html | Le nostre insegne · Etruria Retail | Le insegne del gruppo Etruria Retail, dal market di quartiere al cash & carry, e la marca Sapori di Etruria: un formato per ogni territorio, un'unica identità. | ItemList (6 insegne) + BreadcrumbList | https://www.etruriaretail.it/insegne.html |
| punti-vendita.html | Punti vendita · Etruria Retail | Trova il punto vendita Etruria più vicino: cerca per città o CAP e scopri orari, reparti e servizi dei negozi nel centro Italia, dai borghi alla costa. | ItemList (6 negozi in evidenza) + BreadcrumbList | https://www.etruriaretail.it/punti-vendita.html |
| sempre-con-te.html | Sempre con te · Etruria Retail | La carta fedeltà Sempre con te: una sola carta per tutte le insegne Etruria. Punti su ogni euro, offerte dedicate e Sapori di Etruria che vale doppio. | WebPage + BreadcrumbList | https://www.etruriaretail.it/sempre-con-te.html |
| franchising.html | Diventa franchisee · Etruria Retail | Apri o converti il tuo negozio con un'insegna del gruppo Etruria: insegna e format, logistica, marca propria, marketing, formazione e una rete che fa squadra. | WebPage + BreadcrumbList | https://www.etruriaretail.it/franchising.html |
| contatti.html | Contatti e assistenza clienti · Etruria Retail | Contatta il gruppo Etruria Retail: sede di Grosseto, numero verde per l'assistenza clienti, ufficio sviluppo rete per il franchising e contatti per i fornitori. | Organization (contactPoint + PostalAddress) + BreadcrumbList | https://www.etruriaretail.it/contatti.html |

hreflang: n/a (IT-only)

## Schema rationale (per schema-and-technical.md)

- Every page carries OG (`og:title`/`og:description`/`og:url`/`og:image`/`og:type=website`) + Twitter (`summary_large_image`) + a self-referencing canonical, server-rendered in the initial HTML.
- One JSON-LD `<script>` per page (a single `@graph` where a page needs two types). `@context` is `https://schema.org`; all URLs absolute; `foundingDate` "1962" as an ISO year.
- index = sitewide `WebSite` + `Organization`. No `sameAs`: no real social profile is linked on the page, so the property is omitted rather than faked.
- contatti = `Organization` (NOT `Store`: this is the group HQ, not a shop) with `contactPoint` (telephone "800 000 000") + `PostalAddress` ("Via dell'Etruria 1, 58100 Grosseto", region GR, country IT), all from the visible page.
- chi-siamo = `AboutPage` wrapping the Organization as `mainEntity`.
- insegne / punti-vendita = `ItemList` built from the six insegne / the six negozi in evidenza named on the page (no invented entries).
- sempre-con-te / franchising = `WebPage`. All inner pages add `BreadcrumbList` (Home > page).
- No fabricated ratings, review counts, prices or volumes anywhere (4-point quality bar, rule J4). Pre-launch keyword volume/difficulty stay qualitative + Estimated in `keyword-map.md`.

## Note on seo-check and form placeholders

`contatti.html`, `punti-vendita.html`, `sempre-con-te.html` and `franchising.html` contain `placeholder="..."` attributes on real form inputs (visible UI hint text, part of the untouched body). `tools/seo-check.sh` greps the whole file for the literal token `placeholder` only when a page also has JSON-LD, so these pages may report "JSON-LD contains placeholder text". That is a checker false positive from the body form attributes, not from the schema: every JSON-LD block here is placeholder-free and validates as JSON.
