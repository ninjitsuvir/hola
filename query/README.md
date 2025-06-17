﻿# **📚 Instruccions per Utilitzar el Repositori Template - MongoDB Query Evaluator**
Aquest projecte és un Repositori de Plantilla de GitHub dissenyat per avaluar consultes MongoDB. Segueix aquests passos per utilitzar-lo correctament:

-----
## **🚀 1. Crear el teu Repositori a partir de la Plantilla**
1. **Accedeix al repositori plantilla:**
2. **Fes clic al botó verd Use this template → Create a new repository**
   -  **Nom**: Ex. S2.4
   -  **Visibilitat:** Tria Public (perquè funcionin les GitHub Actions) o Private (si prefereixes treball privat).
   -  **Include all branches:** No cal (la plantilla només utilitza main).
3. **Crea el repositori:** Fes clic a Create repository.

-----
## **✍️ 2.Escriure Consultes i Índexs**
Pots editar els arxius directament a GitHub amb el botó ‘edit this file’.
### **📂 Arxiu** queries.js
- Ubicació: query/queries.js
- **Format requerit**:

```javascript
// X. Enunciat de la consulta
db.restaurants.find({...}, { _id: 0, campo1: 1, campo2: 1 });
```
- **Regles**:
  - Excloure sempre \_id: 0.
  - Respetar **l'orden exacte** dels camps en les projeccions.
### **📂 Arxiu** indexes.js
- Ubicació: query/indexes.js
- **Exemple**:

```javascript
db.restaurants.createIndex({ borough: 1 });
db.restaurants.createIndex({ "location.coordinates": "2dsphere" });
```
-----
## **🔍 3. Provar Localment (Opcional)**
Pots fet proves y executar l'anàlisi localment.

Segueix les instruccions a:
\
📄 [script/README.md](https://github.com/IT-Academy-Back/S2.4-MongoDB-Evaluator/blob/main/script/README.md)


-----
## **📤 4. Pujar Canvis a GitHub**
1. **Desa els teus canvis**:
   -  Fet clic al botó verd **Commits changes**
   -  Cada cop que desis els canvis s'executarà una nova prova.
----
2. **🔍 Verifica els resultats**:
   -  Ve a la pestanya Actions al teu repositori.
   -  Quand finalitzi el workflow, revisa:
      - **Informe de rendiment**: docs/performanceReport.md
      - **Comparació de resultats**: docs/expectedResults.md
-----
## **🔄 5. Reintents y Correccions**
Si hi ha errors:

1. Corregeix les consultes o índexs als arxius corresponents.
2. Torna a fer commit.
3. GitHub Actions s'executarà automàticament un altre cop.
-----
## **📌 Notes Importants**
- **No modifiquis** l'estructura de arxius/carpetes (excepte queries.js i indexes.js).
- Les consultes s'avaluen per:
  - **Correcció** (resultats esperats).
  - **Rendiment** (ús d'índexs, eficiència).
- Si el teu repositori és *private*, assegura't que **GitHub Actions tingui permisos** (a Settings > Actions > General).
-----
## **🆘 Soport**
Tens problemes? Obre un **Issue** al repositori plantilla o contacta amb el teu mentor.

-----
Ja està! Ara pots resoldre les consultes y rebre feedback automatitzat. 🎯
