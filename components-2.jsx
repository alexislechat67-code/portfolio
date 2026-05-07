/* global React */
const { useState: useState2 } = React;

// ---------- Expériences ----------
function Experiences({ onOpenTrace }) {
  return (
    <section id="experiences">
      <div className="section-mark">03</div>
      <div className="container">
        <div className="reveal"><span className="eyebrow">Terrain</span></div>
        <h2 className="section-title reveal">Expériences.</h2>

        {/* DOUCY CONSILIUM */}
        <div className="exp">
          <div className="exp-header reveal">
            <div className="exp-header-left">
              <div className="meta">Stage — 3 mois</div>
              <h3>Cabinet comptable Doucy Consilium</h3>
              <div className="date">Mars – Juin 2025 · Sélestat · ~8 personnes</div>
            </div>
            <div className="exp-logo">
              <img src="assets/logoentreprise/logodoucy.png" alt="Doucy Consilium" />
            </div>
          </div>

          <div className="exp-body reveal">
            <div className="exp-block">
              <h4>Missions</h4>
              <ul>
                <li>Opérateur de saisie</li>
                <li>Participation à des tâches liées à la lutte anti-blanchiment</li>
              </ul>
              <h4 style={{ marginTop: 32 }}>Actions concrètes</h4>
              <ul>
                <li>Analyse de dossiers clients</li>
                <li>Lecture et interprétation de critères liés à la conformité</li>
                <li>Création d'un fichier Excel pour évaluer la situation d'un client dans le cadre de la lutte anti-blanchiment</li>
                <li>Structuration de l'information</li>
                <li>Simplification de l'utilisation pour les autres membres de l'équipe</li>
              </ul>
            </div>
            <div className="exp-block">
              <h4>Résultats</h4>
              <ul>
                <li>Gain de temps significatif</li>
                <li>Outil réutilisable par plusieurs personnes</li>
                <li>Réponse automatisée plus lisible</li>
                <li>Meilleure structuration des vérifications</li>
              </ul>
              <h4 style={{ marginTop: 32 }}>Apprentissages</h4>
              <ul>
                <li>Lecture rigoureuse de textes réglementaires</li>
                <li>Recoupement de données</li>
                <li>Adaptation à un nouvel environnement professionnel</li>
                <li>Compréhension du fonctionnement d'un cabinet comptable</li>
                <li>Création d'un outil concret à partir d'un besoin métier</li>
              </ul>
            </div>
          </div>

          <div className="exp-stats reveal">
            <div className="stat">
              <div className="value">~40%</div>
              <div className="label">Gain de temps estimé sur l'évaluation des dossiers</div>
            </div>
            <div className="stat">
              <div className="value">×4</div>
              <div className="label">Dossiers traitables par heure (vs. process manuel)</div>
            </div>
            <div className="stat">
              <div className="value">100%</div>
              <div className="label">Adoption par l'ensemble de l'équipe</div>
            </div>
          </div>

          <div className="exp-trace reveal" style={{ cursor: 'pointer' }} onClick={() => onOpenTrace && onOpenTrace('lcbft')}>
            <div className="exp-trace-header">
              <span>Preuve / Trace</span>
              <span className="label-dim">Extrait Excel — Outil d'évaluation anti-blanchiment</span>
            </div>
            <div className="exp-trace-img">
              <img src="assets/couverture/LCBFT.png" alt="Outil LCBFT" />
            </div>
            <div className="exp-trace-cta">
              <span className="label-dim">Cliquer pour ouvrir le détail</span>
              <a onClick={(e) => { e.preventDefault(); onOpenTrace && onOpenTrace('lcbft'); }} href="#">Ouvrir le détail →</a>
            </div>
          </div>
        </div>

        {/* VHM */}
        <div className="exp">
          <div className="exp-header reveal">
            <div className="exp-header-left">
              <div className="meta">Alternance — 12 mois</div>
              <h3>VHM Group</h3>
              <div className="date">Sept. 2025 – Août 2026 · Molsheim</div>
            </div>
            <div className="exp-logo">
              <img src="assets/logoentreprise/logovhm.png" alt="VHM Group" />
            </div>
          </div>

          <div className="exp-body reveal">
            <div className="exp-block">
              <h4>Missions principales</h4>
              <ul>
                <li>Comptabilité fournisseur interne de 6 sociétés</li>
                <li>Notes de frais des commerciaux</li>
                <li>Vérification et saisie de factures</li>
                <li>Logiciel Verify / Incogest</li>
                <li>TVA, écritures de bilan</li>
                <li>Gestion des factures véhicules</li>
                <li>Relation fournisseurs, suivi des règlements et relances</li>
              </ul>
            </div>
            <div className="exp-block">
              <h4>Projet phare</h4>
              <h5>Dashboard de suivi des déchets et dépenses énergétiques</h5>
              <ul>
                <li>Export et structuration des données comptables</li>
                <li>Création d'une base structurée avec liste de codes</li>
                <li>Fiche mémo pour les utilisateurs</li>
                <li>Power Query, TCD, recherches</li>
                <li>Alimentation d'un dashboard d'analyse</li>
                <li>Analyse annuelle, mensuelle, par dépôt, par fournisseur</li>
                <li>Objectif : suivi, aide à la déclaration, vision RSE, identification des coûts</li>
              </ul>
            </div>
          </div>

          <div className="exp-body reveal" style={{ marginTop: -24 }}>
            <div className="exp-block">
              <h4>Résultats</h4>
              <ul>
                <li>Fort gain de temps</li>
                <li>Fiabilisation du suivi</li>
                <li>Meilleure lisibilité de l'information</li>
                <li>Amélioration de la démarche RSE</li>
                <li>Amélioration potentielle de l'image de l'entreprise</li>
                <li>Passage d'un traitement manuel à une logique de pilotage structurée</li>
              </ul>
            </div>
            <div className="exp-block">
              <h4>Apprentissages</h4>
              <ul>
                <li>Excel avancé, VBA</li>
                <li>Structuration de base de données</li>
                <li>Power Query, contrôle de gestion, reporting</li>
                <li>Préparation et animation de réunions</li>
                <li>Vulgarisation de mon travail</li>
                <li>Compréhension de la RSE et des processus internes</li>
              </ul>
            </div>
          </div>

          <div className="exp-stats reveal">
            <div className="stat">
              <div className="value">~65%</div>
              <div className="label">Réduction du temps de traitement mensuel</div>
            </div>
            <div className="stat">
              <div className="value">6</div>
              <div className="label">Sociétés consolidées dans un seul dashboard</div>
            </div>
            <div className="stat">
              <div className="value">100%</div>
              <div className="label">Données tracées & fiabilisées sur 12 mois</div>
            </div>
          </div>

          <div className="exp-trace reveal" style={{ cursor: 'pointer' }} onClick={() => onOpenTrace && onOpenTrace('dechets')}>
            <div className="exp-trace-header">
              <span>Preuve / Trace</span>
              <span className="label-dim">Dashboard de suivi des déchets — Aperçu du système</span>
            </div>
            <div className="exp-trace-img">
              <img src="assets/dechets/dashboard-rse.png" alt="Dashboard RSE" />
            </div>
            <div className="exp-trace-cta">
              <span className="label-dim">Cliquer pour ouvrir le détail</span>
              <a onClick={(e) => { e.preventDefault(); onOpenTrace && onOpenTrace('dechets'); }} href="#">Ouvrir le détail →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Situation Problème ----------
function Situation() {
  const steps = [
    { num: '01', title: 'Contexte', body: <p>Les quantités sont essentielles pour suivre les déchets. Sans cette donnée, l'outil perd une partie de sa valeur et le suivi devient incomplet.</p> },
    { num: '02', title: 'Problème identifié', body: <p>Absence d'information clé sur certaines factures. Impossibilité d'obtenir un suivi complet et fiable des déchets.</p> },
    { num: '03', title: 'Démarche', body: (
      <ul>
        <li>Identification du blocage</li>
        <li>Brainstorming et échanges en réunion</li>
        <li>Recherche de solutions</li>
        <li>Prise de contact avec le fournisseur</li>
        <li>Demande d'amélioration de l'information transmise</li>
      </ul>
    )},
    { num: '04', title: 'Solution', body: <p>Intégration progressive des quantités sur les factures. Amélioration du processus amont avec le fournisseur.</p> },
    { num: '05', title: 'Résultat', body: <p>Outil rendu plus fiable, meilleure qualité de donnée, meilleure exploitation possible du dashboard.</p> },
  ];
  return (
    <section id="situation">
      <div className="section-mark accent">04</div>
      <div className="container">
        <div className="reveal"><span className="eyebrow">Analyse</span></div>
        <h2 className="section-title reveal">Situation <em>problème</em>.</h2>
        <div className="situation-intro reveal">
          <h3>Données manquantes dans le suivi des déchets</h3>
          <p>Dans le cadre du projet de suivi des déchets chez VHM Group, certaines factures fournisseur ne contenaient pas les quantités nécessaires au bon fonctionnement de l'outil.</p>
        </div>
        <div className="situation-steps reveal">
          {steps.map(s => (
            <div className="situation-step" key={s.num}>
              <div className="num">{s.num}</div>
              <h4>{s.title}</h4>
              {s.body}
            </div>
          ))}
        </div>
        <div className="situation-bottom reveal">
          <div className="situation-skills">
            <h4>Compétences mobilisées</h4>
            <div className="chips">
              {['Analyse','Communication','Résolution de problème','Compréhension du besoin métier','Amélioration de processus'].map(c =>
                <span key={c} className="chip">{c}</span>
              )}
            </div>
          </div>
          <div className="situation-bilan">
            <h4>Bilan</h4>
            <p>Cette situation m'a appris l'importance de la qualité de la donnée, la nécessité d'agir sur le processus et pas seulement sur l'outil, et la valeur d'une réflexion orientée amélioration continue.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Experiences, Situation });
