# Keyword map : Etruria Retail

Worked example of the Step 4 keyword + intent map (playbook.md, section A). One row per primary page. This is a pre-launch prototype: volume and difficulty are qualitative and labelled Estimated, never measured. Intent codes: I informational, N navigational, C commercial, T transactional. IT-only site, Italian keywords.

| page | primary keyword | intent | secondary keywords | pillar/cluster | Est. volume | Est. difficulty | page type |
|---|---|---|---|---|---|---|---|
| index.html | gruppo distribuzione centro italia | N | supermercati toscana, insegne supermercato, spesa di qualità | Brand (pillar) | Med (Estimated, pre-launch) | High (Estimated, pre-launch) | home |
| chi-siamo.html | gruppo supermercati toscana storia | I | distribuzione organizzata, filiera corta, prodotti del territorio | Brand (spoke) | Low (Estimated, pre-launch) | Low (Estimated, pre-launch) | about |
| insegne.html | insegne supermercato | C | supermercato di quartiere, cash and carry, superstore, marca propria | Offerta (pillar) | Med (Estimated, pre-launch) | Med (Estimated, pre-launch) | category/pillar |
| punti-vendita.html | supermercati toscana | C | trova supermercato, negozi aperti, orari supermercato grosseto | Rete (pillar) | High (Estimated, pre-launch) | High (Estimated, pre-launch) | category/locator |
| sempre-con-te.html | carta fedeltà spesa | T | carta fedeltà supermercato, punti spesa, raccolta punti | Fedeltà (spoke) | Med (Estimated, pre-launch) | Med (Estimated, pre-launch) | landing |
| franchising.html | franchising supermercato | T | aprire supermercato in franchising, affiliazione supermercato, insegna in franchising | Sviluppo rete (spoke) | Med (Estimated, pre-launch) | High (Estimated, pre-launch) | landing |
| contatti.html | etruria retail contatti | N | assistenza clienti supermercato, numero verde, sede grosseto | Brand (spoke) | Low (Estimated, pre-launch) | Low (Estimated, pre-launch) | contact |

## Clustering notes (pillar + spoke)

- **Brand** pillar = `index.html`; spokes = `chi-siamo.html`, `contatti.html`. The name "Etruria Retail" is the entity all pages anchor to.
- **Offerta** pillar = `insegne.html` (the six insegne + the marca Sapori di Etruria). It is a true hub: it references every real insegna on the page.
- **Rete** pillar = `punti-vendita.html` (the store locator). Geographic intent ("supermercati toscana", city + CAP queries).
- **Fedeltà** spoke = `sempre-con-te.html`. Transactional: the reader wants to activate the card.
- **Sviluppo rete** spoke = `franchising.html`. Transactional: the reader wants to apply as a franchisee.

No cannibalisation: each page owns one primary keyword. "supermercati toscana" sits on `punti-vendita.html` (locator intent), not on the home, which owns the broader brand/group query.

## GEO-flagged pages (AI-answer-friendly)

- `chi-siamo.html` : definitional ("che cos'è Etruria Retail", group history) : answer-first opening paragraph.
- `sempre-con-te.html` : how-it-works ("come funziona la carta fedeltà") : the three-step list is the snippet-ready block.
- `contatti.html` : the FAQ block answers common questions in 40 to 60 words each (kept as on-page content for AI citation, no FAQ rich-result promise per the schema kill-list).
