# REST Countries API with color theme switcher

Chalange from [frontendmentor.io](https://www.frontendmentor.io/) on advanced difficulty level:

> Responsive page displaying all countries from the **[API](https://restcountries.com)**, with pagination and detailed page for each country

### 📸 Screenshots:

![REST Countries app screenshot](https://res.cloudinary.com/dz209s6jk/image/upload/v1554827486/Challenges/wirxeocmd6tpnn9c5oqc.jpg)

### Page capabilities:

- Show all countries from the API on the home page
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

---

## 🏃 Running:

### To start the project, you need to perform several actions:

1. Сlone the repository
2. Go to project folder
3. Install node_modules
4. Start development server

### Console commands:

```
git clone https://github.com/VitalyBabenko/CountryLIst.git
cd CountryList
npm install
npm start
```

This will run locally and listening on port 3000 (http://localhost:3000)

---

## 🛠 Stack:

- **React v18**
- **React Router**
- **Redux toolkit**
- **Axios**
- **SCSS**

---

## Pagination

[Rest Countries Api ](https://restcountries.com)
does not support pagination so the [usePagination](https://github.com/VitalyBabenko/CountryLIst/blob/master/src/hooks/usePagination.ts) hook was used.
