How to install it  

git pull https://github.com/Ant13Z/MTS-tv.git .  
docker build -t test-assignment-300121 .  
docker run --rm -it -p 8080:8080 -v $(pwd):/front test-assignment-300121 sh  
yarn start  
go to localhost:8080

Notes:

1. Не стал ставить шрифт, могло уйти много времени
2. Не успел сделать сортировку и фильтр
3. Не успел нормально доделать табы

4. Зато сконфигурировал докер, кривенько, но работает

Местами поведение додумал сам.