# cat-api

## Install Beego in Simple Way

```bash

    go version

-------

    go install github.com/beego/bee/v2@latest

-------

    echo "export PATH=\$PATH:\$(go env GOPATH)/bin" >> ~/.bashrc
    source ~/.bashrc

-------

    bee version

-------

    cd ~/go/src/

-------

    bee new myproject

-------

    cd myproject

-------

    bee run

-------

    http://localhost:8080/

------

if Failed--->
    
    export GO111MODULE=on
    go mod init cat-api
    go mod tidy

    bee run

-------

    http://localhost:8080/

------

```