drop table "NYC Dog Licensing";
CREATE TABLE "NYC Dog Licensing" (
    "RowNumer" varchar   NOT NULL,
    "AnimalName" varchar NOT NULL,
    "AnimalGender" varchar   NOT NULL,
    "AnimalBirthMonth" date   NOT NULL,
    "BreedName" varchar   NOT NULL,
    "Borough" varchar   NOT NULL,
    "ZipCode" varchar,
    "CommunityDistrict" numeric,
    "CensusTract2010" varchar,
    "NTA" varchar,
    "CityCouncilDistrict" varchar,
    "CongressionalDistrict" numeric,
    "StateSenatorialDistrict" numeric,
    "LicenseIssuedDate" date,
    "LicenseExpiredDate" date,
    CONSTRAINT "pk_NYC-Dog-Licensing" PRIMARY KEY (
        "RowNumer"
     )
);

select * from "NYC Dog Licensing";