-- PostgreSQL queries
-- By JORDAN DOMINGUEZ & ERIKA PINGATORE
-- December 18, 2017


-- Show all data
SELECT
    *
FROM
    country;

-- Show POP of USA
SELECT
	code,
    name,
    population
FROM
	country
WHERE
	code = 'USA'

-- Show SURFACE AREA of USA
SELECT
	code,
    name,
    surfacearea
FROM
	country
WHERE
	code = 'USA'

-- List all African Countries w/ Pop < 30,000,000 && Life Expectancy > 45
SELECT
	code,
    name,
    continent,
    population,
    lifeexpectancy
FROM
	country
WHERE
	continent = 'Africa'
    AND
	population < 30000000
    AND
    lifeexpectancy > 45.0;


-- Countries that are "something like" a republic
SELECT
    code,
    country,
    governmentform
FROM
    country
WHERE
	governmentform LIKE '%Republic%';

-- Something like a republic, indepyear after 1945
SELECT
    code,
    country,
    governmentform,
    indepyear
FROM
    country
WHERE
	governmentform LIKE '%Republic%'
    AND
    indepyear > 1945;

-- Not like a republic, indepyear after 1945
SELECT
    code,
    country,
    governmentform,
    indepyear
FROM
    country
WHERE
	NOT(governmentform LIKE '%Republic%')
    AND
    indepyear > 1945;

-- LOWEST LIFE Expectancy of COUNTRIES
SELECT
    code,
    name,
    lifeexpectancy
FROM
    country
ORDER BY
	lifeexpectancy ASC
LIMIT
	15;

-- Highest life expectancy
SELECT
    code,
    name,
    lifeexpectancy
FROM
    country
WHERE
	lifeexpectancy IS NOT NULL
ORDER BY
	lifeexpectancy DESC
LIMIT
	15;

-- Lowest/Highest Pop Density
SELECT
    code,
    name,
    population / surfacearea AS pop_density
FROM
    country
WHERE
	population / surfacearea != 0
ORDER BY
	pop_density ASC
LIMIT
	5;
-- 'Greenland'
-- 'Svalbard and Jan Mayen'
-- 'Falkland Islands'
-- 'Pitcairn'
-- 'Western Sahara'

SELECT
    code,
    name,
    population / surfacearea AS pop_density
FROM
    country
ORDER BY
	pop_density DESC
LIMIT
	5;

-- 'Macao'
-- 'Monaco'
-- 'Hong Kong'
-- 'Singapore'
-- 'Gibraltar'


-- Smallest 10 COUNTRIES
SELECT code, name, surfacearea, population, surfacearea * population AS area_pop
FROM country
WHERE population !=0
ORDER BY area_pop
LIMIT 10

-- Largest 10 countries
SELECT code, name, surfacearea, population, surfacearea * population AS area_pop
FROM country
WHERE population !=0
ORDER BY area_pop DESC
LIMIT 10

-- using WITH, smallest 10 countries w/ biggest GNP
WITH smallest_countries AS(
    SELECT code, name, surfacearea, population, gnp, surfacearea * population AS area_pop
    FROM country
    WHERE population !=0
    ORDER BY area_pop
    LIMIT 10
)
SELECT *
FROM smallest_countries
ORDER BY gnp DESC;

--Bermuda

WITH smallest_countries AS(
    SELECT code, name, surfacearea, population, gnp, gnp / population AS per_cap_gnp, surfacearea * population AS area_pop
    FROM country
    WHERE population !=0 AND gnp !=0
    ORDER BY area_pop
    LIMIT 10
)
SELECT *
FROM smallest_countries
ORDER BY per_cap_gnp DESC;
--Bermuda

-- Biggest Countries, top gnp
WITH biggest_countries AS(
    SELECT code, name, surfacearea, population, gnp, gnp / population AS per_cap_gnp, surfacearea * population AS area_pop
    FROM country
    WHERE population !=0 AND gnp !=0
    ORDER BY area_pop DESC
    LIMIT 10
)
SELECT *
FROM biggest_countries
ORDER BY gnp DESC;
-- USA

-- biggest per cap GNP
WITH biggest_countries AS(
    SELECT code, name, surfacearea, population, gnp, gnp / population AS per_cap_gnp, surfacearea * population AS area_pop
    FROM country
    WHERE population !=0 AND gnp !=0
    ORDER BY area_pop DESC
    LIMIT 10
)
SELECT *
FROM biggest_countries
ORDER BY per_cap_gnp DESC;

-- USA

-- SUM of SURFACE AREA of BIGGEST COUNTRIES IN THE WORLD

WITH biggest_countries AS(
    SELECT code, name, surfacearea, population, gnp, gnp / population AS per_cap_gnp, surfacearea * population AS area_pop
    FROM country
    WHERE population !=0 AND gnp !=0
    ORDER BY area_pop DESC
    LIMIT 10
)

SELECT SUM(biggest_countries.surfacearea)
FROM biggest_countries;

'7.02172e+07'

-- SUM of SURFACE AREA of SMALLEST COUNTRIES IN THE WORLD
WITH smallest_countries AS(
    SELECT code, name, surfacearea, population, gnp, gnp / population AS per_cap_gnp, surfacearea * population AS area_pop
    FROM country
    WHERE population !=0 AND gnp !=0
    ORDER BY area_pop ASC
    LIMIT 10
)

