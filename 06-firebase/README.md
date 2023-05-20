## 1. Utwórz nowy projekt w firebase

Na bazie informacji z zajęć załóz projekt w [Firebase](https://firebase.google.com/).

## 2. Dodaj kolejcę z danymi o studentach

- kolekcja students powinna zawierać listę studentów

  - dane kazdego studenta powinny zawierać:
    - imię,
    - nazwisko,
    - adres,
    - data urodzenia,
    - klasę (np. 1A, 2C, 3B itd),
    - przedmioty z przypisanymi do nich ocenami (4-5 przedmiotów po 3 oceny),
    - uwagi

- Stwórz kilkoro takich studentów (6-8).

## 3. Stwórz pustą templatkę React i podłącz do niej firestore

- `npm create vite@latest` lub `npx create-react-app students`,
- wygeneruj konfigurację dla nowej aplikacji webowej w firebase i podłącz do niej aplikację w React.

## 4. Stwórz szkielet aplikacji w React

- dodaj routing `npm i react-router-dom`,
- stwórz szkielet zawierający zawsze widoczny `<Navbar />` i `<Footer />` pomiędzy którymi wyświetlana będzie treść strony,
- skonfiguruj routing strony - chcemy aby znalazły się na niej takie podstrony:

  - `/` dla Home
  - `/students` dla Uczniów
  - `/notes` dla Uwag
  - `/grades` dla Ocen

- Zbuduj komponenty `<NavBar />` i `<Footer />`. `<Navbar />` niech zawiera linki do wszystkich podstron i odsyłajkę do `<Home />`. Wykorzystaj w tym celu komponent `<Link />` z `react-router-dom`.

- Zdefiniuj komponent `<Home />` - poinformujesz tam o zawartości podstron.

  ### Students

  - Zdefniuj komponent `<Students />`, w którym wyciągniesz dane o studentach z firestore i wyświetlisz na ekranie następujące dane:
  - imię i nazwisko,
  - data urodzenia,
  - adres,
  - klasa,

  ### Grades

  - Zdefiniuj komponent `<Grades />`, w którym wyciągniesz dane o studentach z firestore i wyświetlisz na ekranie następujące dane:
  - imię i nazwisko,
  - przedmioty z przypisanymi do nich ocenami

  * Rozwaz podział komponentu `<Grades />` na osobne komponenty

  ### Notes

  - Zdefiniuj komponent `<Notes />`, w którym wyciągniesz dane o studentach z firestore i wyświetlisz na ekranie nastepujące dane:
  - imię i nazwisko,
  - uwagi w dzienniku,

  * Rozwaz podział komponentu `<Notes />` na osobne komponenty

  ## 5. NICE:

  - wykorzystaj bibliotekę [react-hot-toast](https://react-hot-toast.com/) do wyświetlania komunikatów o błędach przy zasysaniu danych z firebase,
