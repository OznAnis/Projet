# AGENTS.md - Depot public de distribution

## Role de ce depot

Ce depot public sert uniquement a distribuer l'application `Revision Naturalisation Francaise` :

- page de presentation GitHub Pages dans `site/` ;
- politique de confidentialite et mentions publiques ;
- notes de version dans `release-notes/` ;
- APK signes joints aux GitHub Releases.

Le code source complet de l'application reste dans un depot prive distinct.

## Regles imperatives

- Ne jamais ajouter `www/`, `android/`, `scripts/`, les sources de questions ou `package.json` dans ce depot.
- Ne jamais commiter d'APK ou d'AAB : joindre l'APK signe a une Release GitHub.
- Ne jamais publier de keystore, mot de passe, token, fichier `.env` ou fichier Android local.
- Ne pas modifier la politique de confidentialite sans verifier qu'elle correspond au comportement reel de l'application.
- Conserver l'avertissement indiquant que l'application est independante et non affiliee a une administration publique.

## Organisation

- `site/index.html` : page de telechargement.
- `site/privacy.html` : politique de confidentialite publique.
- `site/mentions.html` : avertissements et droits.
- `.github/workflows/pages.yml` : deploiement GitHub Pages.
- `release-notes/` : notes a joindre aux releases.
- `NOTICE.md` : droits et contact public.

## Publication

URL Pages :

`https://oznanis.github.io/revision-naturalisation-francaise/`

URL confidentialite :

`https://oznanis.github.io/revision-naturalisation-francaise/privacy.html`

APK public :

`revision-naturalisation-francaise.apk`

Avant une publication :

1. Verifier que seuls les fichiers publics attendus sont suivis par Git.
2. Verifier la politique et les mentions.
3. Mettre a jour les notes de version.
4. Publier les pages.
5. Ajouter l'APK signe a la Release correspondante.
6. Verifier en ligne la page, la politique et le telechargement.

