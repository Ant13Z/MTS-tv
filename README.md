git pull git .
docker build -t test-assignment-300121 .
docker run --rm -it -p 8080:8080 -v $(pwd):/front test-assignment-300121 sh

docker run --rm -it -p 8080:8080 -v $(pwd):/src test7 sh
./node_modules/@angular/cli/bin/ng new app

go to localhost:8080