# Folder Content
## SQL
- ERD Diagram
- Postgresql Script for creating the database
- Note: Postgresql database is the last step in ETL (mainly aim to fulfill the requirement of using a database)
*** 
## Python
- Jupyter Notebook file containing data cleaning code prior to Postgres database creation
- Jupyter Notebook self made checkpoints folder
***
## CSV
- "Data Dictinary" Excel file containing basic descriptions of the variables in the actual raw dataset
- "NYC_Dog_Licensing_dataset" is the raw dataset from Kaggle
- "nyc_dog_cleaned" is the cleaned csv file that should be good to use in the analyses. It is also the one used for Postgres data import.
***
## Text File
- Described the judgement call I made to clean the dataset
***
### Data Overview
- There are some problems in the cleaned csv file (mentioend in the text file). However, those problematic variables, as discussed,are not supposed to be used in any analysis. 
- One possible issue can be some unreadable zipcode values. But if fixed coordinates of the boroughs are used for geographical analysis, zip code variable issue should not bother.
- Essential variables (e.g. Animal Name, Gender, Birth Month, Borough, License issued/expired date) do not have missing values
- Breed name variable does have missings and values like "Unknown". If this needs to be further cleaned, please let me know.