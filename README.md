# Musée des Dinosaures - Application AR

Bienvenue dans le projet React Native (Expo) pour le Musée des Dinosaures.
Cette application permet aux utilisateurs de naviguer à travers un écran de bienvenue, des instructions, et d'accéder à une vue caméra (simulation AR).

## Prérequis

- Node.js installé sur votre machine.
- Pour iOS : Xcode (macOS uniquement).
- Pour Android : Android Studio (ou un appareil Android).
- Pour tester simplement : L'application **Expo Go** sur votre téléphone.

## Installation

Installez les dépendances du projet :

```bash
npm install
```

## Lancer le projet

Pour démarrer le serveur de développement Expo :

```bash
npx expo start
```

Une fois lancé, vous verrez un QR Code dans le terminal.
- **Physique** : Scannez-le avec l'application Camera (iOS) ou Expo Go (Android).
- **Simulateur iOS** : Appuyez sur la touche `i` (nécessite Xcode configuré).
- **Emulateur Android** : Appuyez sur la touche `a` (nécessite Android Studio configuré).

## Dépannage

### Erreur Xcode "xcrun"
Si vous rencontrez une erreur liée à `xcrun` ou au simulateur iOS, essayez de réinitialiser les outils de ligne de commande :

```bash
sudo xcode-select --reset
```
Puis réessayez.
