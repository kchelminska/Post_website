# React_sda_project

## Zadanie końcowe 
Link do API - https://dummyjson.com/docs/posts
Link do repo - https://github.com/szu-szy/wyk-13.05

# Konfiguracja projektu
x Stwórz puste repozytorium na github
x Sklonuj je lokalnie za pomoca git clone
x Stwórz w pobranym repozytorium pusty projekt React
x komenda: npx create-react-app my-app --template typescript
x po zainstalowaniu dodaj paczki:
x node-sass
x firebase
x react-router-dom

# Konfiguracja Firebase
x stwórz nowy projekt wraz z aplikacją
x dodaj plik do folderu src > firebaseConfig.ts
x w komponencie App zainicjuj aplikacje:
x const app = initializeApp(firebaseConfig);

# Stwórz routing aplikacji (kazda strona ma inny header)
x homepage "/" 
x lista postów "/posts"
x strona pojedynczego posta "/posts/:id"
x strona do rejestracji użytkownika "/register"
x strona do logowania "/login"
x strona do formularza który tworzy nowy post "/posts/new"

# Komponenty
- App - zawiera liste postów i przekazuje ją nizej
- Lista postów - wyswietla posty
- Pojedyńczy post + formularz do edycji - wyswietla post i edytuje oraz usuwa
- Formularz do stworzenia postu - tworzy nowy post
- Formularz do logowania - loguje do firebase
- Formularz do rejestracji - tworzy uzytkownika w firebase

# Dodatkowe uwagi
- logika wydziela w hookach
- lekkie wystylowanie wszystkich komponentów