SELECT SUM(smallest_countries.surfacearea)
FROM smallest_countries;

'517.9'

-- Size of CONTINENTS IN AREA AND POP
SELECT continent, SUM(surfacearea) as area, SUM(population) as pop
FROM country
GROUP BY continent;
--
-- 'Europe','2.30491e+07','730074600'
-- 'Oceania','8.56429e+06','30401150'
-- 'Asia','3.1881e+07','3705025700'
-- 'North America','2.42145e+07','482993000'
-- 'Africa','3.02504e+07','784475000'
-- 'Antarctica','1.31321e+07','0'
-- 'South America','1.78649e+07','345780000'


-- Region w/ Highest Avg GNP
SELECT region, AVG(gnp) as avg_gnp
FROM country
GROUP BY region
ORDER BY avg_gnp DESC

-- North America 1822378

-- Most Influential Head of State measured by Pop
SELECT name, headofstate, population
FROM country
ORDER BY population DESC;

-- 'China','Jiang Zemin',1277558000


-- Most influential head of state measured by surfacearea
SELECT name, headofstate, surfacearea
FROM country
WHERE headofstate != ''
ORDER BY surfacearea DESC;

-- 'Russian Federation','Vladimir Putin','1.70754e+07'

-- Most common forms of GOVT

SELECT governmentform, COUNT(governmentform) AS gov_count
FROM country
GROUP BY governmentform
ORDER BY gov_count DESC;

-- Republic

-- What are the forms of government for the top ten countries by surface area?
WITH biggest_countries AS(
    SELECT code, name, surfacearea, population, gnp, governmentform
    FROM country
    WHERE population !=0 AND gnp !=0
    ORDER BY surfacearea DESC
    LIMIT 10
)
SELECT *
FROM biggest_countries
ORDER BY surfacearea DESC;

-- What are the forms of government for the top ten richest nations? (technically most productive)

SELECT code, name, surfacearea, population, gnp, governmentform
FROM country
WHERE population !=0 AND gnp !=0
ORDER BY gnp DESC
LIMIT 10

-- 'USA','United States','9.36352e+06',278357000,'8510700.00','Federal Republic'
-- 'JPN','Japan','377829',126714000,'3787042.00','Constitutional Monarchy'
-- 'DEU','Germany','357022',82164700,'2133367.00','Federal Republic'
-- 'FRA','France','551500',59225700,'1424285.00','Republic'
-- 'GBR','United Kingdom','242900',59623400,'1378330.00','Constitutional Monarchy'
-- 'ITA','Italy','301316',57680000,'1161755.00','Republic'
-- 'CHN','China','9.5729e+06',1277558000,'982268.00','People'sRepublic'
-- 'BRA','Brazil','8.5474e+06',170115000,'776739.00','Federal Republic'
-- 'CAN','Canada','9.97061e+06',31147000,'598862.00','Constitutional Monarchy, Federation'
-- 'ESP','Spain','505992',39441700,'553233.00','Constitutional Monarchy'

-- What are the forms of government for the top ten richest per capita nations? (technically most productive)

-- What is the 3rd most common language spoken?

SELECT
	c.code AS code,
	c.name AS country,
    c.population as population,
    cl.language as language,
    cl.percentage as percentage,
    (percentage/100) * population AS pop_speak_lang,
FROM
	country c JOIN
	countrylanguage cl ON c.code = cl.countrycode
ORDER BY
	pop_speak_lang DESC


SELECT
	c.code AS code
FROM
	country c JOIN
	city ct ON c.code = ct.countrycode
WHERE
	code = "CHL"

-- How many cities are in Chile?
SELECT
count(countrycode) as ct
FROM
	city
WHERE
	countrycode = 'CHL'

-- What is the total population in China?
SELECT
code, name, population
FROM
country
WHERE
name = 'China';

-- How many countries are in North America?

SELECT continent, count(country.code) AS number_of_countries
FROM country
WHERE continent = 'North America'
GROUP BY continent


-- Which countries gained their independence before 1963?
SELECT name, indepyear
FROM COUNTRY
WHERE indepyear < 1963
ORDER BY indepyear DESC;


-- What is the total population of all continents?


WITH country_pops AS(
    SELECT continent, sum(country.population) AS pop
    FROM country
	GROUP BY continent
)

SELECT sum(country_pops.pop) as country_sum
FROM country_pops

-- What is the average life expectancy for all continents?
WITH country_exp AS(
    SELECT continent, avg(country.lifeexpectancy) AS life_exp
    FROM country
    GROUP BY continent
    ORDER BY life_exp DESC
)
SELECT avg(country_exp.life_exp)
FROM country_exp


-- Which countries have the letter z in the name? How many?

SELECT name
FROM country
WHERE name like '%z%'

'Azerbaijan'
'Belize'
'Bosnia and Herzegovina'
'Brazil'
'Kazakstan'
'Kyrgyzstan'
'Mozambique'
'Swaziland'
'Switzerland'
'Tanzania'
'Czech Republic'
'Uzbekistan'
'Venezuela'

-- What is the age of Jamaica?
SELECT name, indepyear, (2017 - indepyear) as age
FROM country
WHERE name LIKE 'Jamaica'


-- Are there any countries without an official language? Hint: WHERE ... NOT IN ( SELECT ... FROM ... WHERE ...)
SELECT *
FROM countrylanguage
WHERE isofficial = false
