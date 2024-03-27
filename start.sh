#!/bin/bash

# 确保脚本以 root 用户运行
if [ "$(id -u)" != "0" ]; then
   echo "该脚本必须以 root 权限运行" 1>&2
   exit 1
fi

echo "启动后端服务..."
cd cmd/server 
go run main.go &

# 运行 KubePi Dashboard
echo "启动 Dashboard 服务..."
cd ../../web/dashboard
npm run serve &

# 运行 KubePi Web
echo "启动 Web 服务..."
cd ../../web/kubepi
npm run serve &

echo "所有服务已启动。"
