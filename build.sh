#!/bin/bash

# 确保脚本以 root 用户运行
if [ "$(id -u)" != "0" ]; then
   echo "该脚本必须以 root 权限运行" 1>&2
   exit 1
fi

#安装环境
nodejsVersion=$(node -v)
if [[ $nodejsVersion == v16.20.2 ]]; then
  echo "Node.js version is 16.20.2, skip install"
else
  # 执行其他版本的分支
  echo "Node.js version is not 16.20.2, then install it"
    curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs
fi

go_version=$(go version | awk '{print $3}')
if [[ $go_version == "go1.21.3" ]]; then
    echo "go version is 1.21.3, skip install"
else
    echo "install go"
    wget https://dl.google.com/go/go1.21.3.linux-amd64.tar.gz
    sudo tar -C /usr/local -xzf go1.21.3.linux-amd64.tar.gz
    echo 'PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
    source ~/.bashrc
fi

echo $(npm version)
echo $(go version)

#编译nodejs项目
NPM_REGISTRY="https://registry.npmmirror.com"
NPM_REGISTY=$NPM_REGISTRY

npm config set registry ${NPM_REGISTRY}
cd web/kubepi && npm install
cd ../../web/dashboard && npm install

cd ../../
make build_web


#编译go项目
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
go env -w CGO_ENABLED=0
go mod download
make build_gotty
make build_bin